import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

import { endpoints } from '@apis';

import { Ingredient } from '@src/interface/goods';

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
