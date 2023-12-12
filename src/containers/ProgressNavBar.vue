<template>
  <header
    class="relative flex h-16 w-full flex-col items-center justify-between"
  >
    <div
      class="flex h-16 w-full items-center justify-between border-gray_02-light p-4 dark:border-gray_02-dark"
    >
      <BackButton :prevPage="props.prevPage">뒤</BackButton>
      <BackButton prevPage="/">홈</BackButton>
    </div>
    <div :class="getProgressStyle()"></div>
  </header>
</template>

<script setup lang="ts">
import BackButton from '@components/BackButton.vue';

const props = defineProps<{
  pageName: 'size' | 'ingredient' | 'result';
  prevPage: string;
}>();

const getProgressStyle = () => ({
  'absolute bottom-0 h-[2px] bg-gray_05-light dark:bg-gray_05-dark left-0':
    true,
  'w-1/3': props.pageName === 'size',
  'w-2/3': props.pageName === 'ingredient',
  'w-full': props.pageName === 'result',
});
</script>
