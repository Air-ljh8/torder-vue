import { defineStore } from 'pinia';
import { reactive } from 'vue';

import { UserSelect } from '@src/interface/user';

export const useUserSelectStore = defineStore('userSelect', () => {
  const initialUserSelect: UserSelect = {
    sizeId: 0,
    sizeValue: 0,
    ingredientIds: [],
  };
  const userSelect = reactive(initialUserSelect);

  function setUserSelectSizeId(sizeId: number) {
    userSelect.sizeId = sizeId;
  }
  function setUserSelectSizeValue(sizeValue: number) {
    userSelect.sizeValue = sizeValue;
  }
  function setUserSelectIngredientIds(ingredientIds: number[]) {
    userSelect.ingredientIds = ingredientIds;
  }
  function resetUserSelect() {
    userSelect.sizeId = 0;
    userSelect.sizeValue = 0;
    userSelect.ingredientIds = [];
  }

  return {
    userSelect,
    setUserSelectSizeId,
    setUserSelectSizeValue,
    setUserSelectIngredientIds,
    resetUserSelect,
  };
});
