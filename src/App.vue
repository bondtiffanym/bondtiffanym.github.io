<template>
  <div class="site-background" aria-hidden="true" />
  <v-app>
    <LoadingScreen v-if="isLoading" />
    <div v-else>
      <NavBar />
      <LandingSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import LandingSection from "./components/sections/LandingSection.vue";
import AboutMeSection from "./components/sections/AboutMeSection.vue";
import SkillsSection from "./components/sections/SkillsSection.vue";
import ProjectsSection from "./components/sections/ProjectsSection.vue";
import ReviewsSection from "./components/sections/ReviewsSection.vue";
import ContactSection from "./components/sections/ContactSection.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import { ref, onMounted } from "vue";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});
</script>
