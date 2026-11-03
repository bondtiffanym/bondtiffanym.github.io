<template>
  <v-card class="p-6 flex flex-col mx-4 bg-[var(--site-bg-spotlight)]">
    <v-card-title class="flex justify-between">
      <div class="flex gap-4">
        <v-img
          :src="companyLogo"
          :alt="`${job.company} Logo`"
          class="w-18 h-18 rounded"
        />
        <div>
          <div class="flex items-center gap-4">
            <span class="text-3xl font-bold">{{ job.company }}</span>
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
      <ul class="list-disc list-inside ml-12">
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

<style scoped></style>
