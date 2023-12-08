<template>
  <footer
    class="flex h-20 w-full flex-row justify-around border-t border-t-gray_01-light p-2 pb-8 dark:border-t-gray_01-dark"
  >
    <RouterLink to="/" class="flex flex-col items-center justify-start">
      <div
        :class="[
          'h-6 w-6',
          isHome ? 'bg-primary-light' : 'bg-gray_04-light dark:bg-gray_03-dark',
        ]"
      ></div>
      <p
        :class="[
          'text-x_small',
          isHome
            ? 'text-primary-light'
            : 'text-gray_04-light dark:text-gray_03-dark',
        ]"
      >
        홈
      </p>
    </RouterLink>
    <RouterLink to="/user" class="flex flex-col items-center justify-start">
      <div
        :class="[
          'h-6 w-6',
          isUser ? 'bg-primary-light' : 'bg-gray_04-light dark:bg-gray_04-dark',
        ]"
      ></div>
      <p
        :class="[
          'text-x_small',
          isUser
            ? 'text-primary-light'
            : 'text-gray_04-light dark:text-gray_03-dark',
        ]"
      >
        마이
      </p>
    </RouterLink>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const isHome = route.path === '/';
const isUser = route.path === '/user';
</script>

<style scoped></style>
