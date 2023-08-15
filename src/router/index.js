import { createRouter, createWebHistory } from 'vue-router';
import QuizesPage from '@/pages/QuizesPage.vue';
import QuizPage from '@/pages/QuizPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizes',
      component: QuizesPage,
    },
    {
      path: '/quiz/:id',
      name: 'quize',
      component: QuizPage,
    },
  ],
});

export default router;
