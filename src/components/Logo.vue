<template>
  <div class="flex items-center justify-between gap-[6px]">
    <img
      :src="characterLogo"
      alt="베스트라빈스 캐릭터"
      width="36"
      height="36"
    />
    <img
      :src="titleLightLogo"
      alt="베스트라빈스 타이틀"
      width="120"
      height="20"
      v-if="theme === 'light'"
    />
    <img
      :src="titleDarkLogo"
      alt="베스트라빈스 타이틀"
      width="120"
      height="20"
      v-else
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import characterLogo from '@assets/logo/character.png';
import titleLightLogo from '@assets/logo/title-light.png';
import titleDarkLogo from '@assets/logo/title-dark.png';

const theme = inject<'light' | 'dark'>('theme');
</script>
