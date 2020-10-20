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
        <el-row class="title meeting_precent"
          >当前使用额度：<el-progress
            :percentage="90"
            :color="customColors"
          ></el-progress
        ></el-row>
        <QuickSearch :queryitem="queryItem"></QuickSearch>
        <el-row class="marginb20">
          <el-radio-group v-model="approvelStatus">
            <el-badge :value="28" type="primary" class="approvelStatusBadge">
              <el-radio-button label="待审批"></el-radio-button>
            </el-badge>
            <el-badge :value="19" type="success" class="approvelStatusBadge">
              <el-radio-button label="已审批"></el-radio-button>
            </el-badge>
            <el-badge :value="7" class="approvelStatusBadge">
              <el-radio-button label="已拒绝"></el-radio-button>
            </el-badge>
          </el-radio-group>
        </el-row>
        <div class="submitArea">
          <div class="submitArea_row">
            <el-button type="primary" plain>拒绝审批</el-button>
            <el-button type="primary">审批通过</el-button>
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
      approvelStatus: "待审批",
      siderItem: "审批单明细",
      queryItem: [
        {
          title: "输入乘机人姓名",
          input: "",
          type: "input",
        },
        {
          title: "输入行程开始日期",
          input: "",
          type: "input",
        },
        {
          title: "输入行程结束日期",
          input: "",
          type: "input",
        },
      ],
      customColors: [
        { color: "#67C23A", percentage: 60 },
        { color: "#F56C6C", percentage: 80 },
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

<style scoped>
.meeting_precent {
  display: flex;
}

</style>