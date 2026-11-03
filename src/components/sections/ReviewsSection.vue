<template>
  <div
    id="reviews"
    class="section-scroll-target min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-24 xl:px-42"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">Reviews</span>
    </h2>
    <v-carousel hide-delimiters height="auto" class="reviews-carousel mt-8">
      <v-carousel-item v-for="(review, index) in reviews" :key="index">
        <v-card
          class="review-card bg-[var(--site-bg-spotlight)] p-4 sm:p-8 md:p-12"
        >
          <v-card-text class="text-lg">
            <p class="whitespace-pre-line">
              {{ review.review }}
            </p>
          </v-card-text>
          <div class="flex justify-end mt-2">
            <p
              v-if="review.author"
              class="review-attribution whitespace-pre-line indent-8"
            >
              {{ review.author }}
              <span v-if="review.company"> @ {{ review.company }}</span>
            </p>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
import { reviews } from "../../data/reviews";
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
