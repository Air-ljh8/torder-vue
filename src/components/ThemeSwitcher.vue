<template>
  <div
    class="flex h-9 w-[68px] flex-row justify-between gap-0.5 rounded-[50px] bg-gray_02-light p-[3px] dark:bg-gray_01-dark"
  >
    <button
      class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray_00-light dark:bg-gray_01-dark"
      @click="
        () => {
          if (theme === 'dark') toggleTheme();
        }
      "
    >
      <p class="text-gray_05-light dark:text-gray_00-light">라</p>
    </button>
    <button
      class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray_02-light dark:bg-gray_05-dark"
      @click="
        () => {
          if (theme === 'light') toggleTheme();
        }
      "
    >
      <p class="text-gray_00-dark dark:text-gray_00-dark">다</p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const theme = inject<'light' | 'dark'>('theme');
const toggleTheme = inject<() => void>('toggleTheme', () => {});
</script>
