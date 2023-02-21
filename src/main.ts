import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
// 引入组件库和样式
import "tdesign-vue-next/dist/reset.css";
import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";
const app = createApp(App);
app.use(router);
app.use(TDesign);
app.mount("#app");
