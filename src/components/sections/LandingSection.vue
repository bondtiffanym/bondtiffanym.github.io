<template>
  <div
    ref="landingRef"
    id="landing"
    class="section-scroll-target min-h-screen flex items-center justify-between gap-4 px-42"
  >
    <div class="text-start w-1/2 animate-enter-landing-text">
      <h1 class="text-6xl font-bold my-2">
        Hi! I'm
        <span class="text-gradient-brand">Tiffany Bond</span>
      </h1>
      <h2
        class="relative inline-block text-2xl font-bold my-2"
        :aria-label="subtitleAriaLabel"
      >
        <span class="invisible whitespace-nowrap" aria-hidden="true">
          {{ ghostText }}
        </span>
        <span class="typewriter-cursor absolute left-0 top-0 whitespace-nowrap">
          {{ displayedText }}
        </span>
      </h2>
      <p class="text-lg my-2">
        Senior software engineer focused on transforming complex ideas into
        intuitive, reliable products. Experienced in building customer-facing
        applications and developer platforms with an emphasis on scalability,
        maintainability, accessibility, and thoughtful user experiences.
      </p>
      <p class="text-lg my-2">
        Driven by challenging problems, clean architecture, and software that
        delivers real value. Background includes IoT companion applications,
        plugin-based platforms, and modern web experiences built with long-term
        maintainability in mind.
      </p>
      <v-chip
        class="text-sm font-light px-4 my-3"
        prepend-icon="mdi-map-marker-outline"
        color="var(--site-text-quaternary-color)"
      >
        <span class="ml-1">
          Currently: Senior Software Engineer @ People Inc.
        </span>
      </v-chip>
    </div>
    <div class="w-1/2 min-h-[22rem]">
      <div
        class="h-full w-full"
        :class="
          showCubeColumnEntrance
            ? 'animate-enter-landing-cube'
            : 'landing-cube-column-settled'
        "
        @animationend="onCubeColumnEntranceEnd"
      >
        <InteractiveRubiksCube v-if="isLandingVisible" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import InteractiveRubiksCube from "../InteractiveRubiksCube.vue";

const subtitles = [
  "Full-Stack Software Engineer",
  "TypeScrpt Enthusiast",
  "Accessibility Advocate",
  "Product-Driven Problem Solver",
];

const subtitleAriaLabel = computed(() => subtitles.join(". "));

const ghostText = computed(() =>
  subtitles.reduce(
    (longest, phrase) => (phrase.length > longest.length ? phrase : longest),
    "",
  ),
);

const displayedText = ref("");
const phraseIndex = ref(0);
const landingRef = ref<HTMLElement | null>(null);
const isLandingVisible = ref(true);
const showCubeColumnEntrance = ref(true);

const TYPE_INTERVAL_MS = 100;
const PAUSE_AFTER_TYPE_MS = 1500;
const PAUSE_AFTER_DELETE_MS = 500;

let cancelled = false;
let animationTimeout: ReturnType<typeof setTimeout> | undefined;
let visibilityObserver: IntersectionObserver | null = null;

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    animationTimeout = setTimeout(resolve, ms);
  });
}

function onCubeColumnEntranceEnd(event: AnimationEvent) {
  if (event.animationName !== "zoom-in") {
    return;
  }
  showCubeColumnEntrance.value = false;
}

async function runTypewriterCycle() {
  while (!cancelled) {
    const phrase = subtitles[phraseIndex.value];

    for (let index = 1; index <= phrase.length; index += 1) {
      if (cancelled) {
        return;
      }
      displayedText.value = phrase.slice(0, index);
      await sleep(TYPE_INTERVAL_MS);
    }

    await sleep(PAUSE_AFTER_TYPE_MS);

    for (let index = phrase.length - 1; index >= 0; index -= 1) {
      if (cancelled) {
        return;
      }
      displayedText.value = phrase.slice(0, index);
      await sleep(TYPE_INTERVAL_MS);
    }

    await sleep(PAUSE_AFTER_DELETE_MS);

    phraseIndex.value = (phraseIndex.value + 1) % subtitles.length;
  }
}

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showCubeColumnEntrance.value = false;
  }

  void runTypewriterCycle();

  visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isLandingVisible.value = entry?.isIntersecting ?? false;
    },
    { threshold: 0.15 },
  );

  if (landingRef.value) {
    visibilityObserver.observe(landingRef.value);
  }
});

onUnmounted(() => {
  cancelled = true;
  clearTimeout(animationTimeout);
  visibilityObserver?.disconnect();
});
</script>
