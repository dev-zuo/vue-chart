<template>
  <div style="display:flex;">
    <!-- <div style="width:600px; height:50vh">
      <z-chart :options="round" :autoResize="false"> </z-chart>
    </div> -->
    <!-- {{ bar }} -->

    <div style="width:300px; height: 300px">
      <z-chart :options="bar" :loading="loading"> </z-chart>
    </div>
    <!-- {{ pie }} -->
    <div style="width: 50%; height: 50vh">
      <z-chart :options="pie" :hasData="hasData">
        暂无数据
      </z-chart>
    </div>
  </div>
</template>

<script>
import bar from "./data/bar";
import pie from "./data/pie";
import round from "./data/round";
export default {
  data() {
    return {
      bar: {},
      pie: {},
      round: {},
      loading: true,
      hasData: false
    };
  },
  created() {
    this.bar = bar;
    this.pie = pie;
    this.round = round;
    setTimeout(() => {
      this.loading = false;
      this.hasData = true;
    }, 1000);
    setTimeout(() => {
      console.log("after 5 secs");
      this.pie = bar;
      this.bar = pie;
      this.$nextTick(() => {
        let resizeEvent = document.createEvent("Event");
        resizeEvent.initEvent("resize", true, true);
        window.dispatchEvent(resizeEvent);
      });
    }, 2000);
  }
};
</script>

<style></style>
