<template>
  <el-row :gutter="20">
    <el-col
      v-for="(item,index) in inputInfo"
      :key="item.name"
      class="item_margin"
      :span="item.width == 24 ? 24 : 12"
    >
      <el-row v-if="item.width == 24" :gutter="20">
        <el-col :span="4" class="item_label">
          {{ item.name
          }}
          <span v-if="item.isNecessary" class="necessary_signal">*</span>
        </el-col>
        <el-col v-if="item.type == 'text'" :span="8">
          <el-input v-model="item.value" :placeholder="'请输入' + item.name"></el-input>
        </el-col>
        <el-col v-if="item.type == 'textarea'" :span="20">
          <el-input type="textarea" :rows="3" :placeholder="'请输入' + item.name" v-model="item.value"></el-input>
        </el-col>
        <el-col v-if="item.type == 'radio'" :span="20">
          <el-radio-group :disabled="isNeedApproval" class="radio_frame" v-model="item.value">
            <el-radio
              v-for="item1 in item.option || ['是', '否']"
              :key="item1"
              :label="item1"
            >{{ item1 }}</el-radio>
          </el-radio-group>
        </el-col>
        <el-col v-if="item.type == 'select'" :span="8">
          <el-select v-model="item.input" :placeholder="'请选择' + item.name">
            <el-option v-for="item1 in item.option" :key="item1" :label="item1" :value="item1"></el-option>
          </el-select>
        </el-col>
        <el-col v-if="item.tip" class="alert_icon" :span="1">
          <el-popover placement="top-start" width="200" trigger="hover" :content="item.tip">
            <i class="el-icon-warning" slot="reference"></i>
          </el-popover>
        </el-col>
      </el-row>
      <el-row v-else>
        <!-- <el-col :span="1" class="item_label"
          ><span v-if="item.isNecessary" class="necessary_signal"
            >*</span
          ></el-col
        >-->
        <!-- <el-col v-if="item.type == 'text'" :span="16"
          ><el-input
            v-model="item.value"
            :placeholder="'请输入' + item.name"
          ></el-input
        ></el-col>-->
        <el-col v-if="item.type == 'text'" :span="24">
          <el-form-item
            :label="item.name"
            :prop="item.value"
            :rules="{
      required: true, message: '请输入', trigger: 'blur'
    }"
          >
            <el-input v-model="item.value" :placeholder="'请输入' + item.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col v-if="item.type == 'date'" :span="24">
          <el-form-item prop="text" :label="item.name">
            <el-date-picker
              v-model="item.value"
              type="date"
              :placeholder="'选择' + item.name"
              value-format="yyyy-MM-dd"
              :picker-options="item.pickerOptions || {}"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col v-if="item.type == 'select'" :span="24">
          <el-form-item :label="item.name" :required="item.isNecessary">
            <el-select v-model="item.input" :placeholder="'请选择' + item.name">
              <el-option v-for="item1 in item.option" :key="item1" :label="item1" :value="item1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col v-if="item.type == 'radio'" :span="24">
          <el-form-item :label="item.name" :required="item.isNecessary">
            <el-radio-group :disabled="isNeedApproval" class="radio_frame" v-model="item.value">
              <el-radio
                v-for="item1 in item.option || ['是', '否']"
                :key="item1"
                :label="item1"
              >{{ item1 }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-checkbox-group v-if="item.hasCheck && item.value == '是'" v-model="item.checkbox">
            <el-checkbox
              v-for="item1 in item.checkList"
              :key="item1"
              class="inputarea_check"
              :label="item1"
            ></el-checkbox>
          </el-checkbox-group>
        </el-col>
        <el-col v-if="item.type == 'radioButton'" :span="24">
          <el-form-item :label="item.name" :required="item.isNecessary">
            <el-radio-group v-model="item.value">
              <el-radio-button v-for="item1 in item.option" :key="item1" :label="item1"></el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
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
    isNeedApproval: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>