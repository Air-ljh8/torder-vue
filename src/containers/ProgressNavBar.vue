<template>
  <header
    class="relative flex h-16 w-full flex-col items-center justify-between"
  >
    <div
      class="flex h-16 w-full items-center justify-between border-gray_02-light p-4 dark:border-gray_02-dark"
    >
      <BackButton :prevPage="props.prevPage" />
      <CloseButton />
    </div>
    <div
      class="absolute bottom-0 h-[2px] bg-gray_05-light dark:bg-gray_05-dark left-0"
      :class="processWidth[props.pageName]"
    ></div>
  </header>
</template>

<script setup lang="ts">
import BackButton from '@components/BackButton.vue';
import CloseButton from '@components/CloseButton.vue';

const processWidth = {
  size: 'w-1/3',
  ingredient: 'w-2/3',
  result: 'w-full',
};

const props = defineProps<{
  pageName: 'size' | 'ingredient' | 'result';
  prevPage: string;
}>();
</script>
