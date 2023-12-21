import { Recipe } from './recipes';

export type Cover = {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
};

export type Recommendation = {
  cover: Cover;
  recipe: Recipe;
};
