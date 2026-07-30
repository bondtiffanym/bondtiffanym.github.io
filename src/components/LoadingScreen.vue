<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="loading-cube">
      <RubiksCubeAnimation />
    </div>
  </div>
</template>

<script setup lang="ts">
import RubiksCubeAnimation from "./RubiksCubeAnimation.vue";
</script>

<style scoped>
.loading-cube {
  font-size: 7px;
}

.loading-cube :deep(.container) {
  perspective: 350px;
}
</style>