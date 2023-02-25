import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
// 引入组件库和样式
import "tdesign-vue-next/dist/reset.css";
import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(router);
app.use(TDesign);
app.use(pinia);

app.mount("#app");
