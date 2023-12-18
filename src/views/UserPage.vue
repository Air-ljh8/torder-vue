<template>
  <div class="h-screen w-screen bg-gray_01-light dark:bg-gray_01-dark">
    <section
      class="mx-auto flex h-full flex-col items-center justify-between bg-gray_00-light text-gray_05-light dark:bg-gray_00-dark dark:text-gray_05-dark sm:w-screen md:w-96"
    >
      <TopNavBar />
      <GlobalNavBar />
    </section>
  </div>
</template>

<script setup lang="ts">
import TopNavBar from '@containers/TopNavBar.vue';
import GlobalNavBar from '@containers/GlobalNavBar.vue';
</script>
