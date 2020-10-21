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
        <el-row class="title">自定义名单收集模版</el-row>
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
            <span
              ><el-checkbox v-model="necessaryMode" disabled
                >设为必填项</el-checkbox
              ></span
            >
          </div>
          <el-row
            v-for="item in hasChooseUserDefined"
            :key="item.id"
            :gutter="20"
          >
            <el-col class="item_label" :span="5">{{
              item.title + "："
            }}</el-col>
            <el-col class="item_margin" :span="8"
              ><el-input v-model="item.input"></el-input
            ></el-col>
            <el-col style="line-height: 40px" :span="1"
              ><el-checkbox v-model="item.isnecessary"></el-checkbox
            ></el-col>
            <el-col :span="2"
              ><el-button
                type="danger"
                size="medium"
                plain
                @click="deleteUserDefine(item.id)"
                >删除</el-button
              ></el-col
            >
          </el-row>
        </el-card>
        <div class="submitArea">
          <div class="submitArea_row">
            <el-button type="primary" plain>保存模版</el-button>
            <el-button type="primary" plain>预览</el-button>
            <el-button type="primary">立即使用</el-button>
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
      inpit: "",
      checked2: "",
      siderItem: "自定义模版",
      necessaryMode: true,
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
      hasChooseUserDefined: [],
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