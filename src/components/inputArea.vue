<template>
  <el-row :gutter="20">
    <el-col
      v-for="item in inputInfo"
      :key="item.name"
      class="item_margin"
      :span="item.width == 24 ? 24 : 12"
    >
      <el-row v-if="item.width == 24" :gutter="20">
        <el-col :span="4" class="item_label"
          >{{ item.name
          }}<span v-if="item.isNecessary" class="necessary_signal"
            >*</span
          ></el-col
        >
        <el-col v-if="item.type == 'text'" :span="8"
          ><el-input
            v-model="item.value"
            :placeholder="'请输入' + item.name"
          ></el-input
        ></el-col>
        <el-col v-if="item.type == 'textarea'" :span="20"
          ><el-input
            type="textarea"
            :rows="3"
            :placeholder="'请输入' + item.name"
            v-model="item.value"
          >
          </el-input
        ></el-col>
        <el-col  v-if="item.type == 'radio'" :span="20"
          ><el-radio-group :disabled='isNeedApproval' class="radio_frame" v-model="item.value">
            <el-radio 
              v-for="(item1) in item.option ||['是','否']"
              :key="item1"
              :label="item1"
              >{{ item1}}</el-radio
            >
          </el-radio-group></el-col
        >
        <el-col v-if="item.type == 'select'" :span="8"
          ><el-select v-model="item.input" :placeholder="'请选择' + item.name">
            <el-option
              v-for="item1 in item.option"
              :key="item1"
              :label="item1"
              :value="item1"
            >
            </el-option> </el-select
        ></el-col>
        <el-col v-if="item.type !== 'textarea'" class="alert_icon" :span="1">
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
            :content="item.tip"
          >
            <i class="el-icon-warning" slot="reference"></i>
          </el-popover>
        </el-col>
      </el-row>
      <el-row v-else :gutter="20">
        <el-col :span="8" class="item_label"
          >{{ item.name
          }}<span v-if="item.isNecessary" class="necessary_signal"
            >*</span
          ></el-col
        >
        <el-col v-if="item.type == 'text'" :span="16"
          ><el-input
            v-model="item.value"
            :placeholder="'请输入' + item.name"
          ></el-input
        ></el-col>
        <el-col v-if="item.type == 'date'" :span="16"
          ><el-date-picker
            v-model="item.value"
            type="date"
            :placeholder="'选择' + item.name"
          >
          </el-date-picker
        ></el-col>
        <el-col v-if="item.type == 'select'" :span="16"
          ><el-select v-model="item.input" placeholder="请选择">
            <el-option
              v-for="item1 in item.options"
              :key="item1"
              :label="item1"
              :value="item1"
            >
            </el-option> </el-select
        ></el-col>
        <el-col  v-if="item.type == 'radio'" :span="16"
          ><el-radio-group :disabled='isNeedApproval' class="radio_frame" v-model="item.value">
            <el-radio 
              v-for="(item1) in item.option ||['是','否']"
              :key="item1"
              :label="item1"
              >{{ item1}}</el-radio
            >
          </el-radio-group></el-col
        >
        <el-col v-if="item.type == 'radioButton'" :span="16">
          <el-radio-group v-model="item.value">
            <el-radio-button
              v-for="item1 in item.option"
              :key="item1"
              :label="item1"
            ></el-radio-button></el-radio-group
        ></el-col>
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
    isNeedApproval:{
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style>
</style>