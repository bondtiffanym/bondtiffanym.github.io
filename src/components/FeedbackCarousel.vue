<template>
  <v-card class="bg-[var(--site-bg-spotlight)] xl:px-4 py-12 xl:max-w-2/3">
    <v-carousel hide-delimiters height="auto" class="reviews-carousel">
      <template v-slot:prev="{ props }">
        <v-icon-btn
          icon="mdi-chevron-left"
          size="large"
          @click="props.onClick"
        />
      </template>
      <template v-slot:next="{ props }">
        <v-icon-btn
          icon="mdi-chevron-right"
          size="large"
          @click="props.onClick"
        />
      </template>
      <v-carousel-item v-for="(review, index) in reviews" :key="index">
        <div class="review-card px-4">
          <v-icon
            icon="mdi-format-quote-open"
            size="40"
            class="mb-4 ml-[-2rem]"
          />
          <div class="text-lg">
            <p class="whitespace-pre-line">
              {{ review.review }}
            </p>
          </div>
          <div class="flex justify-end mt-2">
            <p
              v-if="review.author"
              class="review-attribution whitespace-pre-line indent-8"
            >
              {{ review.author }}
              <span v-if="review.company"> @ {{ review.company }}</span>
            </p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script setup lang="ts">
import { reviews } from "../data/reviews";
</script>

<style scoped>
.reviews-carousel :deep(.v-carousel-item),
.reviews-carousel :deep(.v-carousel-item > .v-img) {
  height: auto;
}

.reviews-carousel :deep(.v-responsive__sizer) {
  display: none;
}

.reviews-carousel :deep(.v-responsive__content) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  width: 100%;
  max-width: none;
  margin-inline-start: 0;
}

.review-card {
  width: min(100% - 4.5rem, 60rem);
}

@media (min-width: 768px) {
  .review-card {
    width: min(100% - 7rem, 60rem);
  }
}

.review-attribution {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: var(--site-text-highlight-color);
}
</style>
