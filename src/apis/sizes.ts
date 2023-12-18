import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

import endpoints from './endpoints';

import { Size } from '@interface/goods';

type Response = {
  sizes: Size[];
  message: string;
};

export const useGetSizes = () => {
  return useQuery<Response>({
    queryKey: ['sizes'],
    queryFn: async () => {
      const { data } = await axios.get(endpoints.sizes);
      const { body: sizes, message } = data;
      return { sizes, message };
    },
  });
};
