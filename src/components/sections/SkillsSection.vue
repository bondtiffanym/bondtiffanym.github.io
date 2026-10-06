<template>
  <div
    id="skills"
    class="section-scroll-target min-h-screen flex flex-col px-42 mt-24"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">Skills</span>
    </h2>
    <v-card class="w-full p-4 mt-6 text-center">
      <v-card-text>
        <div v-for="category in categories" :key="category.name">
          <p class="text-xl font-semibold mt-2 mb-4">
            {{ category.name }}
          </p>
          <div
            class="flex flex-row flex-wrap gap-2 mb-6 items-center justify-center mx-20"
          >
            <v-card
              v-for="skill in category.skills"
              :key="skill.name"
              class="w-40 h-40 p-4 flex items-center justify-center bg-[var(--site-bg-spotlight)]"
              label
              density="comfortable"
              variant="elevated"
              :elevation="24"
            >
              <v-card-text class="flex flex-col gap-3 items-center text-md">
                <div class="bg-white rounded-md p-2">
                  <v-icon
                    v-if="skill.icon"
                    :class="[
                      skill.icon,
                      skill.color && `text-[${skill.color}]`,
                    ]"
                    class="text-6xl text-[var(--site-text-primary-color)]"
                    aria-hidden="true"
                  />
                  <img
                    v-if="skill.src"
                    :src="skill.src"
                    height="60"
                    width="60"
                    :alt="skill.name"
                  />
                </div>
                <div class="font-semibold">{{ skill.name }}</div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { categories } from "../../data/skills";
</script>
