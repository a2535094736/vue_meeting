<template>
  <el-row :gutter="20">
    <el-col
      v-for="item in inputInfo"
      :key="item.znTitle"
      class="item_margin"
      :span="item.isnecessary == 'necessary' ? 24 : 12"
    >
      <el-row v-if="item.isnecessary" :gutter="20">
        <el-col :span="4" class="item_label"
          >{{ item.znTitle
          }}<span v-if="isNecessarySignal" class="necessary_signal"
            >*</span
          ></el-col
        >
        <el-col :span="8"
          ><el-input
            v-model="item.input"
            :placeholder="'请输入' + item.znTitle"
          ></el-input
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
          }}<span v-if="isNecessarySignal" class="necessary_signal"
            >*</span
          ></el-col
        >
        <el-col v-if="item.type == 'input'" :span="16"
          ><el-input
            v-model="item.input"
            :placeholder="'请输入' + item.znTitle"
          ></el-input
        ></el-col>
        <el-col v-if="item.type == 'select'" :span="16"
          ><el-select v-model="item.input" placeholder="请选择">
            <el-option
              v-for="item1 in item.options"
              :key="item1.value"
              :label="item1.label"
              :value="item1.value"
            >
            </el-option> </el-select
        ></el-col>
        <el-col v-if="item.type == 'radio'" :span="16"
          ><el-radio-group class="radio_frame" v-model="item.input">
            <el-radio
              v-for="(item1, index1) in item.radio"
              :key="item1 + index1"
              :label="item1.value"
              >{{item1.value}}</el-radio
            >
          </el-radio-group></el-col
        >
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    inputInfo: {
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