import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

import { endpoints } from '@apis';

import { Recommendation } from '@interface/goods';

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
