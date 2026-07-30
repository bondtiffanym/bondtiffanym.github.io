<template>
  <v-app-bar density="comfortable" color="var(--site-bg)" class="animate-enter-nav">
    <v-spacer />
    <nav class="flex gap-6 mr-4">
      <v-btn
        v-for="section in sections"
        :key="section.id"
        variant="text"
        class="text-md font-normal transition-opacity"
        :class="
          activeSection === section.id
            ? 'underline underline-offset-4 text-[var(--site-text-quaternary-color)]'
            : 'hover:opacity-80'
        "
        @click="scrollToSection(section.id)"
      >
        {{ section.label }}
      </v-btn>
    </nav>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useScrollSpy } from "../composables/useScrollSpy";

const { sections, activeSection, scrollToSection } = useScrollSpy();
</script>
