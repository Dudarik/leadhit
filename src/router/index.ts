import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/auth",
  },
  {
    path: "/auth",
    name: "auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/AuthVue.vue"),
  },
  {
    path: "/analytic",
    name: "analytic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "analytic" */ "../views/AnalyticView.vue"),
    beforeEnter() {
      const leadhitSiteId = localStorage.getItem("leadhit-site-id");
      if (!leadhitSiteId) return "/auth";
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
