<template>
  <div class="container">
    <BreadCrumb></BreadCrumb>
    <div class="page">
      <div class="left_all">
        <div class="left_slider">
          <div class="siderbar1">
            <div
              v-for="(item, index) in siderItem"
              :key="index"
              class="sider_item"
              :class="index == currentSider ? 'isActive' : ''"
              @click="handelSlider(index)"
            >{{ item }}</div>
          </div>
          <div @click="Funback(0, 200)" class="backup">
            <i class="el-icon-caret-top"></i>
          </div>
          <div class="submit_all_btn">
            <el-button type="primary" @click="checkValid" size="default">点击提交</el-button>
          </div>
        </div>
      </div>
      <div class="mainer">
        <el-form :model="meetingInfoFrom" label-position="left" :rules='rules' ref="meetingInfoFromFef" label-width="35%">
          <el-row class="title">会议信息详情</el-row>
          <el-card shadow="never">
            <div class="title_small slider_nav0">
              <span>会议基本信息</span>
            </div>
            <InputArea :inputInfo="meetingInfoFrom.meetingBaseInfo"></InputArea>
            <div class="title_small">
              <span>会议关键人</span>
            </div>
            <InputArea :inputInfo="meetingInfoFrom.meetingKeyManInfo"></InputArea>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column type="index" width="80">
                <template slot="header">序号</template>
              </el-table-column>
              <el-table-column prop="date" label="会议关键人角色"></el-table-column>
              <el-table-column prop="name" label="会议关键人姓名"></el-table-column>
              <el-table-column prop="address" label="会议关键人手机号"></el-table-column>
              <el-table-column prop="address" label="会议关键人邮箱"></el-table-column>
              <el-table-column prop="address" label="会议关键人座机"></el-table-column>
            </el-table>
            <div class="title_small">
              <span>会议报价</span>
            </div>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column type="index" width="80">
                <template slot="header">序号</template>
              </el-table-column>
              <el-table-column prop="date" label="报价金额"></el-table-column>
              <el-table-column prop="name" label="百分比"></el-table-column>
              <el-table-column prop="address" label="成本中心"></el-table-column>
              <el-table-column prop="address" label="GL ACCT"></el-table-column>
              <el-table-column prop="address" label="WBS Code"></el-table-column>
            </el-table>
            <InputArea :inputInfo="meetingInfoFrom.meetingBudget.warningRate"></InputArea>
          </el-card>
          <el-card shadow="never">
            <div class="title_small slider_nav1">
              <span>大交通管控设置(出票）</span>
            </div>
            <div class="title_small">
              <span>机票类设置：舱等设置</span>
            </div>
            <InputArea :inputInfo="meetingInfoFrom.BTControl.maxRate"></InputArea>
            <div class="item_label">温馨提示：商务舱、商务座、高级软卧等需特批舱位请线下联系大交通服务专员40088—400068</div>
          </el-card>
          <el-card shadow="never">
            <div class="title_small slider_nav2">
              <span>大交通控制设置(改期）</span>
            </div>
            <InputArea :inputInfo="meetingInfoFrom.BTControl.changeDate"></InputArea>
            <div class="title_small">
              <span>机票类设置：舱等设置</span>
            </div>
            <InputArea :inputInfo="meetingInfoFrom.BTControl.changeMaxRate"></InputArea>
            <div class="item_label">温馨提示：商务舱、商务座、高级软卧等需特批舱位请线下联系大交通服务专员40088—400068</div>
          </el-card>
          <el-card shadow="never">
            <div class="title_small slider_nav4">
              <span>会议审批设置</span>
              <span>
                <el-button type="text" size="small">查看预录入名单</el-button>
              </span>
            </div>
            <InputArea :inputInfo="meetingInfoFrom.meetApprovalConfig"></InputArea>
            <InputArea
              :inputInfo="meetingInfoFrom.meetApprovalConfig[0].isNeedApproval"
              :isNeedApproval="mACC"
            ></InputArea>
          </el-card>
          <el-card shadow="never">
            <div class="title_small slider_nav3">
              <span>名单收集设置(收集日期）</span>
            </div>
            <el-row :gutter="20">
              <el-col class="item_margin" :span="12">
                <el-row :gutter="20">
                  <el-col :span="8" class="item_label">名单收集结束日期</el-col>
                  <el-col :span="16">
                    <el-date-picker
                      v-model="meetingInfoFrom.listCollectConfig[0].value"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="item_margin" :span="12">
                <el-row :gutter="20">
                  <el-col :span="8" class="item_label">名单收集N天提醒</el-col>
                  <el-col :span="8">
                    <el-input-number
                      v-model="meetingInfoFrom.listCollectConfig[1].value"
                      :min="1"
                      label="描述文字"
                    ></el-input-number>
                  </el-col>
                  <el-col class="alert_icon" :span="1">
                    <el-popover
                      placement="top-start"
                      width="200"
                      trigger="hover"
                      content="距名单收集结束前N天起，会议关键人（会议组织者）将收到提醒"
                    >
                      <i class="el-icon-warning" slot="reference"></i>
                    </el-popover>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
          <el-card shadow="never">
            <div class="title_small">
              <span>名单收集设置(收集状态）</span>
            </div>
            <el-row :gutter="20">
              <el-col class="item_margin" :span="12">
                <el-row :gutter="20">
                  <el-col :span="8" class="item_label">名单收集状态</el-col>
                  <el-col :span="16">
                    <el-radio-group
                      class="radio_frame"
                      v-model="meetingInfoFrom.listCollectConfig[2].value"
                    >
                      <el-radio label="暂停收集">暂停收集</el-radio>
                      <el-radio label="恢复收集">恢复收集</el-radio>
                    </el-radio-group>
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="item_margin" :span="12">
                <el-row :gutter="20">
                  <el-col :span="8" class="item_label">会议密码设置</el-col>
                  <el-col :span="14">
                    <el-input
                      v-model="meetingInfoFrom.listCollectConfig[3].value"
                      placeholder="请输入内容"
                    ></el-input>
                  </el-col>
                  <el-col class="alert_icon" :span="1">
                    <el-popover
                      placement="top-start"
                      width="200"
                      trigger="hover"
                      content="代表需要输入该会议密码才能访问会议名单收集链接"
                    >
                      <i class="el-icon-warning" slot="reference"></i>
                    </el-popover>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
          <!-- <el-card shadow="never">
          <div class="title_small slider_nav4"><span>其他信息收集</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">车费金额</el-col>
                <el-col :span="16"
                  ><el-input v-model="input" placeholder="请输入内容"></el-input
                ></el-col>
              </el-row>
            </el-col>
          </el-row>
          </el-card>-->
        </el-form>
      </div>
    </div>
    <div class="config_save_btn">save</div>
  </div>
</template>

<script>
import { log } from "util";
import BreadCrumb from "../components/breadCurmb";
import InputArea from "../components/inputArea";
export default {
  data() {
    return {
      currentSider: 0, // 当前sliderItem所在位置
      // 页面侧边栏数据
      siderItem: [
        "会议基本信息",
        "大交通控制设置",
        "大交通审批设置",
        "名单收集设置",
        "已收集名单下载",
      ],
      // 模拟表格数据
      tableData: [
        {
          data: "1",
        },
        {
          data: "1",
        },
      ],
      meetingInfoFrom: {
        // 会议基本信息数据
        meetingBaseInfo: [
          {
            name: "会议ID号", // inputLable的中文
            v_model: "meetID",
            value: "", // 输入框的值
            isNecessary: true, // 是否为必填项
            type: "text", // 输入框的类型
          },
          {
            name: "会议地点",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "会议状态",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "会议姓名",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "会议描述",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "text",
          },
          {
            name: "会议开始日期",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "date",
            pickerOptions: {
              disabledDate: this.disabledDateCurrent,
            },
          },
          {
            name: "会议结束日期",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "date",
            pickerOptions: {
              disabledDate: this.disabledDateEnd,
            },
          },
        ],
        // 会议关键人信息
        meetingKeyManInfo: [
          {
            name: "会议组织部门", // inputLable的中文
            v_model: "meetDepartment",
            value: "", // 输入框的值
            isNecessary: true, // 是否为必填项
            type: "text", // 输入框的类型
          },
          {
            name: "行程安排",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "textarea",
            width: 24,
          },
        ],
        meetingBudget: {
          warningRate: [
            {
              name: "大交通报价百分比预警", // inputLable的中文
              v_model: "warningRate",
              value: "", // 输入框的值
              isNecessary: true, // 是否为必填项
              type: "select", // 输入框的类型
              width: 24,
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
              tip:
                "自会议出票起，会议的预算使用百分比数值到达了预警值时，会议关键人（会议组织者）将通过邮件收到预警提醒",
            },
          ],
        },
        // 大交通控制
        BTControl: {
          maxRate: [
            {
              name: "最高折扣率", // inputLable的中文
              v_model: "maxRate",
              value: "", // 输入框的值
              isNecessary: true, // 是否为必填项
              type: "select", // 输入框的类型
              width: 24,
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
              tip:
                "查询机票时，系统将只提供符合最高折扣率以内可改可退含托运行李的航班选项",
            },
          ],
          changeDate: [
            {
              name: "大交通政策启用日期",
              v_model: "meetPlace",
              value: "",
              isNecessary: true,
              type: "date",
            },
            {
              name: "大交通政策结束日期",
              v_model: "meetPlace",
              value: "",
              isNecessary: true,
              type: "date",
            },
          ],
          changeMaxRate: [
            {
              name: "允许更改的最高折扣率", // inputLable的中文
              v_model: "changeMaxRate",
              value: "", // 输入框的值
              isNecessary: true, // 是否为必填项
              type: "select", // 输入框的类型
              width: 24,
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
              tip:
                "改期查询机票时，系统将只提供符合最高折扣率以内的可改可退含托运行李航班选项",
            },
          ],
        },
        // 会议审批设置
        meetApprovalConfig: [
          {
            name: "大交通是否需要审批", // inputLable的中文
            v_model: "meetDepartment",
            value: "", // 输入框的值
            isNecessary: true, // 是否为必填项
            type: "radioButton", // 输入框的类型
            option: ["需要", "不需要"],
            isNeedApproval: [
              {
                name: "预录入名单免批",
                v_model: "meetPlace",
                value: "",
                isNecessary: false,
                type: "radio",
                width: 24,
              },
              {
                name: "后续名单免批",
                v_model: "meetPlace",
                value: "",
                isNecessary: false,
                type: "radio",
                width: 24,
              },
              {
                name: "内部员工免批",
                v_model: "meetPlace",
                value: "",
                isNecessary: false,
                type: "radio",
                width: 24,
              },
            ],
          },
          {
            name: "退改签免批", // inputLable的中文
            v_model: "meetDepartment",
            value: "", // 输入框的值
            isNecessary: true, // 是否为必填项
            type: "radioButton", // 输入框的类型
            option: ["需要", "不需要"],
          },
        ],
        listCollectConfig: [
          {
            name: "名单收集结束日期",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "date",
          },
          {
            name: "名单收集N天提醒",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "date",
          },
          {
            name: "名单收集状态",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "date",
          },
          {
            name: "名单收集N天提醒",
            v_model: "meetPlace",
            value: "",
            isNecessary: true,
            type: "date",
          },
        ],
      },
      rules: {
          text: [
            { required: true, message: '请输入内容', trigger: 'blur' },
          ],
          
        },

      timer: "",
      // 以上
    };
  },
  computed: {
    // 当前大交通是否需要审批
    mACC: function () {
      return this.meetingInfoFrom.meetApprovalConfig[0].value !== "需要";
    },
  },
  watch: {
    // 监听当前大交通审批是否需要审批
    meetingInfoFrom: {
      handler(new1) {
        if (new1.meetApprovalConfig[0].value == "不需要") {
          new1.meetApprovalConfig[0].isNeedApproval.map((item) => {
            item.value = "";
          });
        }
      },
      deep: true,
    },
  },
  methods: {
    // 点击提交按钮验证表单
    checkValid() {
      this.$refs["meetingInfoFromFef"].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 控制当前日期函数
    disabledDateCurrent(time) {
      let curDate = new Date().getTime();
      return time.getTime() < Date.now() - 8.64e7;
    },

    // 控制不超过会议开始日期
    disabledDateEnd(time) {
      const starttime = new Date(
        this.meetingInfoFrom.meetingBaseInfo[5].value
      ).getTime();
      return time.getTime() < starttime;
    },
    handleScroll() {
      /**
       * @param { Number } scrollTop //当前页面上卷高度
       */
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const left_slider = document.querySelector(".left_slider");
      const backup = document.querySelector(".backup");
      const slider_nav0 = document.querySelector(".slider_nav0").offsetTop;
      const slider_nav1 = document.querySelector(".slider_nav1").offsetTop;
      const slider_nav2 = document.querySelector(".slider_nav2").offsetTop;
      clearTimeout(this.timer);
      if (scrollTop > 80) {
        left_slider.classList.add("fix_sider");
        backup.classList.add("backup_show");
        this.timer = setTimeout(() => {
          if (scrollTop >= slider_nav1) {
            this.currentSider = 1;
            if (scrollTop >= slider_nav2) {
              this.currentSider = 2;
            }
          }
        }, 100);
      } else {
        left_slider.classList.remove("fix_sider");
        backup.classList.remove("backup_show");
        this.currentSider = 0;
      }
    },
    handelSlider(num) {
      /**
       * @param { Number } num //当前侧边栏的index值
       * @return void
       */
      this.currentSider = num;
      const number = document.querySelector(`.slider_nav${num}`).offsetTop;
      this.Funback(number, 200);
    },
    Funback(number, time) {
      if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number;
        return number;
      }
      const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
      let spacingInex = time / spacingTime; // 计算循环的次数
      let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
      let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
      let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
          spacingInex--;
          this.Funback((nowTop += everTop));
        } else {
          clearInterval(scrollTimer); // 清除计时器
        }
      }, spacingTime);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  components: {
    BreadCrumb,
    InputArea,
  },
};
</script>

<style lang='less'>
.config_save_btn {
  position: fixed;
  bottom: 50px;
  right: 40px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  font-size: 20px;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
</style>
