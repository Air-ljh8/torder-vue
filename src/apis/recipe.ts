import { useQuery, useMutation } from '@tanstack/vue-query';
import axios from 'axios';
import { useRouter } from 'vue-router';

import { endpoints } from '@apis';

type Flavor = {
  id: number;
  flavorName: string;
  imageUrl: string;
};

export type Recipe = {
  id: number;
  recipeName: string;
  flavors: Flavor[];
};

type UserItem = {
  sizeId: number;
  ingredientIds: number[];
};

export const useGetRecipe = (id: number) => {
  return useQuery<{ recipe: Recipe; message: string }>({
    queryKey: ['recipe', id],
    queryFn: async () => {
      const { data } = await axios.get(`/recipes/${id}`);
      const { body: recipe, message } = data;
      return { recipe, message };
    },
  });
};

export const usePostRecipe = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (userItem: UserItem) =>
      await axios.post(endpoints.recipe, userItem),
    onSuccess: (data) => {
      const { body } = data.data;
      router.push(`/recommendations/${body.id}`);
    },
    onError: () => {
      alert('레시피 추가에 실패했습니다.');
    },
  });
};
