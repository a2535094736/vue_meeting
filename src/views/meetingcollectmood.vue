<template>
  <div class="container">
    <BreadCrumb></BreadCrumb>
    <div class="page">
      <div class="left_all">
        <div class="left_slider">
          <Slider :siderItem="siderItem"></Slider>
        </div>
      </div>
      <div class="mainer">
        <el-row class="title">自定义名单收集模版</el-row>
        <el-card shadow="never">
          <div class="title_small">
            <span>HCP 基本信息(必填）</span
            >
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/breadCurmb";
import Slider from "../components/Slider";
export default {
  data() {
    return {
      siderItem: "自定义模版",
    };
  },
  components: {
    BreadCrumb,
    Slider,
  },
};
</script>

<style>
</style>