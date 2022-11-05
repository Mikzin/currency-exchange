import { createRouter, createWebHistory } from 'vue-router';

import CurrencyExchange from './pages/exchange/CurrencyExchange.vue';
import CurrencyRate from './pages/rate/CurrencyRate.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/exchange',
    },
    {
      path: '/exchange',
      component: CurrencyExchange,
    },
    {
      path: '/rate',
      component: CurrencyRate,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  history: createWebHistory(),
});

export default router;
