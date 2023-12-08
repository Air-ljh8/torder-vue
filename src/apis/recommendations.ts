import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

import { endpoints } from '@apis';
import { Recipe } from './recipe';

type Cover = {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
};

type Recommendation = {
  cover: Cover;
  recipe: Recipe;
};

type Response = {
  recommendations: Recommendation[];
  message: string;
};

export const useGetRecommendations = () => {
  return useQuery<Response>({
    queryKey: ['recommendations'],
    queryFn: async () => {
      const { data } = await axios.get(endpoints.recommendations);
      const { body: recommendations, message } = data;
      return { recommendations, message };
    },
  });
};
