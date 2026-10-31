<template>
  <v-card variant="elevated" class="p-6 bg-[var(--site-bg-mid)] h-full flex flex-col">
    <div class="flex flex-row gap-6">
    <div class="w-1/3 flex flex-col gap-4">
      <img :src="getImageSrc(project.image)" :alt="project.imageAlt" class="rounded w-full h-fit" />
    </div>
    <div class="w-2/3">
      <v-card-item class="self-start">
        <template #title>
          <v-card-title>{{ project.title }}</v-card-title>
        </template>
        <template #subtitle>
          <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
        </template>
      </v-card-item>
      <v-card-text class="project-card-body mt-2">
        <p class="project-card-lead">
          {{ project.lead }}
        </p>
        <p class="project-card-section-label">My contributions</p>
        <ul class="project-card-list">
          <li v-for="(contribution, index) in project.contributions" :key="`${project.title}-contribution-${index}`">
            {{ contribution }}
          </li>
        </ul>
      </v-card-text>
    </div>
    </div>
    <div class="h-full flex flex-col justify-end">
      <div class="w-full flex flex-row flex-wrap gap-2 mt-4 items-center">
        <p class="uppercase font-light tracking-wide text-base">Tech Stack:</p>
        <v-chip v-for="technology in project.technologies" :key="technology" color="var(--site-text-quaternary-color)" class="text-sm font-light px-4">
          {{ technology }}
        </v-chip>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects';

defineProps<{
  project: Project;
}>();

const getImageSrc = (image: string) => {
  return new URL(`../assets/${image}`, import.meta.url).href;
}
</script>

<style scoped>
.project-card-body {
  padding-top: 0;
}

.project-card-lead {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-card-section-label {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.project-card-list {
  margin: 0;
  padding-left: 1.25rem;
  list-style-type: disc;
  line-height: 1.6;
}

.project-card-list li+li {
  margin-top: 0.5rem;
}
</style>