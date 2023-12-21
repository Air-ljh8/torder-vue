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
          {{ flavorsFirstRowNames }}
          {{ getMiddlePlus(flavorCount, 3) }}
        </p>
        <p>
          {{ flavorsSecondRowNames }}
          {{ getMiddlePlus(flavorCount, 5) }}
        </p>
        <p>
          {{ flavorsThirdRowNames }}
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
import { computed, ref } from 'vue';
import { Recipe } from '@interface/recipes';

const props = defineProps<{
  recipe: Recipe;
  hasBookmark?: boolean | undefined;
}>();

const flavors = ref(props.recipe.flavors);
const flavorCount = computed(() => flavors.value.length);
const flavorsFirstRowNames = computed(() =>
  flavors.value
    .slice(0, 2)
    .map((flavor) => flavor.flavorName)
    .join(' + ')
);
const flavorsSecondRowNames = computed(() =>
  flavors.value
    .slice(2, 4)
    .map((flavor) => flavor.flavorName)
    .join(' + ')
);
const flavorsThirdRowNames = computed(() =>
  flavors.value
    .slice(4, flavorCount.value)
    .map((flavor) => flavor.flavorName)
    .join(' + ')
);
const getMiddlePlus = (count: number, standardCount: number) =>
  count >= standardCount ? ' + ' : '';

const recipeName = ref(props.recipe.recipeName);
const recipeNameNounCount = computed(() => recipeName.value.split(' ').length);
const recipeNameStartRow = computed(() =>
  recipeName.value.split(' ').slice(0, 2).join(' ')
);
const recipeNameEndRow = computed(() =>
  recipeName.value.split(' ').slice(2, recipeNameNounCount.value).join(' ')
);
</script>
