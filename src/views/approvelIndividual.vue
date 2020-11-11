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
        <el-row class="title">会议编号：{{eorder_no}}</el-row>
        <el-card shadow="never">
          <div class="title_small">
            <span>基本信息</span>
          </div>
          <el-row :gutter="40">
            <el-col class="doota" :span="12">
              <el-row>填写人：{{orderInfo.paxname}}</el-row>
              <el-row>CUI Code：{{orderInfo.IdNo}}</el-row>
            </el-col>
            <el-col :span="12">
              <el-row>HCP姓名:{{orderInfo.bookname}}</el-row>
              <el-row>医院：{{orderInfo.hospital}}</el-row>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="never">
          <div class="title_small">
            <span>交通信息</span>
          </div>
          <el-row class="procedule" v-for="(item,index) in orderInfo.trips" :key="index" :gutter="40">
            <el-col class="doota" :span="12">
              <el-row>
                <el-col :span="3">
                  <span class="procedule_show">第{{index+1}}程</span>
                </el-col>
                <el-col class="procedule_column procedule_column_left" :span="6">
                  <div class="date_start">
                    <p>{{item.depdate}}</p>
                    <p>{{item.deptime}}</p>
                  </div>
                  <div class="date_end">
                    <p>{{item.arrdate}}</p>
                    <p>{{item.arrtime}}</p>
                  </div>
                </el-col>
                <el-col class="procedule_column procedule_column_right" :span="6">
                  <div class="date_start">
                    <p>{{item.depairpot}}{{item.deptem}}</p>
                  </div>
                  <div class="date_duration">
                    <p>{{item.arrtime}}</p>
                  </div>
                  <div class="date_end">
                    <p>{{item.arrairpot}}{{item.arrtem}}</p>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>舱位：经济舱 ¥1,680</el-row>
              <el-row>最低票价：经济舱 ¥550</el-row>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="never">
          <div class="title_small">
            <span>总计</span>
          </div>
          <el-row class="total_fare">
            差旅总费用：
            <span>¥ {{orderInfo.totalprice}}</span>
            <br />审批时限：{{orderInfo.deadlineapprovel}}
          </el-row>
        </el-card>
        <div v-if="orderInfo.approvelstatus==='待审批'" class="submitArea">
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
import { log } from "util";
export default {
  data() {
    return {
      eorder_no:'',
      siderItem: "审批单详情",
      orderInfo: [],
      table___filterData: [
        {
          collectSource: "预邀请",
          travel: "张建国",
          date: "2020-11-01 \n 2020-11-02",
          flightt: "上海虹桥 / \n 北京首都 \n 北京大兴 / 上海浦东",
          train: "",
          status: "未出票",
          mk_keyp: "",
        },
        {
          collectSource: "新添加",
          travel: "李丽娟",
          date: "2020-11-01 \n 2020-11-03",
          flightt: "",
          train: "上海南站 / \n 北京南站 \n 北京西站 / 上海站",
          status: "已出票",
          mk_keyp: "",
        },
      ],
    };
  },
  created() {
    const listOrderInfo = JSON.parse(this.$route.query.id)
    this.eorder_no = this.$route.query.eorder_no
    this.orderInfo  =  listOrderInfo;
  },
  methods: {},
  components: {
    BreadCrumb,
    Slider,
  },
};
</script>

<style lang="less" scoped>
.mainer {
  font-size: 16px;
  line-height: 26px;
  .total_fare {
    font-size: 18px;
    color: #333333;
    font-weight: 550;
    span {
      color: #ed5555;
    }
  }
  .procedule_show {
    font-size: 12px;
    display: inline-block;
    color: #fff;
    width: 56px;
    height: 19px;
    line-height: 19px;
    text-align: center;
    background: #2d8cf0;
    border-radius: 74px 73px 74px 0px;
  }
  .procedule{
      margin-bottom: 20px;
  }
  .procedule_column {
    height: 150px;
    position: relative;
    font-size: 16px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    

    .date_start,
    .date_end,
    .date_duration {
      p {
        margin: 0;
      }
    }
  }
  .procedule_column_right{
      margin-left: 20px;
  }
  .procedule_column_left {
      
    border-right: 1px dotted #2d8cf0;
    &::after {
      content: "";
      width: 14px;
      color: #2d8cf0;
      height: 14px;
      position: absolute;
      top: 0;
      right: -8px;
      background-color: #2d8cf0;
      border-radius: 50%;
    }
    &::before {
      content: "";
      width: 14px;
      color: #2d8cf0;
      height: 14px;
      position: absolute;
      bottom: 0;
      right: -8px;
      background-color: #2d8cf0;
      border-radius: 50%;
    }
  }
}
.doota {
  border-right: 1px dotted #ccc;
}
</style>