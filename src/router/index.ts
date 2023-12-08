import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@views/HomePage.vue';
import SizePage from '@views/SizePage.vue';
import IngredientPage from '@views/IngredientPage.vue';
import ResultPage from '@views/ResultPage.vue';
import UserPage from '@views/UserPage.vue';

const routes = Object.freeze({
  home: '/',
  size: '/size',
  ingredient: '/ingredient',
  result: '/result',
  user: '/user',
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home,
      name: 'home',
      component: HomePage,
    },
    {
      path: routes.size,
      name: 'size',
      component: SizePage,
    },
    {
      path: routes.ingredient,
      name: 'ingredient',
      component: IngredientPage,
    },
    {
      path: `${routes.result}/:id`,
      name: 'result',
      component: ResultPage,
    },
    {
      path: routes.user,
      name: 'user',
      component: UserPage,
    },
  ],
});

export default router;
