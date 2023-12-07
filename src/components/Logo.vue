<template>
  <div className="flex items-center justify-between gap-[6px]">
    <img
      src="/src/assets/logo/character.png"
      alt="베스트라빈스 캐릭터"
      width="36"
      height="36"
    />
    <img
      src="/src/assets/logo/title-light.png"
      alt="베스트라빈스 타이틀"
      width="120"
      height="20"
      v-if="theme === 'light'"
    />
    <img
      src="/src/assets/logo/title-dark.png"
      alt="베스트라빈스 타이틀"
      width="120"
      height="20"
      v-else
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const theme = inject<'light' | 'dark'>('theme');
</script>
