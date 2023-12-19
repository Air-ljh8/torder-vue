<template>
  <main
    class="flex h-full w-full flex-1 flex-col justify-start gap-y-5 px-5 pt-[34px]"
  >
    <div class="flex flex-wrap gap-x-2">
      <button
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        @click="handleIngredientClick(ingredient.id)"
        class="flex flex-col items-center justify-between gap-y-[10px]"
      >
        <div :class="getUserSelectStyle(ingredient)">
          <img
            :src="ingredient.imageUrl ?? PLACE_HOLD_IMAGE_URL"
            :alt="ingredient.name"
            width="56"
            height="56"
            class="rounded-full"
          />
        </div>
        <p class="text-center text-small">{{ ingredient.name }}</p>
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Ingredient } from '@interface/ingredients';
import { useUserSelectStore } from '@store/storeUserSelect';
import { PLACE_HOLD_IMAGE_URL } from '@constants';

const { userSelect, setUserSelectIngredientIds } = useUserSelectStore();

defineProps<{
  ingredients: Ingredient[];
}>();

const handleIngredientClick = (id: number) => {
  if (userSelect.ingredientIds.includes(id)) {
    setUserSelectIngredientIds(
      userSelect.ingredientIds.filter((ingredientId) => ingredientId !== id)
    );
    return;
  }
  setUserSelectIngredientIds([...userSelect.ingredientIds, id]);
};

const getUserSelectStyle = (ingredient: Ingredient) => ({
  'flex h-fit w-fit items-center justify-center rounded-full border-[3px]':
    true,
  'border-secondary-light': userSelect.ingredientIds.includes(ingredient.id),
  'border-gray_00-light dark:border-gray_00-dark':
    !userSelect.ingredientIds.includes(ingredient.id),
});
</script>
