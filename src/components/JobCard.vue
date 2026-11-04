<template>
  <v-card
    class="job-card min-w-0 max-w-full p-4 sm:p-6 flex flex-col mx-2 sm:mx-4 bg-[var(--site-bg-spotlight)]"
  >
    <v-card-title class="flex justify-between gap-x-4 gap-y-1">
      <div class="flex gap-4 min-w-0">
        <v-img
          :src="companyLogo"
          :alt="`${job.company} Logo`"
          class="w-14 h-14 sm:w-18 sm:h-18 shrink-0 rounded"
        />
        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span class="text-2xl sm:text-3xl font-bold">{{ job.company }}</span>
            <v-chip
              v-if="job.current"
              class="text-sm font-light px-4 gap-1"
              prepend-icon="mdi-radiobox-marked"
              color="success"
            >
              Current
            </v-chip>
          </div>
          <div>
            <span class="text-base text-[var(--site-text-highlight-color)]">
              {{ job.position }}
            </span>
          </div>
        </div>
      </div>
      <span class="text-sm text-gray-300 uppercase tracking-wide">{{
        job.duration
      }}</span>
    </v-card-title>
    <v-card-text class="mt-4 text-base">
      <p class="text-base">{{ job.description }}</p>
      <p class="text-medium font-bold mt-4">Key Contributions:</p>
      <ul class="list-disc list-inside ml-4 sm:ml-8">
        <li v-for="contribution in job.contributions" :key="contribution">
          {{ contribution }}
        </li>
      </ul>
      <div class="mt-4 flex gap-2 items-center flex-wrap">
        <p class="uppercase font-light tracking-wide text-base">Tech Stack:</p>
        <v-chip
          v-for="technology in job.technologies"
          :key="technology"
          class="text-sm font-light px-4 gap-1"
          color="var(--site-text-quaternary-color)"
        >
          {{ technology }}
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Job } from "../data/jobs";
import { computed } from "vue";

const props = defineProps<{
  job: Job;
}>();

const companyLogo = computed(() => {
  return new URL(`../assets/${props.job.companyLogo}`, import.meta.url).href;
});
</script>

<style scoped>
.job-card :deep(.v-card-title) {
  white-space: normal;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
