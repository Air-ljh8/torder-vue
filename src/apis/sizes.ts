import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

type Size = {
  id: number;
  name: string;
  imageUrl: string;
  value: number;
};

export const useGetSizes = () => {
  return useQuery<{ sizes: Size[]; message: string }>({
    queryKey: ['sizes'],
    queryFn: async () => {
      const { data } = await axios.get('/sizes');
      const { body: sizes, message } = data;
      return { sizes, message };
    },
  });
};
