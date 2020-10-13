<template>
  <el-row :gutter="20">
    <el-col
      v-for="item in hcpInfo"
      :key="item.znTitle"
      class="item_margin"
      :span="item.isnecessary == 'necessary' ? 24 : 12"
    >
      <el-row v-if="item.isnecessary" :gutter="20">
        <el-col :span="4" class="item_label"
          >{{item.znTitle}}<span v-if="isNecessarySignal" class="necessary_signal">*</span></el-col
        >
        <el-col :span="8"
          ><el-input v-model="item.input" :placeholder="'请输入' + item.znTitle"></el-input
        ></el-col>
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
      <el-row v-else :gutter="20">
        <el-col :span="8" class="item_label"
          >{{ "HCP" + item.znTitle
          }}<span v-if="isNecessarySignal" class="necessary_signal">*</span></el-col
        >
        <el-col v-if="item.type=='input'" :span="16"
          ><el-input 
            v-model="item.input"
            :placeholder="'请输入' + item.znTitle"
          ></el-input
        ></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    hcpInfo: {
      type: Array,
      default: [],
    },
    isNecessarySignal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>