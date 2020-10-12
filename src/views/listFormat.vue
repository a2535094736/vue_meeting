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
        <el-row class="title">会议模版选择</el-row>
        <el-card shadow="never">
          <div class="formatarea">
            <div class="formate_title">
              <span>广州淋巴会议</span> <i class="el-icon-edit-outline"></i>
            </div>
            <div class="formate_frame">
                <img src="../assets/mod.jpg" alt="">
            </div>
            <div class="formate_title">
              <span>自定义</span> <i class="el-icon-edit-outline"></i>
            </div>
            <div class="formate_frame">
                <i class="el-icon-circle-plus"></i>
            </div>
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
      siderItem: "名单收集模版",
    };
  },
  components: {
    BreadCrumb,
    Slider,
  },
};
</script>

<style lang='less'>
.mainer {
  .formatarea {
    width: 630px;
    margin: 0px auto;
    font-size: 14px;
    color: #333333;
    line-height: 20px;
    .formate_title {
      i {
        font-size: 20px;
        position: relative;
        top: 2px;
        left: 5px;
      }
    }
    .formate_frame {
      width: 630px;
      height: 490px;
      padding: 15px;
      margin: 15px 0;
      box-sizing: border-box;
      background: #eeeeee;
      font-size: 34px;
      text-align: center;
      line-height: 490px;
      img{
          width: 100%;
          height: 100%;
      }
    }
  }
}
</style>