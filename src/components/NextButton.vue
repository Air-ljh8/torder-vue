<template>
  <button
    @click="
      () => {
        if (!props.disabled) props.onClick();
      }
    "
    :class="getNextButtonStyle()"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPrimary?: boolean;
  onClick: () => void;
  disabled?: boolean;
}>();

const getNextButtonStyle = () => ({
  'h-fit w-[340px] rounded-2xl border-0 p-6 text-large font-bold mb-6': true,
  'bg-primary-light dark:bg-primary-dark': props.isPrimary,
  'bg-gray_01-light dark:bg-gray_01-dark': !props.isPrimary,
  'cursor-not-allowed opacity-50': props.disabled,
});
</script>
