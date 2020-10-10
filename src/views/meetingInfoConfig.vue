<template>
  <div class="container">
    <BreadCrumb></BreadCrumb>
    <div class="page">
      <div class="siderbar">
        <div class="sider_item isActive">会议基本信息</div>
        <div class="sider_item">大交通控制设置</div>
        <div class="sider_item">大交通审批设置</div>
        <div class="sider_item">名单收集设置</div>
        <div class="sider_item">其他信息收集</div>
        <div class="sider_item">已收集名单下载</div>
      </div>
      <div class="mainer">
        <el-row class="title">会议信息详情</el-row>
        <el-card shadow="never">
          <div class="title_small"><span>会议基本信息</span></div>
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
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              >
                <i class="el-icon-warning" slot="reference"></i>
              </el-popover>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
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
      tableData: "",
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
  components: {
    BreadCrumb,
  },
};
</script>

<style></style>
