import DashBoardView from "@/views/Dashboard/index.vue";
import LoginView from "@/views/Login/index.vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
const routes: Array<RouteRecordRaw> = [
  { path: "/", component: DashBoardView, name: "dashboard" },
  { path: "/login", component: LoginView, name: "login" },
];

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes,
  scrollBehavior: () => {
    {
      0;
      0;
    }
  },
});

export default router;
