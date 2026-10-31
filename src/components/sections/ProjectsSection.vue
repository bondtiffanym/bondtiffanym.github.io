<template>
  <div
    id="projects"
    class="section-scroll-target min-h-screen flex flex-col justify-center px-42 mt-42"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">Professional Work</span>
    </h2>    
    <v-card variant="elevated" class="bg-[var(--site-bg-spotlight)] p-8 mt-8 flex items-center justify-center">
      <v-slide-group show-arrows class="flex items-center justify-center">
        <v-slide-group-item v-for="project in projects" :key="project.title">
          <div class="carousel-slide flex h-full w-full items-center justify-center py-4 mr-6">
            <ProjectCard :project="project" class="carousel-project-card" />
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard.vue";
</script>

<style scoped>
.carousel-slide {
  box-sizing: border-box;
}

.carousel-project-card {
  width: 100%;
  max-width: 42rem;
}
</style>
