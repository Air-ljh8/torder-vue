<template>
  <div class="h-screen w-screen bg-gray_01-light dark:bg-gray_01-dark">
    <section
      class="mx-auto flex h-full flex-col items-center justify-between bg-gray_00-light text-gray_05-light dark:bg-gray_00-dark dark:text-gray_05-dark sm:w-screen md:w-96"
    >
      <ProgressNavBar prevPage="/size" pageName="ingredient" />
      <div v-if="isLoading">로딩중입니다.</div>
      <IngredientBoard :ingredients="data?.ingredients ?? []" v-else />
      <div v-if="!isAbleToRecommend">재료를 조금 더 골라볼까요?</div>
      <NextButton
        :onClick="
          () => {
            mutation.mutate(userItem);
          }
        "
        isPrimary
        :disabled="!isAbleToRecommend || !userSelect.sizeValue"
      >
        결과
      </NextButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import ProgressNavBar from '@containers/ProgressNavBar.vue';
import IngredientBoard from '@containers/IngredientBoard.vue';
import NextButton from '@components/NextButton.vue';
import { useUserSelectStore } from '@store/storeUserSelect';
import { useGetIngredients } from '@apis/ingredients';
import { usePostRecipe } from '@apis/recipes';

const store = useUserSelectStore();
const { userSelect } = store;
const userItem = computed(() => ({
  sizeId: userSelect.sizeId,
  ingredientIds: userSelect.ingredientIds,
}));

const { data, isLoading } = useGetIngredients();
const mutation = usePostRecipe();

const allFlavorIdList = computed(
  () =>
    userSelect.ingredientIds
      .map((id) => {
        const flavorIdList = data.value?.ingredients.find(
          (ingredient) => ingredient.id === id
        )?.flavorIdList;
        return flavorIdList;
      })
      .flat() ?? []
);
const flavorIdList = computed(
  () =>
    allFlavorIdList.value.filter(
      (item, index) => allFlavorIdList.value.indexOf(item) === index
    ) ?? []
);
const isAbleToRecommend = computed(
  () => flavorIdList.value.length >= userSelect.sizeValue
);
</script>
