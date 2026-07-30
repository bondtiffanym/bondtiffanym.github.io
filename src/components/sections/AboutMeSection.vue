<template>
  <div
    id="about"
    class="section-scroll-target h-screen flex flex-col px-42 mt-24"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">About Me</span>
    </h2>
    <div class="flex gap-4">
      <div class="w-1/2">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div class="w-1/2">Something something</div>
    </div>
    <h3 class="text-lg font-bold">Skills</h3>
    <div class="w-full flex flex-row flex-wrap gap-2">
      <SkillsCategoryBlock />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillsCategoryBlock from "../SkillsCategoryBlock.vue";
</script>

<style scoped>
img {
  padding: 10px;
}
</style>
