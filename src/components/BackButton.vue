<template>
  <button
    class="text-gray_05-light dark:text-gray_05-dark w-6 h-6"
    @click="goBack"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { pushPage } from '@src/router/route.helper';

const props = defineProps<{
  prevPage: string;
}>();

function goBack() {
  pushPage(props.prevPage);
}
</script>
