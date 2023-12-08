<template>
  <div>{{ content }}</div>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<style scoped></style>
