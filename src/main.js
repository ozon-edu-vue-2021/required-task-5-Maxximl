import Vue from "vue";
import App from "./App.vue";
import { Button, InputNumber } from "ant-design-vue";
import { router } from "./router";
import "ant-design-vue/dist/antd.css";
import { store } from "./store";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(InputNumber);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
