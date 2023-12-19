<template>
  <Swiper
    class="h-full w-full"
    :modules="[Autoplay, A11y, Navigation, Keyboard]"
    :autoplay="{
      disableOnInteraction: false,
    }"
    :free-mode="true"
    :keyboard="{ enabled: true }"
    :lazy-preload-prev-next="1"
    :space-between="-70"
    :slides-per-view="1"
    :loop="true"
    :loop-prevents-sliding="true"
    @real-index-change="
      (swiper) => {
        currentSlideIndex = swiper.realIndex;
      }
    "
  >
    <SwiperSlide
      class="flex h-full w-full items-center justify-center"
      style="display: flex"
      v-for="(recommendation, index) in props.recommendations"
      :key="index"
      @click="handleSlideClick(index)"
    >
      <div
        :class="getRecipeWrapperStyle(isTargetIndex(currentSlideIndex, index))"
      >
        <RecipeCard
          :recipe="recommendation.recipe"
          v-if="isTargetIndex(clickedSlideIndex, index)"
        />
        <img
          :src="
            recommendation.cover.imageUrl ??
            'https://kr.object.ncloudstorage.com/best-robbins/recommendations/steady_combination.svg'
          "
          :alt="recommendation.cover.title ?? '베스트라빈스!'"
          width="340"
          height="460"
          v-else
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, A11y, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

import RecipeCard from '@components/RecipeCard.vue';
import { Recommendation } from '@interface/recommendations';

const props = defineProps<{
  recommendations: Recommendation[];
}>();

const currentSlideIndex = ref(0);
const clickedSlideIndex = ref(-1);

const getRecipeWrapperStyle = (isTargetIndex: boolean) => ({
  'relative flex items-center justify-center rounded-3xl shadow-light transition-all dark:shadow-dark':
    true,
  'z-10 h-[460px] w-[340px] cursor-pointer': isTargetIndex,
  'my-[46px] h-[368px] w-[272px]': !isTargetIndex,
});

function isTargetIndex(standardIndex: number, targetIndex: number) {
  return standardIndex === targetIndex;
}
function handleSlideClick(index: number) {
  if (currentSlideIndex.value !== index) {
    return;
  }
  if (clickedSlideIndex.value !== index) {
    clickedSlideIndex.value = index;
    return;
  }
  clickedSlideIndex.value = -1;
}
</script>
