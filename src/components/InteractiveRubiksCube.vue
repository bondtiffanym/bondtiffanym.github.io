<template>
  <div ref="sceneRef" id="scene" class="scene">
    <div
      ref="pivotRef"
      id="pivot"
      class="pivot centered"
      :style="{ transform: pivotTransform }"
    >
      <div ref="cubeRef" id="cube" class="cube">
        <div
          v-for="index in 26"
          :key="index"
          :ref="(el) => setPieceRef(el, index - 1)"
          class="piece"
        >
          <div
            v-for="face in faces"
            :key="face"
            :class="['element', face]"
          ></div>
        </div>
      </div>
    </div>
    <div ref="guideRef" id="guide">
      <div
        v-for="n in anchorIndexes"
        :key="n"
        :id="`anchor${n}`"
        class="anchor"
        :style="{
          transform: `translateZ(3px) translateY(-33.33%) rotate(${-90 * n}deg) translateY(66.67%)`,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const faces = ["left", "right", "top", "bottom", "back", "front"] as const;
const anchorIndexes = [3, 2, 1, 0];
const stickerColors = [
    "green",
    "blue",
  "white",
  "yellow",
  "orange",
  "red",
] as const;

type Axis = "X" | "Y" | "Z";

const sceneRef = ref<HTMLElement | null>(null);
const pivotRef = ref<HTMLElement | null>(null);
const cubeRef = ref<HTMLElement | null>(null);
const guideRef = ref<HTMLElement | null>(null);
const pieceRefs = ref<(HTMLElement | null)[]>(Array.from({ length: 26 }, () => null));
const pivotTransform = ref("rotateX(-35deg) rotateY(-135deg)");

function setPieceRef(el: unknown, index: number) {
  pieceRefs.value[index] = (el as HTMLElement | null) ?? null;
}

function mx(i: number, j: number): number {
  return (
    [2, 4, 3, 5][j % 4 | 0] +
    (i % 2) * (((j | 0) % 4) * 2 + 3) +
    2 * ((i / 2) | 0)
  ) % 6;
}

function getAxis(face: number): Axis {
  return String.fromCharCode("X".charCodeAt(0) + Math.floor(face / 2)) as Axis;
}

function getPieces(): HTMLElement[] {
  return pieceRefs.value.filter((piece): piece is HTMLElement => piece !== null);
}

function assembleCube() {
  const pieces = getPieces();
  if (pieces.length < 26) {
    return;
  }

  function moveto(pieceIndex: number, face: number, id: { value: number }) {
    id.value += 1 << face;
    const element = pieces[pieceIndex].children[face] as HTMLElement;
    const sticker = document.createElement("div");
    sticker.setAttribute("class", `sticker ${stickerColors[face]}`);
    element.appendChild(sticker);
    return `translate${getAxis(face)}(${face % 2 * 4 - 2}em)`;
  }

  for (let i = 0; i < 26; i++) {
    const id = { value: 0 };
    const x = mx(i, i % 18);
    let transform = `rotateX(0deg)${moveto(i, i % 6, id)}`;

    if (i > 5) {
      transform += moveto(i, x, id);
      if (i > 17) {
        transform += moveto(i, mx(x, x + 2), id);
      }
    }

    pieces[i].style.transform = transform;
    pieces[i].id = `piece${id.value}`;
  }
}

function getPieceBy(face: number, index: number, corner: number): HTMLElement {
  const pieceId =
    (1 << face) +
    (1 << mx(face, index)) +
    (1 << mx(face, index + 1)) * corner;
  const piece = document.getElementById(`piece${pieceId}`);

  if (!piece) {
    throw new Error(`Missing cube piece: piece${pieceId}`);
  }

  return piece;
}

function swapPieces(face: number, times: number) {
  for (let i = 0; i < 6 * times; i++) {
    const piece1 = getPieceBy(face, i / 2, i % 2);
    const piece2 = getPieceBy(face, i / 2 + 1, i % 2);

    for (let j = 0; j < 5; j++) {
      const faceIndex1 = j < 4 ? mx(face, j) : face;
      const faceIndex2 = j < 4 ? mx(face, j + 1) : face;
      const sticker1 = piece1.children[faceIndex1].firstChild as HTMLElement | null;
      const sticker2 = piece2.children[faceIndex2].firstChild as HTMLElement | null;
      const className = sticker1?.className ?? "";

      if (className && sticker1 && sticker2) {
        sticker1.className = sticker2.className;
        sticker2.className = className;
      }
    }
  }
}

function animateRotation(face: number, cw: boolean, currentTime: number) {
  const pieces = getPieces();
  const k = 0.3 * (face % 2 * 2 - 1) * (2 * Number(cw) - 1);
  const qubes = Array.from({ length: 9 }, (_, index) =>
    index ? getPieceBy(face, index / 2, index % 2) : pieces[face],
  );

  function rotatePieces() {
    const passed = Date.now() - currentTime;
    const style = `rotate${getAxis(face)}(${k * passed * Number(passed < 300)}deg)`;

    qubes.forEach((piece) => {
      piece.style.transform = piece.style.transform.replace(/rotate.\([^)]+\)/, style);
    });

    if (passed >= 300) {
      swapPieces(face, 3 - 2 * Number(cw));
      return;
    }

    requestAnimationFrame(rotatePieces);
  }

  requestAnimationFrame(rotatePieces);
}

function preventDragStart(event: DragEvent) {
  event.preventDefault();
}

function onMouseDown(mdEvent: MouseEvent) {
  const scene = sceneRef.value;
  const pivot = pivotRef.value;
  const cube = cubeRef.value;
  const guide = guideRef.value;

  if (!scene || !pivot || !cube || !guide) {
    return;
  }

  const startXY = pivotTransform.value.match(/-?\d+\.?\d*/g)?.map(Number) ?? [0, 0];
  const target = mdEvent.target as HTMLElement | null;
  const element = target?.closest(".element") as HTMLElement | null;
  const faceContainer = (element ?? cube).parentElement;

  const face = element
    ? Array.from(faceContainer?.children ?? []).indexOf(element)
    : -1;

  function onMouseMove(mmEvent: MouseEvent) {
    if (element && face >= 0) {
      const hovered = document.elementFromPoint(mmEvent.pageX, mmEvent.pageY);
      const gid = /\d/.exec(hovered?.id ?? "");

      if (gid?.input?.includes("anchor")) {
        onMouseUp();
        const anchorIndex = Number(gid[0]);
        const adjacentFace = mx(face, anchorIndex + 3);
        const clockwise = (
          element.parentElement?.children[adjacentFace] as HTMLElement | undefined
        )?.hasChildNodes();
        animateRotation(
          mx(face, anchorIndex + 1 + 2 * Number(clockwise)),
          Boolean(clockwise),
          Date.now(),
        );
      }
    } else {
      pivotTransform.value =
        `rotateX(${startXY[0] - (mmEvent.pageY - mdEvent.pageY) / 2}deg)` +
        `rotateY(${startXY[1] + (mmEvent.pageX - mdEvent.pageX) / 2}deg)`;
    }
  }

  function onMouseUp() {
    if (!scene || !guide) {
      return;
    }

    scene.appendChild(guide);
    scene.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    scene.addEventListener("mousedown", onMouseDown);
  }

  (element ?? document.body).appendChild(guide);
  scene.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  scene.removeEventListener("mousedown", onMouseDown);
}

onMounted(() => {
  assembleCube();
  sceneRef.value?.addEventListener("mousedown", onMouseDown);
  document.addEventListener("dragstart", preventDragStart);
});

onUnmounted(() => {
  sceneRef.value?.removeEventListener("mousedown", onMouseDown);
  document.removeEventListener("dragstart", preventDragStart);
});
</script>

<style scoped lang="scss">
$base-color: #0a0a0a;
$element-size: 2em;
$sticker-size: 95%;
$rounded: 10%;
$cube-scale: 2.5;
$faces: (
  left: (0, -90, 180),
  right: (0, 90, 90),
  back: (0, 180, -90),
  front: (0, 0, 0),
  bottom: (-90, 0, -90),
  top: (90, 0, 180),
);
$colors: (
  blue: #001ca8,
  green: #006e16,
  white: #ddd,
  yellow: #e0ae00,
  orange: #ff5000,
  red: #df0500,
);


.centered {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.scene {
  width: 100%;
  min-height: 40rem;
  perspective: 1200px;
  transform-style: preserve-3d;

  > .pivot {
    width: 0;
    height: 0;
    transition: 0.18s;
  }

  .anchor {
    width: $element-size;
    height: $element-size * 3;
  }

  div {
    position: absolute;
    transform-style: inherit;
  }
}

// :deep(#piece4 > .element.top > .sticker) {
//   background-image: url("http://i63.tinypic.com/25hh1xu.png");
//   background-size: cover;
// }

.cube {
  font-size: $cube-scale * 100%;
  margin-left: -$element-size / 2;
  margin-top: -$element-size / 2;

  > .piece {
    width: $element-size - 0.1em;
    height: $element-size - 0.1em;

    > .element {
      width: 100%;
      height: 100%;
      background: $base-color;
      outline: 1px solid transparent;
      border: 0.05em solid $base-color;
      border-radius: $rounded;

      @each $face, $angles in $faces {
        &.#{$face} {
          transform: rotateX(#{nth($angles, 1)}deg) rotateY(#{nth($angles, 2)}deg)
            rotateZ(#{nth($angles, 3)}deg) translateZ($element-size / 2);
        }
      }

      :deep(.sticker) {
        @extend .centered;
        transform: translateZ(2px);
        width: $sticker-size;
        height: $sticker-size;
        border-radius: $rounded;
        outline: 1px solid transparent;
        box-shadow:
          inset 0.05em 0.05em 0.2rem 0 rgba(white, 0.25),
          inset -0.05em -0.05em 0.2rem 0 rgba(black, 0.25);

        @each $color, $value in $colors {
          &.#{$color} {
            background-color: $value;
          }
        }
      }
    }
  }
}
</style>
