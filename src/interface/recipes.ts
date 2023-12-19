export type Flavor = {
  id: number;
  flavorName: string;
  imageUrl: string;
};

export type Recipe = {
  id: number;
  recipeName: string;
  flavors: Flavor[];
};