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
        <QuickSearch :queryitem="queryItem"></QuickSearch>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="旅客"> </el-table-column>
          <el-table-column>
            <template slot="header">
              预订/出行日期
            </template>
            <template slot-scope="scope">
              {{scope.row.orderTime}}
              <br>
              {{scope.row.startTime}}
            </template>
          </el-table-column>
          <el-table-column prop="address" label="机票"> </el-table-column>
          <el-table-column prop="address" label="火车"> </el-table-column>
          <el-table-column prop="status" label="机票/火车状态">
          </el-table-column>
          <el-table-column prop="address" label="详情">
            <el-button type="primary">详情</el-button>
          </el-table-column>
        </el-table>
        <div class="submitArea">
          <div class="submitArea_row">
            <el-button type="primary">下载名单</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/breadCurmb";
import Slider from "../components/Slider";
import QuickSearch from "../components/quickSearch";
export default {
  data() {
    return {
      siderItem: "已提交",
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
          status: "已提交",
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
    QuickSearch,
  },
};
</script>

<style>
</style>