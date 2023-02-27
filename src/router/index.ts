import LoginView from "@/views/Login/index.vue";
import LayoutView from "@/views/common/layout.vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAppStore } from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/", name: "root", component: LayoutView, redirect: "dashboard", children: [
      { path: "dashboard", component: () => import("@/views/dashboard/index.vue"), name: "dashboard" }
    ]
  },
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

// 登录页面属于白名单

const whiteList = ["/login"];

router.beforeEach((to, form, next) => {
  const appStore = useAppStore();
  // 如果未登录需要重定向
  if (!appStore.token) {
    whiteList.indexOf(to.path) !== -1
      ? next()
      : next(`login?redirect=${to.path}`);
  }

  // 正常登录跳转至看板
  if (appStore.token && to.path === "/login") {
    next({ name: "dashboard" });
  }
  // 其他情况正常跳转
  next();
});

export default router;
