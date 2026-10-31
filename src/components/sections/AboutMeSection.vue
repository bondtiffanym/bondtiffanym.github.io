<template>
  <div
    id="about"
    class="section-scroll-target h-screen flex flex-col px-42 mt-24"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">About Me</span>
    </h2>
    <div class="flex gap-12 text-lg my-4">
      <div class="w-1/2">
        <p class="my-2">
          I'm a self-taught senior software engineer passionate about turning
          ideas into thoughtfully designed, maintainable software. Since
          starting my career in 2020, I've worked across e-commerce, education
          technology, and digital publishing, building products with a focus on
          usability, accessibility, and extensibility.
        </p>
        <p class="my-2">
          I thrive on product development, from shaping initial ideas to
          designing modular, reusable systems that evolve with changing needs.
          At People Inc, I've helped shape the architecture of our in-house
          content management system as it transitioned to a flexible,
          plugin-based platform. I've also developed deep expertise in Vue,
          TipTap, and ProseMirror, becoming a trusted resource for technical
          troubleshooting and architectural decisions.
        </p>
        <p class="my-2">
          Previously, at Exec Online, I championed accessibility across my
          engineering team, working toward WCAG 2.0 AA compliance in
          collaboration with an accessibility audit team. That experience
          reinforced my belief that thoughtful engineering means building
          software that works well for everyone.
        </p>
        <p class="my-2">
          Being self-taught has strengthened my ability to learn quickly, adapt
          to unfamiliar technologies, and take ownership of complex challenges.
          I'm driven by curiosity and resourcefulness, and I bring that mindset
          to every product I help build.
        </p>
      </div>
      <div class="w-1/3 mx-auto">
        <v-card class="bg-[var(--site-bg-spotlight)] about-sidebar-card">
          <v-card-item>
            <v-card-title class="text-2xl">Recruiter Snapshot</v-card-title>
          </v-card-item>
          <v-card-text>
            <v-card
              v-for="(item, index) in aboutMeText"
              :key="index"
              variant="flat"
              class="bg-[var(--site-bg-mid)] rounded-lg overflow-hidden"
              :class="index === 0 ? 'mb-4' : 'my-4'"
            >
              <v-card-item :subtitle="item.subtitle">
                <template #prepend>
                  <v-icon :icon="item.icon" class="text-2xl mr-4" />
                </template>
                <template #title>
                  <v-card-title
                    class="uppercase font-light tracking-wide text-base"
                    >{{ item.title }}</v-card-title
                  >
                </template>
              </v-card-item>
              <v-card-text class="mx-4 mb-4">
                {{ item.text }}
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const aboutMeText = [
  {
    title: "Best Fit Role",
    subtitle: "Senior Product Engineer",
    text: "I bridge product thinking and technical execution, turning ideas into well-architected, maintainable software while contributing to technical direction.",
    icon: "mdi-briefcase",
  },
  {
    title: "Ideal Team",
    subtitle: "Collaborative, product-minded, autonomous",
    text: "I thrive on teams where engineers have a voice in product decisions, own problems end to end, and value thoughtful architecture over quick fixes.",
    icon: "mdi-account-group",
  },
  {
    title: "Products I Love to Build",
    subtitle: "Scalable platforms, SaaS, complex web apps",
    text: "I'm drawn to products that benefit from modular architecture, reusable systems, and the flexibility to evolve alongside changing user and business needs.",
    icon: "mdi-application-brackets-outline",
  },
];
</script>

<style scoped>
:deep(.about-sidebar-card > .v-card-item) {
  padding: 1rem 1.25rem;
}

:deep(.about-sidebar-card > .v-card-text) {
  padding: 0.5rem 1.25rem 1.25rem;
}

:deep(.about-sidebar-card .v-card .v-card-item) {
  padding: 1rem 1.25rem;
}
</style>
