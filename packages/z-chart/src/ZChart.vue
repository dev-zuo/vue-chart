<template>
  <!-- z-chart -->
  <div class="z-chart-container">
    <base-chart
      v-if="!loading && hasData"
      :options="options"
      v-on="$listeners"
      v-bind="$attrs"
    ></base-chart>
    <base-loading v-if="loading"></base-loading>

    <!-- no data slot -->
    <slot v-if="!loading && !hasData"></slot>
  </div>
</template>

<script>
export default {
  name: "ZChart",

  components: {
    BaseChart: () => import("./BaseChart"),
    BaseLoading: () => import("./BaseLoading")
  },

  props: {
    loading: {
      type: Boolean,
      required: false
    },
    options: {
      type: Object,
      required: true
    },
    hasData: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style>
.z-chart-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
