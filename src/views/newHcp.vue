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
                <el-button type="text" size="small" @click="openFrequentContacts = true">查看常用联系人</el-button>
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
              <el-button type="primary" @click="handleReservations">立即预定</el-button>
            </div>
          </div>
        </el-form>
      </div>
      <el-dialog
        class="frequent_contact"
        title="常用联系人"
        :visible.sync="openFrequentContacts"
        width="30%"
      >
        <el-row class="freq_row">
          <el-col :span="8" :offset="0">姓名：{{diy_json2.HCPName}}</el-col>
          <el-col :span="13" :offset="0">手机号：{{diy_json2.StaffMobile}}</el-col>
          <el-col :span="3" :offset="0">
            <el-button type="primary" size="mini" @click="renderFrequentContact">应用</el-button>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="openFrequentContacts = false">取 消</el-button>
        </span>
      </el-dialog>
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
      diy_json2: {
        AttendeeID: 1234567,
        AWSEventSystemID: 1234567,
        HCPName: "韩黎诗",
        HCPGender: "女",
        HCPMobile: 17821710519,
        HCPIDNo: "31010119990519052X",
        HCPIDType: "身份证",
        IsHCPAttendsMeeting: "Y",
        HCPCompanyCity: "上海",
        HCPCity: "上海",
        UCICode: "000009871",
        HCPHospital: "上海瑞金医院",
        HCPDepartment: "呼吸科",
        HCPJobTitle: "主任医师",
        AttendeeType: "HCP",
        RoomType: "单间",
        RoomShareWith: "随机安排",
        IsNeedBigTransportation: "Y",
        FlightFlag: "Y",
        TrainFlag: "Y",
        IsHCPAccompanied: "Y",
        IsSpeaker: "Y",
        IsHCPAccept2ndSeat: "N",
        IsHCPAttendDinnerParty: "Y",
        StaffName: "张小泉",
        StaffMobile: 13917033542,
        StaffNameInMeeting: "张小泉",
        StaffMobileInMeeting: 13917033542,
        SalesRegion: "华南区",
        IsStaffAccept2ndSeat: "Y",
        IsStaffAttendDinnerParty: "Y",
        Remark: "重要老师",
        SignedID: "张小泉",
        SignedEmail: "quan.zhang@roche.cn",
        SignedSSOTimeSpan: "2020-10-23 14:27",
      },
      isFrequentContacts: false,
      openFrequentContacts: false,
      userDefinedForm: {
        //HCP 基本信息
        hcpInfo: [
          {
            name: "UCI CODE", // inputLable的中文
            v_model: "UCICode",
            value: "", // 输入框的值
            isNecessary: true, // 是否为必填项
            type: "select", // 输入框的类型
            width: 24,
            tip: "123",
            option: ["1597322516523", "1597322531258"],
          },
          {
            name: "HCP 姓名", // inputLable的中文
            v_model: "HCPName",
            value: "", // 输入框的值
            isNecessary: true, // 是否为必填项
            type: "text", // 输入框的类型
          },
          {
            name: "HCP 单位所在城市",
            v_model: "HCPCompanyCity",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 性别",
            v_model: "HCPGender",
            value: "",
            isNecessary: true,
            type: "select",
            option: ["男", "女"],
          },
          {
            name: "HCP 所在城市",
            v_model: "HCPCity",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 手机号",
            v_model: "HCPMobile",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 所在医院",
            v_model: "HCPHospital",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 证件类型",
            v_model: "HCPIDType",
            value: "",
            isNecessary: true,
            type: "select",
            option: ["身份证", "港澳通行证", "护照"],
          },
          {
            name: "HCP 在科室",
            v_model: "HCPDepartment",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 证件号",
            v_model: "HCPIDNo",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "HCP 职务",
            v_model: "HCPJobTitle",
            value: "",
            isNecessary: true,
            type: "text",
          },
        ],
        //参会人参会信息
        participantInfo: [
          {
            name: "客户类型",
            v_model: "AttendeeType",
            value: "",
            isNecessary: true,
            type: "radio",
            option: ["HCP", "员工"],
          },
          {
            name: "HCP 是否需要陪同",
            v_model: "IsHCPAccompanied",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "房间需求",
            v_model: "RoomType",
            value: "",
            isNecessary: true,
            type: "radio",
            option: ["单间", "标间"],
          },
          {
            name: "是否为本次会议主席/讲者",
            v_model: "IsSpeaker",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "同住人",
            v_model: "RoomShareWith",
            value: "",
            isNecessary: true,
            type: "radio",
            option: ["随机安排", "有"],
          },
          {
            name: "火车票是否接受二等座",
            v_model: "IsHCPAccept2ndSeat",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "是否需要大交通",
            v_model: "IsNeedBigTransportation",
            value: "",
            isNecessary: true,
            type: "radio",
            hasCheck: true,
            checkList: [{ 飞机: true }, { 火车: true }],
          },
          {
            name: "是否参加晚宴",
            v_model: "IsHCPAttendDinnerParty",
            value: "",
            isNecessary: true,
            type: "radio",
          },
        ],
        // HCP 负责人（员工）基本信息
        staffInfo: [
          {
            name: "负责同事姓名",
            v_model: "StaffName",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "所属销售区域会议状态",
            v_model: "SalesRegion",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "负责同事手机号",
            v_model: "StaffMobile",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "火车票是否接受二等座",
            v_model: "IsStaffAccept2ndSeat",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "现场陪同人员",
            v_model: "StaffNameInMeeting",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "员工是否参加晚宴",
            v_model: "IsStaffAttendDinnerParty",
            value: "",
            isNecessary: true,
            type: "radio",
          },
          {
            name: "现场陪同人员手机号",
            v_model: "StaffMobileInMeeting",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "备注",
            v_model: "Remark",
            value: "",
            isNecessary: true,
            type: "text",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    renderDate() {
      const arr = ["hcpInfo", "participantInfo", "staffInfo"];
      arr.map((i) => {
        this.userDefinedForm[i].map((item) => {
          for (let item1 in this.diy_json2) {
            if (item1 == item.v_model) {
              item.value = this.diy_json2[item1];
            }
          }
        });
      });
    },
    // 将常用联系人渲染到页面
    renderFrequentContact() {
      this.$confirm("确认应用当前模版？",{
        type:'success'
      })
        .then((_) => {
          this.renderDate();
          this.openFrequentContacts = false;
        })
        .catch((_) => {
          console.log('取消了当前操作');
        });
    },
    handleReservations() {
      this.$refs["meetingInfoFromRef"].validate((valid) => {
        if (!valid) {
          console.log("error submit!!");
          return false;
        }
        alert("summit!");
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

<style lang="less">
.frequent_contact {
  .el-dialog__body {
    min-height: 150px;
    max-height: 300px;
    overflow-y: auto;
  }
  .freq_row {
    border-bottom: 1px solid #ebeef5;
    padding: 10px;
    line-height: 30px;
  }
}
</style>
