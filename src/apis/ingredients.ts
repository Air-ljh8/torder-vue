import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

import { endpoints } from '@apis';

type Ingredient = {
  id: number;
  name: string;
  imageUrl: string;
  flavorIdList: number[];
};

type Response = {
  ingredients: Ingredient[];
  message: string;
};

export const useGetIngredients = () => {
  return useQuery<Response>({
    queryKey: ['ingredients'],
    queryFn: async () => {
      const { data } = await axios.get(endpoints.ingredients);
      const { body: ingredients, message } = data;
      return { ingredients, message };
    },
  });
};
