<template>
  <v-app-bar
    density="comfortable"
    color="var(--site-bg)"
    class="animate-enter-nav"
  >
    <v-spacer />
    <nav class="hidden md:flex gap-4 mr-4" aria-label="Primary">
      <v-btn
        v-for="section in sections"
        :key="section.id"
        variant="text"
        class="text-md font-normal transition-opacity uppercase tracking-wider p-2"
        :class="linkClass(section.id)"
        @click="scrollToSection(section.id)"
      >
        {{ section.label }}
      </v-btn>
    </nav>
    <v-btn
      class="md:!hidden mr-1"
      icon
      variant="text"
      :aria-expanded="menuOpen"
      aria-controls="mobile-nav"
      :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
      @click="menuOpen = !menuOpen"
    >
      <v-icon :icon="menuOpen ? 'mdi-close' : 'mdi-menu'" size="28" />
    </v-btn>
  </v-app-bar>

  <div
    v-if="menuOpen"
    class="mobile-nav-backdrop md:hidden"
    @click="menuOpen = false"
  >
    <nav
      id="mobile-nav"
      class="mobile-nav"
      aria-label="Primary"
      @click.stop
    >
      <v-btn
        v-for="section in sections"
        :key="section.id"
        variant="text"
        class="justify-start text-md font-normal uppercase tracking-wider px-4"
        :class="linkClass(section.id)"
        @click="goToSection(section.id)"
      >
        {{ section.label }}
      </v-btn>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useScrollSpy } from "../composables/useScrollSpy";

const { sections, activeSection, scrollToSection } = useScrollSpy();
const menuOpen = ref(false);

function linkClass(id: (typeof sections)[number]["id"]) {
  return activeSection.value === id
    ? "underline underline-offset-4 text-[var(--site-text-quaternary-color)]"
    : "hover:opacity-80";
}

function goToSection(id: (typeof sections)[number]["id"]) {
  menuOpen.value = false;
  scrollToSection(id);
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") menuOpen.value = false;
}

function onResize() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    menuOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("resize", onResize);
});
</script>

<style scoped>
.mobile-nav-backdrop {
  position: fixed;
  inset: 56px 0 0;
  z-index: 1000;
  background: rgb(0 0 0 / 0.45);
}

.mobile-nav {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: min(100%, 18rem);
  height: 100%;
  padding: 1rem 0.75rem;
  background: var(--site-bg);
}
</style>
