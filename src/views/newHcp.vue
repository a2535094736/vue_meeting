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
        <el-row class="title">会议名称：广州肿瘤会议 会议编号：EPG567</el-row>
        <el-card shadow="never">
          <div class="title_small">
            <span>HCP 基本信息</span
            ><span
              ><el-button type="text" size="small"
                >查看常用联系人</el-button
              ></span
            >
          </div>
          <InputArea :inputInfo="hcpInfo" :isNecessarySignal="true"></InputArea>
        </el-card>
        <el-card shadow="never">
          <div class="title_small">
            <span>参会人参会信息</span>
          </div>
          <InputArea
            :inputInfo="participantInfo"
            :isNecessarySignal="true"
          ></InputArea>
        </el-card>
        <el-card shadow="never">
          <div class="title_small">
            <span>HCP 负责人（员工）基本信息</span>
          </div>
          <InputArea
            :inputInfo="staffInfo"
            :isNecessarySignal="true"
          ></InputArea>
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
      isFrequentContacts: true,
      hcpInfo: [
        {
          enTitle: "HCP UCI CODE",
          znTitle: "HCP UCI CODE",
          input: "",
          isnecessary: "necessary",
          type: "input",
        },
        { enTitle: "HCP name", znTitle: "HCP 姓名", input: "", type: "input" },
        {
          enTitle: "HCP companyCity",
          znTitle: "HCP 单位所在城市",
          input: "",
          type: "input",
        },
        {
          enTitle: "HCP gender",
          znTitle: "HCP 性别",
          input: "",
          type: "select",
          options: [
            {
              value: "男",
              label: "男",
            },
            {
              value: "女",
              label: "女",
            },
          ],
        },
        {
          enTitle: "HCP city",
          znTitle: "HCP 所在城市",
          input: "",
          type: "input",
        },
        {
          enTitle: "HCP mobile",
          znTitle: "HCP 手机号",
          input: "",
          type: "input",
        },
        {
          enTitle: "HCP hostipal",
          znTitle: "HCP 所在医院",
          input: "",
          type: "input",
        },
        {
          enTitle: "HCP licenceType",
          znTitle: "HCP 证件类型",
          input: "",
          type: "select",
          options: [
            {
              value: "身份证",
              label: "身份证",
            },
            {
              value: "护照",
              label: "护照",
            },
          ],
        },
        {
          enTitle: "HCP department",
          znTitle: "HCP 所在科室",
          input: "",
          type: "input",
        },
        {
          enTitle: "HCP idNum",
          znTitle: "HCP 证件号",
          input: "",
          type: "input",
        },
        { enTitle: "HCP title", znTitle: "HCP 职务", input: "", type: "input" },
      ],
      participantInfo: [
        {
          enTitle: "particpantType",
          znTitle: "客户类型",
          input: "",
          type: "radio",
          radio: [{ value: "HCP" }, { value: "员工" }],
        },
        {
          enTitle: "withPartner",
          znTitle: "HCP 是否需要陪同",
          input: "",
          type: "radio",
          radio: [{ value: "是" }, { value: "否" }],
        },
        {
          enTitle: "房间需求",
          znTitle: "房间需求",
          input: "",
          type: "radio",
          radio: [{ value: "单间" }, { value: "标间" }],
        },
        {
          enTitle: "是否为本次会议主席/讲者",
          znTitle: "是否为本次会议主席/讲者",
          input: "",
          type: "radio",
          radio: [{ value: "是" }, { value: "否" }],
        },
        {
          enTitle: "同住人",
          znTitle: "同住人",
          input: "",
          type: "radio",
          radio: [{ value: "随机安排" }, { value: "有" }],
        },
        {
          enTitle: "火车票是否接受二等座",
          znTitle: "火车票是否接受二等座",
          input: "",
          type: "radio",
          radio: [{ value: "是" }, { value: "否" }],
        },
        {
          enTitle: "是否需要大交通",
          znTitle: "是否需要大交通",
          input: "",
          type: "radio",
          radio: [{ value: "是" }, { value: "否" }],
        },
        {
          enTitle: "是否参加晚宴",
          znTitle: "是否参加晚宴",
          input: "",
          type: "radio",
          radio: [{ value: "是" }, { value: "否" }],
        },
      ],
      staffInfo: [
        {
          enTitle: "负责同事姓名",
          znTitle: "负责同事姓名",
          input: "",
          type: "input",
        },
        {
          enTitle: "所属销售区域",
          znTitle: "所属销售区域",
          input: "",
          type: "input",
        },
        {
          enTitle: "负责同事手机号",
          znTitle: "负责同事手机号",
          input: "",
          type: "input",
        },
        {
          enTitle: "火车票是否接受二等座",
          znTitle: "火车票是否接受二等座",
          input: "",
          type: "radio",
          radio: [{ value: "是" }, { value: "否" }],
        },
        {
          enTitle: "现场陪同人员",
          znTitle: "现场陪同人员",
          input: "",
          type: "input",
        },
        {
          enTitle: "员工是否参加晚宴",
          znTitle: "员工是否参加晚宴",
          input: "",
          type: "radio",
          radio: [{ value: "是" }, { value: "否" }],
        },
        {
          enTitle: "现场陪同人员手机号",
          znTitle: "现场陪同人员手机号",
          input: "",
          type: "input",
        },
        {
          enTitle: "备注",
          znTitle: "备注",
          input: "",
          type: "input",
        },
      ],
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
