<template>
  <RouterLink :to="prevPage">
    <div class="text-gray_05-light dark:text-gray_05-dark w-6 h-6">뒤</div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const { prevPage } = defineProps<{
  prevPage: string;
}>();
</script>
