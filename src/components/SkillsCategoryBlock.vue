<template>
  <v-card
    v-for="category in categories"
    :key="category.name"
    class="skills-category-card p-4 max-w-1/2 flex-grow"
    flat
  >
    <v-card-title>{{ category.name }}</v-card-title>
    <v-card-text class="flex flex-row flex-wrap gap-2 mt-4">
      <div
        v-for="skill in category.skills"
        :key="skill.name"
        class="flex flex-col items-center justify-center gap-2 p-2"
      >
        <i :class="[skill.icon, 'skill-icon', 'text-6xl']" aria-hidden="true" />
        <p class="text-sm text-center">{{ skill.name }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { categories } from "../data/skills";
import { useSkillGradientScrollSync } from "../composables/useSkillGradientScrollSync";

useSkillGradientScrollSync();
</script>

<style scoped>
.skills-category-card {
  transform: none;
}
</style>
