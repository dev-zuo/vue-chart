<template>
  <!-- base chart -->
  <div class="z-chart" ref="z-echart"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import { debounce } from "lodash";

export default {
  name: "BaseChart",

  props: {
    options: {
      type: Object,
      required: false
    },
    autoResize: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data() {
    return {};
  },

  created() {
    // 监听 options 改动，改动后重绘数据
    this.$watch(
      "options",
      () => {
        this.refresh();
      },
      { deep: true }
    );
  },

  mounted() {
    this.init();
  },

  beforeDestroy() {
    this.destroy();
  },

  methods: {
    init() {
      console.log(
        '>>> this.$refs["z-echart"]',
        this.$refs["z-echart"],
        this.options
      );
      let chart = echarts.init(this.$refs["z-echart"]);
      console.log(">>>chart", chart);
      chart.setOption(this.options || {});
      this.chart = chart;
      console.log(">>>chart", this.chart);

      // 当元素宽高改变时resize执行重绘
      if (this.autoResize) {
        this.__resizeHanlder = debounce(
          () => {
            console.log(">>> resize", chart);
            chart.resize();
          },
          100,
          { leading: true }
        );
        console.log(">>>this.$el", this.$el);
        addListener(this.$refs["z-echart"], this.__resizeHanlder);
      }
    },

    destroy() {
      // 销毁实例，防止 柱状图 动态切换到 饼图 时，柱状图部分属性依旧留存的问题
      console.log("destroy");
      this.chart.dispose();
      this.chart = null;
      this.autoResize &&
        removeListener(this.$refs["z-echart"], this.__resizeHanlder);
    },

    // 销毁后重绘，用于options变更后刷新图表
    refresh() {
      console.log("refresh");
      this.destroy();
      this.init();
    }
  }
};
</script>

<style lang="less" scoped>
.z-chart {
  width: 100%;
  height: 100%;
}
</style>
