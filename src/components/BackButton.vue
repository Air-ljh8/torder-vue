<template>
  <button
    class="text-gray_05-light dark:text-gray_05-dark w-6 h-6"
    @click="goBack"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  prevPage: string;
}>();

const router = useRouter();

function goBack() {
  router.push(props.prevPage);
}
</script>
