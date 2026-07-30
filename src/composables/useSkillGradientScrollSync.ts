import { onMounted, onUnmounted } from "vue";

/** Keeps --skill-gradient-scroll-y in sync for scroll-based gradient fallback (e.g. iOS). */
export function useSkillGradientScrollSync() {
  let frame = 0;

  const update = () => {
    document.documentElement.style.setProperty(
      "--skill-gradient-scroll-y",
      `${window.scrollY}px`,
    );
  };

  const onScroll = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  };

  onMounted(() => {
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    cancelAnimationFrame(frame);
  });
}
