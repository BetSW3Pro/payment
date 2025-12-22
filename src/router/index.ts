import { createRouter, createWebHistory } from "vue-router";

// Minimal router to expose route context (query params, etc.)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: { template: "<div />" },
    },
    {
      path: "/payment-success",
      component: { template: "<div />" },
    },
  ],
});

export default router;
