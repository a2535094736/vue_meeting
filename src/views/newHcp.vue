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
        <el-form label-position="left" :model="userDefinedForm" ref="meetingInfoFromRef">
        <el-row class="title">自定义名单收集模版</el-row>
        <el-card shadow="never">
          <div class="title_small">
            <span>HCP 基本信息</span>
            <span>
              <el-button type="text" size="small">查看常用联系人</el-button>
            </span>
          </div>
          <InputArea :inputInfo="userDefinedForm.hcpInfo" currentTime="hcpInfo"></InputArea>
        </el-card>
        <el-card shadow="never">
          <div class="title_small">
            <span>参会人参会信息</span>
          </div>
          <InputArea :inputInfo="userDefinedForm.participantInfo" currentTime="participantInfo"></InputArea>
        </el-card>
        <el-card shadow="never">
          <div class="title_small">
            <span>HCP 负责人（员工）基本信息</span>
          </div>
          <InputArea :inputInfo="userDefinedForm.staffInfo" currentTime="staffInfo"></InputArea>
        </el-card>
        
        <div class="submitArea">
          <div>
            <el-checkbox v-model="isFrequentContacts">是否加入常用联系人</el-checkbox>
          </div>
          <div class="submitArea_row">
            <el-button type="primary" plain>保存草稿</el-button>
            <el-button type="primary">立即预定</el-button>
          </div>
        </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/breadCurmb";
import Slider from "../components/Slider";
import InputArea from "../components/inputArea";
export default {
  data() {
    return {
      siderItem: "新建HCP",
      isFrequentContacts: false,
      userDefinedForm: {
        //HCP 基本信息
        hcpInfo: [
          {
            name: "UCI CODE", // inputLable的中文
            v_model: "ucicode",
            value: "", // 输入框的值
            isNecessary: true, // 是否为必填项
            type: "select", // 输入框的类型
            width: 24,
            tip: "123",
            option: [
              "100%",
              "95%",
              "90%",
              "85%",
              "80%",
              "75%",
              "70%",
              "65%",
              "60%",
              "55%",
              "50%",
              "45%",
              "40%",
              "35%",
              "30%",
              "25%",
              "20%",
              "15%",
              "10%",
              "5%",
            ],
          },
          {
            name: "HCP 姓名", // inputLable的中文
            v_model: "hcpname",
            value: "", // 输入框的值
            isNecessary: true, // 是否为必填项
            type: "text", // 输入框的类型
          },
          {
            name: "HCP 单位所在城市",
            v_model: "hcpcompanycity",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 性别",
            v_model: "hcpgender",
            value: "",
            isNecessary: true,
            type: "select",
            option: ["男", "女"],
          },
          {
            name: "HCP 所在城市",
            v_model: "hcpcity",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 手机号",
            v_model: "hcpphone",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 所在医院",
            v_model: "hcphospital",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 证件类型",
            v_model: "hcpidcardtype",
            value: "",
            isNecessary: true,
            type: "select",
            option: ["身份证", "港澳通行证", "护照"],
          },
          {
            name: "HCP 在科室",
            v_model: "hcpdepartment",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 证件号",
            v_model: "hcpidnumber",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 职务",
            v_model: "hcptitle",
            value: "",
            isNecessary: true,
            type: "text",
          },
        ],
        //参会人参会信息
        participantInfo: [
          {
            name: "客户类型",
            v_modle: "",
            value: "",
            isNecessary: true,
            type: "radio",
            option: ["HCP", "员工"],
          },
          {
            name: "HCP 是否需要陪同",
            v_modle: "",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "房间需求",
            v_modle: "",
            value: "",
            isNecessary: true,
            type: "radio",
            option: ["单间", "标间"],
          },
          {
            name: "是否为本次会议主席/讲者",
            v_modle: "",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "同住人",
            v_modle: "",
            value: "",
            isNecessary: true,
            type: "radio",
            option: ["随机安排", "有"],
          },
          {
            name: "火车票是否接受二等座",
            v_modle: "",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "是否需要大交通",
            v_modle: "",
            value: "",
            isNecessary: true,
            type: "radio",
            hasCheck: true,
            checkbox: [],
            checkList: ["飞机", "火车"],
          },
          {
            name: "是否参加晚宴",
            v_modle: "",
            value: "",
            isNecessary: true,
            type: "radio",
          },
        ],
        // HCP 负责人（员工）基本信息
        staffInfo: [
          {
            name: "负责同事姓名",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "所属销售区域会议状态",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "负责同事手机号",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "火车票是否接受二等座",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "现场陪同人员",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "员工是否参加晚宴",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "现场陪同人员手机号",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "备注",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
        ],
      },
    
    };
  },
  components: {
    BreadCrumb,
    Slider,
    InputArea,
  },
};
</script>

<style lang="less" scoped>
</style>
