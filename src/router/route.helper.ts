import router from '@router/index';

export const pushPage = (routeName: string): void => {
  router.push({ name: routeName });
};

export const pushPageWithParams = (routeName: string, id: number) => {
  router.push({
    name: routeName,
    params: { id },
  });
};

export const goBack = () => router.back();

export default {
  goBack,
  pushPage,
  pushPageWithParams,
};
