<template>
  <footer
    class="flex h-20 w-full flex-row justify-around border-t border-t-gray_01-light p-2 pb-8 dark:border-t-gray_01-dark"
  >
    <button class="flex flex-col items-center justify-start" @click="goHome">
      <div :class="getIconStyle(isHome)"></div>
      <p :class="getTextStyle(isHome)">홈</p>
    </button>
    <button class="flex flex-col items-center justify-start" @click="goUser">
      <div :class="getIconStyle(isUser)"></div>
      <p :class="getTextStyle(isUser)">마이</p>
    </button>
  </footer>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isHome = route.path === '/';
const isUser = route.path === '/user';

function goHome() {
  router.push('/');
}

function goUser() {
  router.push('/user');
}

const getIconStyle = (isPath: boolean) => ({
  'h-6 w-6': true,
  'bg-primary-light': isPath,
  'bg-gray_04-light dark:bg-gray_03-dark': !isPath,
});
const getTextStyle = (isPath: boolean) => ({
  'text-x_small': true,
  'text-primary-light': isPath,
  'text-gray_04-light dark:text-gray_03-dark': !isPath,
});
</script>
