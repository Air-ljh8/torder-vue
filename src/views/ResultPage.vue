<template>
  <div class="h-screen w-screen bg-gray_01-light dark:bg-gray_01-dark">
    <section
      class="mx-auto flex h-full flex-col items-center justify-between bg-gray_00-light text-gray_05-light dark:bg-gray_00-dark dark:text-gray_05-dark sm:w-screen md:w-96"
    >
      <ProgressNavBar pageName="result" prevPage="/ingredient" />
      <!-- <div v-if="isLoading">로딩중입니다.</div> -->
      <main
        class="flex h-full w-full flex-1 flex-col items-center justify-start gap-y-5 px-5 pt-[34px]"
      >
        <h2 class="text-x_large font-semi_bold">나만의 꿀조합을 찾았어요!</h2>
        <div
          class="relative flex h-[460px] w-[340px] items-center justify-center rounded-3xl shadow-light transition-all dark:shadow-dark"
        >
          <!-- <RecipeCard :recipe='result' hasBookmark /> -->
        </div>
      </main>
      <NextButton :onClick="() => pushPage('home')">다시하기</NextButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProgressNavBar from '@src/containers/ProgressNavBar.vue';
import RecipeCard from '@src/components/RecipeCard.vue';
import NextButton from '@components/NextButton.vue';

import { pushPage } from '@src/router/route.helper';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
