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
        <el-row class="title">自定义名单收集模版</el-row>
        <el-card shadow="never">
          <div class="title_small">
            <span>添加自定义填写项</span>
          </div>
          <!-- 用户点击添加自定义选项按钮 -->
          <div class="user_free_area">
            <div
              v-for="item in userDefined"
              :key="item.id"
              class="user_free_item"
              @click="handleToHasChoose(item.id)"
            >
              <div class="user_free_item_text">{{ item.title }}</div>
              <div class="user_free_item_img">
                <i class="el-icon-circle-plus"></i>
              </div>
            </div>
          </div>
        </el-card>
        <el-card shadow="never">
          <div class="title_small">
            <span>自定义信息编辑</span>
            <span>
              <el-checkbox v-model="necessaryMode" disabled>设为必填项</el-checkbox>
            </span>
          </div>
          <el-row v-for="item in hasChooseUserDefined" :key="item.id" :gutter="20">
            <el-col class="item_label" :span="5">
              {{
              item.title + "："
              }}
            </el-col>
            <el-col class="item_margin" :span="8">
              <el-input v-model="item.input"></el-input>
            </el-col>
            <el-col style="line-height: 40px" :span="1">
              <el-checkbox v-model="item.isnecessary"></el-checkbox>
            </el-col>
            <el-col :span="2">
              <el-button type="danger" size="medium" plain @click="deleteUserDefine(item.id)">删除</el-button>
            </el-col>
          </el-row>
        </el-card>
        <div class="submitArea">
          <div class="submitArea_row">
            <el-button type="primary" plain>保存模版</el-button>
            <el-button type="primary" plain>预览</el-button>
            <el-button type="primary">立即使用</el-button>
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
      siderItem: "自定义模版",
      necessaryMode: true,
      // 可供用用户自定义区域
      userDefined: [
        { id: 1, title: "所属销售区域", isnecessary: false, input: "" },
        {
          id: 2,
          title: "STAFF火车票 是否接受二等座",
          isnecessary: false,
          input: "",
        },
        { id: 3, title: "STAFF是否 参加晚宴会", isnecessary: false, input: "" },
        { id: 4, title: "HCP是否参会", isnecessary: false, input: "" },
        { id: 5, title: "HCP是否 需要陪同", isnecessary: false, input: "" },
        { id: 6, title: "HCP是否 参加晚宴会", isnecessary: false, input: "" },
      ],
      //用户自定义内容
      hasChooseUserDefined: [],
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
  methods: {
    handleToHasChoose(id) {
      this.userDefined.map((item, index) => {
        if (item.id == id) {
          this.userDefined.splice(index, 1);
          this.hasChooseUserDefined.push(item);
        }
      });
    },
    deleteUserDefine(id) {
      this.hasChooseUserDefined.map((item, index) => {
        if (item.id == id) {
          item.isnecessary = false;
          this.hasChooseUserDefined.splice(index, 1);
          this.userDefined.push(item);
        }
      });
    },
  },
  components: {
    BreadCrumb,
    Slider,
    InputArea,
  },
};
</script>

<style lang='less' scoped>
.user_free_area {
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  .user_free_item {
    width: 18%;
    height: 80px;
    background: #2d82f0;
    border-radius: 4px;
    margin: 0 1% 20px;
    display: flex;
    justify-content: space-between;
    .user_free_item_text {
      margin-left: 20px;
      color: #fff;
      width: 57%;
      height: 100%;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    .user_free_item_img {
      display: flex;
      align-items: center;
      margin-right: 20px;
      color: #fff;
      font-size: 30px;
    }
  }
}
</style>