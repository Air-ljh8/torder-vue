<template>
  <div class="h-screen w-screen bg-gray_01-light dark:bg-gray_01-dark">
    <section
      class="mx-auto flex h-full flex-col items-center justify-between bg-gray_00-light text-gray_05-light dark:bg-gray_00-dark dark:text-gray_05-dark sm:w-screen md:w-96"
    >
      <ProgressNavBar prevPage="home" pageName="size" />
      <Loading v-if="isLoading" />
      <SizeBoard :sizes="data?.sizes ?? []" v-else />
      <NextButton
        :onClick="() => pushPage('ingredient')"
        isPrimary
        :disabled="!userSelect.sizeId"
      >
        다음
      </NextButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ProgressNavBar from '@containers/ProgressNavBar.vue';
import SizeBoard from '@containers/SizeBoard.vue';
import NextButton from '@components/NextButton.vue';
import Loading from '@components/Loading.vue';
import { useGetSizes } from '@apis/sizes';
import { pushPage } from '@router/route.helper';
import { useUserSelectStore } from '@store/storeUserSelect';

const { data, isLoading } = useGetSizes();
const store = useUserSelectStore();
const { userSelect } = storeToRefs(store);
</script>
