import ZChart from "./src/ZChart.vue";

ZChart.install = function(Vue) {
  Vue.component(ZChart.name, ZChart);
};

export default ZChart;
