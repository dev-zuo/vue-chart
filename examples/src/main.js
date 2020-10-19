import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// 引入所有组件
// import VueChart from "../../src/index.js";
// Vue.use(VueChart);
// import VueChart from "../../lib/vue-chart.umd.min.js";
// Vue.use(VueChart);
import VueChart from "@guoqzuo/vue-chart";
Vue.use(VueChart);

// // 按需引入单个组件
// import { MyButton } from '../../src/index.js'
// Vue.use(MyButton)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
