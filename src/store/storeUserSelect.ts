import { defineStore } from 'pinia';
import { ref } from 'vue';

import { UserSelect } from '@src/interface/user';

export const useUserSelectStore = defineStore('userSelect', () => {
  const initialUserSelect: UserSelect = {
    sizeId: 0,
    sizeValue: 0,
    ingredientIds: [],
  };
  const userSelect = ref(initialUserSelect);

  function setUserSelectSizeId(sizeId: number) {
    userSelect.value.sizeId = sizeId;
  }
  function setUserSelectSizeValue(sizeValue: number) {
    userSelect.value.sizeValue = sizeValue;
  }
  function setUserSelectIngredientIds(ingredientIds: number[]) {
    userSelect.value.ingredientIds = ingredientIds;
  }
  function resetUserSelect() {
    userSelect.value.sizeId = 0;
    userSelect.value.sizeValue = 0;
    userSelect.value.ingredientIds = [];
  }

  return {
    userSelect,
    setUserSelectSizeId,
    setUserSelectSizeValue,
    setUserSelectIngredientIds,
    resetUserSelect,
  };
});
