<template>
  <RouterView :class="theme" />
</template>
<script setup lang="ts">
import { provide } from 'vue';
import { useTheme } from '@composables/useTheme';

const { theme, toggleTheme } = useTheme();

provide('theme', theme);
provide('toggleTheme', toggleTheme);
</script>
