<template>
  <div
    class="flex h-full w-full flex-col items-center justify-start rounded-3xl bg-white-light px-4 py-8 dark:bg-gray_01-dark"
  >
    <div class="flex h-2/5 flex-col gap-2">
      <div class="flex items-center justify-end" v-if="hasBookmark">
        <div class="bg-gray_05-light dark:bg-gray_05-dark w-7 h-7"></div>
      </div>
      <div
        class="flex flex-col items-center justify-center text-x_large font-bold"
      >
        <div>{{ recipeNameStartRow }}</div>
        <div>{{ recipeNameEndRow }}</div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <p>
          {{ flavorsFirstRow.map((flavor) => flavor.flavorName).join(' + ') }}
          {{ flavorCount >= 3 ? ' + ' : '' }}
        </p>
        <p>
          {{ flavorsSecondRow.map((flavor) => flavor.flavorName).join(' + ') }}
          {{ flavorCount >= 5 ? ' + ' : '' }}
        </p>
        <p>
          {{ flavorsThirdRow.map((flavor) => flavor.flavorName).join(' + ') }}
        </p>
      </div>
    </div>
    <div
      class="flex h-3/5 flex-wrap content-center items-center justify-center gap-x-2"
    >
      <img
        v-for="flavor in recipe.flavors"
        :key="flavor.id"
        :src="flavor.imageUrl"
        :alt="flavor.flavorName"
        width="80"
        height="85"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Recipe } from '@src/types';

const { recipe, hasBookmark } = defineProps<{
  recipe: Recipe;
  hasBookmark?: boolean;
}>();

const flavors = recipe.flavors;
const flavorCount = flavors.length;
const flavorsFirstRow = flavors.slice(0, 2);
const flavorsSecondRow = flavors.slice(2, 4);
const flavorsThirdRow = flavors.slice(4, flavorCount);
const recipeName = recipe.recipeName;
const recipeNameNounCount = recipeName.split(' ').length;
const recipeNameStartRow = recipeName.split(' ').slice(0, 2).join(' ');
const recipeNameEndRow = recipeName
  .split(' ')
  .slice(2, recipeNameNounCount)
  .join(' ');
</script>
