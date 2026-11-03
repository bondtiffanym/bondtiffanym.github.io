<template>
  <div
    id="skills"
    class="section-scroll-target min-h-screen flex flex-col px-4 sm:px-8 md:px-24 xl:px-42 mt-20"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">Skills</span>
    </h2>
    <div class="inline-flex flex-row flex-wrap justify-left gap-4 mt-8">
      <v-card
        v-for="category in categories"
        :key="category.name"
        variant="elevated"
        class="bg-[var(--site-bg-spotlight)] p-2 xs:w-full md:w-[calc(50%-1rem)] xl:w-[calc(33%-1rem)]"
      >
        <v-card-title class="text-2xl font-semibold mt-2 mb-4 text-center">
          {{ category.name }}
        </v-card-title>
        <v-divider class="mb-4 w-3/4 mx-auto" />
        <v-card-text>
          <div class="flex flex-row flex-wrap gap-2 p-4">
            <v-chip
              v-for="skill in category.skills"
              :key="skill.name"
              label
              class="py-6 px-2"
              size="large"
              density="comfortable"
              variant="tonal"
            >
              <template #prepend>
                <v-icon
                  v-if="skill.icon"
                  :class="[skill.class, skill.icon]"
                  class="text-[var(--site-text-primary-color)] mr-2"
                  aria-hidden="true"
                  :size="30"
                />
                <v-img
                  v-if="skill.src"
                  :src="skill.src"
                  height="30"
                  width="30"
                  :alt="skill.name"
                  class="mr-2 p-1"
                  :class="[skill.class]"
                />
              </template>
              <div class="font-semibold">{{ skill.name }}</div>
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from "../../data/skills";
</script>
