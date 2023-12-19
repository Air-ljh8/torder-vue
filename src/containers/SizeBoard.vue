<template>
  <main
    class="flex h-full w-full flex-1 flex-col justify-start gap-y-5 px-5 pt-[34px]"
  >
    <h2 class="text-x_large font-semi_bold">어떤 사이즈를 드시나요?</h2>
    <SizeRow title="1가지 맛" :sizes="sizes.slice(0, 2)" />
    <SizeRow title="2가지 맛" :sizes="sizes.slice(2, 4)" />
    <SizeRow title="3가지 맛 이상" :sizes="sizes.slice(4, sizes.length)" />
  </main>
</template>

<script setup lang="ts">
import SizeRow from '@components/SizeRow.vue';
import { Size } from '@interface/sizes';

defineProps<{
  sizes: Size[];
}>();
</script>
