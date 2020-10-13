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
        <el-row class="title">审批列表</el-row>
        <QuickSearch :queryitem="queryItem"></QuickSearch>
        <el-row class="marginb20">
          <el-radio-group v-model="approvelStatus">
            <el-radio-button label="参会名单收集中"></el-radio-button>
            <el-radio-button label="已锁定"></el-radio-button>
            <el-radio-button label="已结束"></el-radio-button>
          </el-radio-group>
        </el-row>
        <div v-if="approvelStatus === '参会名单收集中'">
          <ApprovelList :approvelDataList="approvelDataList"></ApprovelList>
        </div>
        <div v-else-if="approvelStatus === '已锁定'">
          <ApprovelList :approvelDataList="approvelDataList" :hasdetail='false'></ApprovelList>
        </div>
        <div v-else>
          <ApprovelList :approvelDataList="approvelDataListEnd"></ApprovelList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/breadCurmb";
import Slider from "../components/Slider";
import QuickSearch from "../components/quickSearch";
import ApprovelList from "../components/approvelItem";
export default {
  data() {
    return {
      siderItem: "审批列表",
      queryItem: ["会议名称", "会议编号", "会议开始日期", "会议结束日期"],
      approvelStatus: "参会名单收集中",
      approvelDataList: [
        {
          name: "广州淋巴癌会议",
          startTime: "2020-11-11",
          endTime: "2020-11-11",
          meetNum: "EPG567",
          gross: 600000,
          cost: 560000,
        },
        {
          name: "广州淋巴癌会议",
          startTime: "2020-11-11",
          endTime: "2020-11-11",
          meetNum: "EPG567",
          gross: 600000,
          cost: 120000,
        },
      ],
      approvelDataListEnd: [
        {
          name: "广州淋巴癌会议",
          startTime: "2020-11-11",
          endTime: "2020-11-11",
          meetNum: "EPG567",
          gross: 600000,
          cost: 600000,
        },
        {
          name: "广州淋巴癌会议",
          startTime: "2020-11-11",
          endTime: "2020-11-11",
          meetNum: "EPG567",
          gross: 600000,
          cost: 550000,
        },
      ],
    };
  },
  components: {
    BreadCrumb,
    Slider,
    QuickSearch,
    ApprovelList,
  },
};
</script>

<style>
</style>