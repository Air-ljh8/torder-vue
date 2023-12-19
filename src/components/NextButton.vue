<template>
  <button @click="handleNextButtonClick" :class="getNextButtonStyle()">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPrimary?: boolean | undefined;
  onClick: () => void;
  disabled?: boolean | undefined;
}>();

const handleNextButtonClick = () => {
  if (!props.disabled) props.onClick();
};

const getNextButtonStyle = () => ({
  'h-fit w-[340px] rounded-2xl border-0 p-6 text-large font-bold mb-6': true,
  'bg-primary-light dark:bg-primary-dark': props.isPrimary,
  'bg-gray_01-light dark:bg-gray_01-dark': !props.isPrimary,
  'cursor-not-allowed opacity-50': props.disabled,
});
</script>
