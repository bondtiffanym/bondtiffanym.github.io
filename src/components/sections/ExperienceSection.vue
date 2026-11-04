<template>
  <div
    id="experience"
    class="section-scroll-target min-h-screen flex flex-col justify-center p-4 sm:p-8 md:p-12 lg:p-24 xl:p-42 mt-24"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">Professional Experience</span>
    </h2>
    <v-timeline
      class="experience-timeline mt-8"
      :side="lgAndDown ? 'end' : undefined"
      line-color="var(--site-text-quaternary-color)"
    >
      <v-timeline-item v-for="job in jobs" :key="job.company">
        <JobCard :job="job" />
      </v-timeline-item>
    </v-timeline>
    <v-card class="mt-24 flex flex-col gap-6 p-4 md:p-8 xl:flex-row">
      <div
        class="flex flex-col xl:w-1/3 justify-center items-center xl:items-start gap-2"
      >
        <p
          class="text-xs xl:ml-12 text-[var(--site-text-quaternary-color)] uppercase tracking-widest"
        >
          Testimonials
        </p>
        <h3 class="text-5xl font-bold">Feedback <br />& Reviews</h3>
        <p class="text-gray-400">
          Feedback from colleagues, managers, and clients.
        </p>
      </div>
      <FeedbackCarousel />
    </v-card>
  </div>
</template>

<script setup lang="ts">
import JobCard from "../JobCard.vue";
import { jobs } from "../../data/jobs";
import { useDisplay } from "vuetify";
import FeedbackCarousel from "../FeedbackCarousel.vue";

const { lgAndDown } = useDisplay();
</script>

<style scoped>
.experience-timeline :deep(.v-timeline-item__body) {
  min-width: 0;
}
</style>
