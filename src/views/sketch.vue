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
        <el-row class="title">会议编号：EPG567</el-row>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="status" label="状态"> </el-table-column>
          <el-table-column prop="name" label="旅客"> </el-table-column>
          <el-table-column prop="uciCode" label="UCI CODE"> </el-table-column>
          <el-table-column prop="orderTime" label="填写日期"> </el-table-column>
          <el-table-column prop="address" label="详情">
            <el-button type="primary">编辑</el-button>
          </el-table-column>
        </el-table>
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
      siderItem: "草稿箱",
      queryItem: [
        {
          title: "输入乘客姓名",
          input: "",
          type: "input",
        },
        {
          title: "待审批",
          input: "",
          type: "input",
        },
      ],
      tableData: [
        {
          name: "张**",
          orderTime: "2020-11-01",
          startTime: "2020-11-11",
          status: "草稿",
          uciCode:'111easddad'
        },
        {
          data: "1",
        },
      ],
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