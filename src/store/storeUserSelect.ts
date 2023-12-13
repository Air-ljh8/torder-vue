import { defineStore } from 'pinia';
import { reactive } from 'vue';

import { UserSelect } from '@interface/user';

export const useUserSelectStore = defineStore('userSelect', () => {
  const initialUserSelect: UserSelect = {
    sizeId: 0,
    sizeValue: 0,
    ingredientIds: [],
  };
  const userSelect = reactive(initialUserSelect);

  const setUserSelectSizeId = (sizeId: number) => {
    userSelect.sizeId = sizeId;
  };
  const setUserSelectSizeValue = (sizeValue: number) => {
    userSelect.sizeValue = sizeValue;
  };
  const setUserSelectIngredientIds = (ingredientIds: number[]) => {
    userSelect.ingredientIds = ingredientIds;
  };
  const resetUserSelect = () => {
    userSelect.sizeId = 0;
    userSelect.sizeValue = 0;
    userSelect.ingredientIds = [];
  };

  return {
    userSelect,
    setUserSelectSizeId,
    setUserSelectSizeValue,
    setUserSelectIngredientIds,
    resetUserSelect,
  };
});
