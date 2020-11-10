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
        <div v-if="approvelStatus == '待审批'" class="title_allCheck">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          ><span
            ><el-button icon="el-icon-finished" type="text" size="small"
              >按审批时间排列</el-button
            ></span
          >
        </div>
        <el-card
          v-for="item in orderInfo"
          :key="item.id"
          class="approvelItem approvelItem1"
          shadow="never"
        >
          <div v-if="approvelStatus == '待审批'" class="approvelItemCheck">
            <el-checkbox
              v-model="item.isCheckd"
              @change="handleCheckedItemChange"
            ></el-checkbox>
          </div>
          <div class="approvelItemInfo">
            <p>姓名：{{ item.name }}</p>
            <p>医院：{{ item.hospital }}</p>
            <p>最晚审批时限：{{ item.deadline }}</p>
            <p>订单价格：{{ item.orderFare }}</p>
            <p>火车订单数量：{{ item.fAmount }}</p>
            <p>飞机订单数量：{{ item.tAmount }}</p>
          </div>
          <el-button type="primary" size="default" class="approvelGoDetail"
          @click="goApprovelIndividual(item.id)"
            >详情</el-button
          >
        </el-card>
        <div class="submitArea">
          <el-pagination
            background
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            layout=" prev, pager, next,sizes, jumper"
            :total="40"
          >
          </el-pagination>
          <div v-if="approvelStatus == '待审批'" class="submitArea_row">
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
import { log } from "util";
export default {
  data() {
    return {
      approvelStatus: "待审批",
      siderItem: "审批单明细",
      isIndeterminate: true,
      checkAll: false,
      checked: true,
      queryItem: [
        {
          title: "输入乘机人姓名",
          input: "",
          type: "input",
        },
        {
          title: "输入行程开始日期",
          input: "",
          type: "date",
        },
        {
          title: "输入行程结束日期",
          input: "",
          type: "date",
        },
      ],
      customColors: [
        { color: "#67C23A", percentage: 60 },
        { color: "#F56C6C", percentage: 80 },
      ],
      orderInfo: [
        {
          id: 1,
          name: "张**",
          hospital: "上海市第一人民医院",
          deadline: "2020-11-09 12:45:26",
          orderFare: 1733.0,
          fAmount: 1,
          tAmount: 1,
          isCheckd: true,
        },
        {
          id: 2,
          name: "刘**",
          hospital: "上海市第一人民医院",
          deadline: "2020-11-09 12:45:26",
          orderFare: 2721.0,
          fAmount: 1,
          tAmount: 1,
          isCheckd: false,
        },
      ],
    };
  },
  methods: {
    handleCheckAllChange(val) {
      if (this.checkAll) {
        this.orderInfo.map((item) => {
          item.isCheckd = true;
          this.isIndeterminate = false;
        });
      } else {
        this.orderInfo.map((item) => {
          item.isCheckd = false;
          this.isIndeterminate = false;
        });
      }
    },
    // 详情页面审批
    goApprovelIndividual(id){
       this.$router.push({path:'/approvelindividual',query:{id:id}})
    },
    handleCheckedItemChange(value) {
      const checkList = [];
      let orderLength = this.orderInfo.length;
      this.orderInfo.map((item) => {
        if (item.isCheckd) {
          checkList.push(item);
        }
      });
      this.checkAll = checkList.length == orderLength;
      this.isIndeterminate =
        checkList.length > 0 && checkList.length < orderLength;
    },
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
.title_allCheck {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  margin: 0 20px;
}
</style>