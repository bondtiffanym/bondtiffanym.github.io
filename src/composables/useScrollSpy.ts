import { onMounted, onUnmounted, ref } from "vue";

export const sections = [
  { id: "landing", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
] as const;

/** Viewport line (px from top) used to pick the current section */
const ACTIVATION_OFFSET_PX = 120;

export function useScrollSpy() {
  const activeSection = ref<(typeof sections)[number]["id"]>(sections[0].id);
  let scrollRaf = 0;

  function scrollToSection(id: (typeof sections)[number]["id"]) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function updateActiveSection() {
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
