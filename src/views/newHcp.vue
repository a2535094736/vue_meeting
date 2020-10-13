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
          <InputArea :hcpInfo='hcpInfo' :isNecessarySignal='true'></InputArea>
        </el-card>
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
      input: "",
      hcpInfo: [
        {
          enTitle: "UCI CODE",
          znTitle: "UCI CODE",
          input: "",
          isnecessary: 'necessary',
          type: "input",
        },
        { enTitle: "name", znTitle: "姓名", input: "", type: "input" },
        {
          enTitle: "companyCity",
          znTitle: "单位所在城市",
          input: "",
          type: "input",
        },
        { enTitle: "gender", znTitle: "性别", input: "", type: "input" },
        { enTitle: "city", znTitle: "所在城市", input: "", type: "input" },
        { enTitle: "mobile", znTitle: "手机号", input: "", type: "input" },
        { enTitle: "hostipal", znTitle: "所在医院", input: "", type: "input" },
        { enTitle: "idNum", znTitle: "证件号", input: "", type: "input" },
        {
          enTitle: "department",
          znTitle: "所在科室",
          input: "",
          type: "input",
        },
        {
          enTitle: "licenceType",
          znTitle: "证件类型",
          input: "",
          type: "input",
        },
        { enTitle: "title", znTitle: "职务", input: "", type: "input" },
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
