import { onMounted, onUnmounted, ref } from "vue";

export const sections = [
  { id: "landing", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  // { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
] as const;

/** Viewport line (px from top) used to pick the current section */
const ACTIVATION_OFFSET_PX = 120;
/** How close to the document bottom still counts as scrolled to the end */
const SCROLL_END_SLOP_PX = 2;

export function useScrollSpy() {
  const activeSection = ref<(typeof sections)[number]["id"]>(sections[0].id);
  let scrollRaf = 0;

  function scrollToSection(id: (typeof sections)[number]["id"]) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function isScrolledToEnd() {
    const remaining =
      document.documentElement.scrollHeight -
      (window.scrollY + window.innerHeight);

    return window.scrollY > 0 && remaining <= SCROLL_END_SLOP_PX;
  }

  function updateActiveSection() {
    if (isScrolledToEnd()) {
      activeSection.value = sections[sections.length - 1].id;
      return;
    }

    let current: (typeof sections)[number]["id"] = sections[0].id;

    for (const { id } of sections) {
      const element = document.getElementById(id);
      if (!element) {
        continue;
      }

      if (element.getBoundingClientRect().top <= ACTIVATION_OFFSET_PX) {
        current = id;
      }
    }

    activeSection.value = current;
  }

  function onScroll() {
    cancelAnimationFrame(scrollRaf);
    scrollRaf = requestAnimationFrame(updateActiveSection);
  }

  onMounted(() => {
    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    cancelAnimationFrame(scrollRaf);
  });

  return { sections, activeSection, scrollToSection };
}
