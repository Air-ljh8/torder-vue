<template>
  <header
    class="relative flex h-16 w-full flex-col items-center justify-between"
  >
    <div
      class="flex h-16 w-full items-center justify-between border-gray_02-light p-4 dark:border-gray_02-dark"
    >
      <Logo />
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from '@components/Logo.vue';
import ThemeSwitcher from '@components/ThemeSwitcher.vue';
</script>
