<template>
  <button @click="onClick" :class="getButtonStyle()">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPrimary?: boolean;
  onClick: () => void;
}>();

const getButtonStyle = () => ({
  'h-fit w-[340px] rounded-2xl border-0 p-6 text-large font-bold': true,
  'bg-primary-light dark:bg-primary-dark': props.isPrimary,
  'bg-gray_01-light dark:bg-gray_01-dark': !props.isPrimary,
});
</script>
