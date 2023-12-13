import { useQuery, useMutation } from '@tanstack/vue-query';
import axios from 'axios';
import { useRouter } from 'vue-router';

import { endpoints } from '@apis';

import { Recipe } from '@src/interface/goods';
import { UserItem } from '@src/interface/user';

type GetResponse = {
  recipe: Recipe;
  message: string;
};

export const useGetRecipe = (id: number) => {
  return useQuery<GetResponse>({
    queryKey: ['recipe', id],
    queryFn: async () => {
      const { data } = await axios.get(`${endpoints.recipes}/${id}`);
      const { body: recipe, message } = data;
      return { recipe, message };
    },
  });
};

export const usePostRecipe = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (userItem: UserItem) =>
      await axios.post(endpoints.recipes, userItem),
    onSuccess: (data) => {
      const { body } = data.data;
      router.push(`/result/${body.id}`);
    },
    onError: () => {
      alert('레시피 추가에 실패했습니다.');
    },
  });
};
