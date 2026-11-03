<template>
  <div
    id="experience"
    class="section-scroll-target min-h-screen flex flex-col justify-center p-4 sm:p-8 md:p-12 lg:p-24 xl:p-42 mt-42"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">Professional Experience</span>
    </h2>
    <v-timeline
      class="mt-8"
      :side="lgAndDown ? 'end' : undefined"
      line-color="var(--site-text-quaternary-color)"
    >
      <v-timeline-item v-for="job in jobs" :key="job.company">
        <JobCard :job="job" />
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import JobCard from "../JobCard.vue";
import { jobs } from "../../data/jobs";
import { useDisplay } from "vuetify";

const { lgAndDown } = useDisplay();
</script>

<style scoped></style>
