<template>
  <div class="flex flex-col gap-y-2">
    <p class="text-medium font-semi_bold">{{ title }}</p>
    <div class="flex gap-x-3">
      <button
        v-for="(size, index) in sizes"
        :key="getButtonKey(size, index)"
        class="flex flex-col items-center justify-between gap-y-[10px]"
        @click="handleSizeClick(size)"
      >
        <div :class="getUserSelectStyle(size)">
          <img
            :src="size.imageUrl ?? PLACE_HOLD_IMAGE_URL"
            :alt="size.name"
            :width="getImageWidth(size)"
            :height="30"
          />
        </div>
        <p class="text-center text-small">{{ size.name }}</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Size } from '@interface/goods';
import { useUserSelectStore } from '@store/storeUserSelect';
import { PLACE_HOLD_IMAGE_URL } from '@constants';
import { storeToRefs } from 'pinia';

defineProps<{
  title: string;
  sizes: Size[];
}>();

const getImageWidth = (size: Size) => {
  if (size.value <= 2) return 30;
  if (size.value === 3) return 24;
  return 74;
};

const store = useUserSelectStore();
const { userSelect } = storeToRefs(store);
const { setUserSelectSizeId, setUserSelectSizeValue } = useUserSelectStore();

const handleSizeClick = (size: Size) => {
  if (userSelect.value.sizeId === size.id) {
    setUserSelectSizeId(0);
    setUserSelectSizeValue(0);
    return;
  }
  setUserSelectSizeId(size.id);
  setUserSelectSizeValue(size.value);
};

const getButtonKey = (size: Size, index: number) => `size-${size.id}-${index}`;

const getUserSelectStyle = (size: Size) => ({
  'flex h-[74px] w-[74px] items-center justify-center rounded-2xl border-[3px] bg-gray_01-light dark:bg-gray_01-dark':
    true,
  'border-secondary-light': userSelect.value.sizeId === size.id,
  'border-gray_01-light dark:border-gray_01-dark':
    userSelect.value.sizeId !== size.id,
});
</script>
