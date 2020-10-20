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
        <el-row class="title">广州肠癌会议费用结算</el-row>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column> 
              <template slot-scope="scope">
                  {{scope.row.name}}
              </template>
          </el-table-column>
          <el-table-column prop="gross" label="总金额"> </el-table-column>
          <el-table-column prop="averageDiscount" label="平均折扣率"> </el-table-column>
          <el-table-column prop="averageReissue" label="平均改期率"> </el-table-column>
          <el-table-column prop="address" label="平均退票率">
          </el-table-column>
        </el-table>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="averageDiscount" label="乘机人姓名"> </el-table-column>
          <el-table-column prop="averageReissue" label="产品类别"> </el-table-column>
          <el-table-column prop="address" label="金额">
          </el-table-column>
        </el-table>
        <div class="submitArea">
          <div class="submitArea_row">
            <el-button type="primary">导出费用明细</el-button>
          </div>
        </div>
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
      siderItem: "费用结算",
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
          name: "预期",
          orderTime: "2020-11-01",
          startTime: "2020-11-11",
          status: "草稿",
          uciCode:'111easddad'
        },
        {
          name: "实际",
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