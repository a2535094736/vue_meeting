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
            >
              {{ item }}
            </div>
          </div>
          <div @click="FunbackTop" class="backup">
            <i class="el-icon-caret-top"></i>
          </div>
          <div class="submit_all_btn">
            <el-button type="primary" size="default">点击提交</el-button>
          </div>
        </div>
      </div>
      <div class="mainer">
        <el-row class="title">会议信息详情</el-row>
        <el-card shadow="never">
          <div class="title_small slider_nav1"><span>会议基本信息</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">会议ID号</el-col>
                <el-col :span="16"
                  ><el-input v-model="input" placeholder="请输入内容"></el-input
                ></el-col>
              </el-row>
            </el-col>
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">会议状态</el-col>
                <el-col :span="16"
                  ><el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option> </el-select
                ></el-col>
              </el-row>
            </el-col>
          </el-row>
          <div class="title_small"><span>会议关键人</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">会议组织部门</el-col>
                <el-col :span="16"
                  ><el-input v-model="input" placeholder="请输入内容"></el-input
                ></el-col>
              </el-row>
            </el-col>
            <el-col class="item_margin" :span="24">
              <el-row :gutter="20">
                <el-col :span="4" class="item_label">行程安排</el-col>
                <el-col :span="20"
                  ><el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入内容"
                    v-model="textarea"
                  >
                  </el-input
                ></el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" width="80">
              <template slot="header">
                <p>序号</p>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="会议关键人角色">
            </el-table-column>
            <el-table-column prop="name" label="会议关键人姓名">
            </el-table-column>
            <el-table-column prop="address" label="会议关键人手机号">
            </el-table-column>
            <el-table-column prop="address" label="会议关键人邮箱">
            </el-table-column>
            <el-table-column prop="address" label="会议关键人座机">
            </el-table-column>
          </el-table>
          <div class="title_small"><span>会议报价</span></div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" width="80">
              <template slot="header">
                <p>序号</p>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="报价金额"> </el-table-column>
            <el-table-column prop="name" label="百分比"> </el-table-column>
            <el-table-column prop="address" label="成本中心"> </el-table-column>
            <el-table-column prop="address" label="GL ACCT"> </el-table-column>
            <el-table-column prop="address" label="WBS Code"> </el-table-column>
          </el-table>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">大交通报价百分比</el-col>
                <el-col :span="16"
                  ><el-input
                    v-model="input"
                    placeholder="请输入百分比"
                  ></el-input
                ></el-col>
              </el-row>
            </el-col>
            <el-col class="alert_icon" :span="1">
              <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                content="输入大交通占总预算的最高比例"
              >
                <i class="el-icon-warning" slot="reference"></i>
              </el-popover>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="never">
          <div class="title_small slider_nav2"><span>大交通管控设置(出票）</span></div>
          <div class="title_small"><span>机票类设置：舱等设置</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="24">
              <el-row :gutter="20">
                <el-col :span="4" class="item_label">最高折扣率</el-col>
                <el-col :span="8"
                  ><el-input
                    v-model="input"
                    placeholder="请输入最高折扣率"
                  ></el-input
                ></el-col>
                <el-col class="alert_icon" :span="1">
                  <el-popover
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    content="机票最高折扣率"
                  >
                    <i class="el-icon-warning" slot="reference"></i>
                  </el-popover>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <div class="title_small"><span>机票类设置：舱等设置</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="24">
              <el-row :gutter="20">
                <el-col :span="4" class="item_label">最高折扣率</el-col>
                <el-col :span="8"
                  ><el-input
                    v-model="input"
                    placeholder="请输入最高折扣率"
                  ></el-input
                ></el-col>
                <el-col class="alert_icon" :span="1">
                  <el-popover
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    content="机票最高折扣率"
                  >
                    <i class="el-icon-warning" slot="reference"></i>
                  </el-popover>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <div class="item_label">
            温馨提示：商务舱、商务座、高级软卧等需特批舱位请线下联系大交通服务专员40088—400068
          </div>
        </el-card>
        <el-card shadow="never">
          <div class="title_small slider_nav3"><span>大交通控制设置(改期）</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">大交通政策启用日期</el-col>
                <el-col :span="16"
                  ><el-date-picker
                    v-model="travelStartDate"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker
                ></el-col>
              </el-row>
            </el-col>
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">大交通政策结束日期</el-col>
                <el-col :span="16"
                  ><el-date-picker
                    v-model="travelStartDate"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker
                ></el-col>
              </el-row>
            </el-col>
          </el-row>
          <div class="title_small"><span>机票类设置：舱等设置</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="24">
              <el-row :gutter="20">
                <el-col :span="4" class="item_label"
                  >允许更改的最高折扣率</el-col
                >
                <el-col :span="8"
                  ><el-input
                    v-model="input"
                    placeholder="请输入最高折扣率"
                  ></el-input
                ></el-col>
                <el-col class="alert_icon" :span="1">
                  <el-popover
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    content="机票最高折扣率"
                  >
                    <i class="el-icon-warning" slot="reference"></i>
                  </el-popover>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <div class="item_label">
            温馨提示：商务舱、商务座、高级软卧等需特批舱位请线下联系大交通服务专员40088—400068
          </div>
        </el-card>
        <el-card shadow="never">
          <div class="title_small slider_nav4">
            <span>会议审批设置</span
            ><span
              ><el-button type="text" size="small"
                >查看预录入名单</el-button
              ></span
            >
          </div>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">大交通是否需要审批</el-col>
                <el-col :span="16"
                  ><el-radio-group v-model="travelNeedApprovel">
                    <el-radio-button label="需要"></el-radio-button>
                    <el-radio-button
                      label="不需要"
                    ></el-radio-button> </el-radio-group
                ></el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">退改签免批</el-col>
                <el-col :span="16"
                  ><el-radio-group v-model="reissueApprovel">
                    <el-radio-button label="需要"></el-radio-button>
                    <el-radio-button
                      label="不需要"
                    ></el-radio-button> </el-radio-group
                ></el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row v-if="travelNeedApprovel == '需要'">
            <el-col :span="24">
              <el-row :gutter="20">
                <el-col :span="4" class="item_label">预录入名单免批</el-col>
                <el-col :span="8">
                  <el-radio-group class="radio_frame" v-model="listApprovel">
                    <el-radio :label="3">是</el-radio>
                    <el-radio :label="6">否</el-radio>
                  </el-radio-group>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row :gutter="20">
                <el-col :span="4" class="item_label">后续名单免批</el-col>
                <el-col :span="8">
                  <el-radio-group class="radio_frame" v-model="listApprovel">
                    <el-radio :label="3">是</el-radio>
                    <el-radio :label="6">否</el-radio>
                  </el-radio-group>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row :gutter="20">
                <el-col :span="4" class="item_label">内部员工免批</el-col>
                <el-col :span="8">
                  <el-radio-group class="radio_frame" v-model="listApprovel">
                    <el-radio :label="3">是</el-radio>
                    <el-radio :label="6">否</el-radio>
                  </el-radio-group>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="never">
          <div class="title_small"><span>名单收集设置(收集日期）</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">名单收集结束日期</el-col>
                <el-col :span="16"
                  ><el-date-picker
                    v-model="travelStartDate"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker
                ></el-col>
              </el-row>
            </el-col>
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">名单收集N天提醒</el-col>
                <el-col :span="8"
                  ><el-input v-model="input" placeholder="请输入内容"></el-input
                ></el-col>
                <el-col class="alert_icon" :span="1">
                  <el-popover
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    content="机票最高折扣率"
                  >
                    <i class="el-icon-warning" slot="reference"></i>
                  </el-popover>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="never">
          <div class="title_small"><span>名单收集设置(收集状态）</span></div>
          <el-row :gutter="20">
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">单收集状态</el-col>
                <el-col :span="16"
                  ><el-radio-group class="radio_frame" v-model="listApprovel">
                    <el-radio :label="3">暂停收集</el-radio>
                    <el-radio :label="6">恢复收集</el-radio>
                  </el-radio-group></el-col
                >
              </el-row>
            </el-col>
            <el-col class="item_margin" :span="12">
              <el-row :gutter="20">
                <el-col :span="8" class="item_label">名单收集N天提醒</el-col>
                <el-col :span="8"
                  ><el-input v-model="input" placeholder="请输入内容"></el-input
                ></el-col>
                <el-col class="alert_icon" :span="1">
                  <el-popover
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    content="机票最高折扣率"
                  >
                    <i class="el-icon-warning" slot="reference"></i>
                  </el-popover>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="never">
          <div class="title_small"><span>其他信息收集</span></div>
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
        </el-card>
      </div>
    </div>
    <div class="config_save_btn">save</div>
  </div>
</template>

<script>
import BreadCrumb from "../components/breadCurmb";
export default {
  data() {
    return {
      input: "",
      value: "",
      textarea: "",
      travelStartDate: "",
      travelNeedApprovel: "需要",
      reissueApprovel: "需要",
      listApprovel: "",
      currentSider: 0,
      siderItem: [
        "会议基本信息",
        "大交通控制设置",
        "大交通审批设置",
        "名单收集设置",
        "其他信息收集",
        "已收集名单下载",
      ],
      tableData: [
        {
          data: "1",
        },
        {
          data: "1",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "正常",
        },
        {
          value: "选项2",
          label: "结束",
        },
        {
          value: "选项3",
          label: "进行中",
        },
      ],
    };
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const left_slider = document.querySelector(".left_slider");
      const backup = document.querySelector(".backup");
      const slider_nav2 = document.querySelector(".slider_nav2").offsetTop;
      const slider_nav3 = document.querySelector(".slider_nav3").offsetTop;
      if (scrollTop > 80) {
        left_slider.classList.add("fix_sider");
        backup.classList.add("backup_show");
        if (scrollTop > slider_nav2) {
          this.currentSider = 1;
          if ( scrollTop > slider_nav3) {
            this.currentSider = 2;
          }
        }
      } else {
        left_slider.classList.remove("fix_sider");
        backup.classList.remove("backup_show");
        this.currentSider = 0;
      }
    },
    handelSlider(num) {
      this.currentSider = num;
    },
    FunbackTop() {
      //返回顶部
      var scrollToptimer = setInterval(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var speed = top / 6;
        if (document.body.scrollTop != 0) {
          document.body.scrollTop -= speed;
        } else {
          document.documentElement.scrollTop -= speed;
        }
        if (top == 0) {
          clearInterval(scrollToptimer);
        }
      }, 20);
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
