<template>
  <el-row :gutter="20">
    <el-col class="marginb20"
      v-for="(item, index) in inputInfo"
      :key="item.name"
      :span="item.width == 24 ? 24 : 12"
    >
      <el-form-item
        :label-width="item.width==24?'17%':'34%'"
        :label="item.name"
        :prop="currentTime+'.'+index + '.value'"
        :rules="{
          required: item.isNecessary,
          message: item.name + '不能为空',
          trigger: ['blur','change'],
        }"
      >
        <el-row v-if="item.type == 'text'">
          <el-col :span="item.tip?12:24">
            <el-input v-model="item.value" :placeholder="'请输入' + item.name"></el-input>
          </el-col>
          <el-col v-if="item.tip" class="alert_icon" :span="2">
            <el-popover placement="top-start" width="200" trigger="hover" :content="item.tip">
              <i class="el-icon-warning" slot="reference"></i>
            </el-popover>
          </el-col>
        </el-row>
        <el-row v-if="item.type == 'textarea'">
          <el-input type="textarea" :rows="3" :placeholder="'请输入' + item.name" v-model="item.value"></el-input>
        </el-row>
        <el-row v-if="item.type == 'radio'">
          <el-radio-group :disabled="isNeedApproval" class="radio_frame" v-model="item.value">
            <el-radio
              v-for="item1 in item.option || ['是', '否']"
              :key="item1"
              :label="item1"
            >{{ item1 }}</el-radio>
          </el-radio-group>
          <el-checkbox-group v-if="item.hasCheck && item.value == '是'" v-model="item.checkbox">
            <el-checkbox
              v-for="item1 in item.checkList"
              :key="item1"
              class="inputarea_check"
              :label="item1"
            ></el-checkbox>
          </el-checkbox-group>
        </el-row>
        <el-row v-if="item.type == 'select'">
          <el-col :span="item.tip?12:24">
            <el-select v-model="item.value" :placeholder="'请选择' + item.name">
              <el-option v-for="item1 in item.option" :key="item1" :label="item1" :value="item1"></el-option>
            </el-select>
          </el-col>
          <el-col v-if="item.tip" class="alert_icon" :span="2">
            <el-popover placement="top-start" width="200" trigger="hover" :content="item.tip">
              <i class="el-icon-warning" slot="reference"></i>
            </el-popover>
          </el-col>
        </el-row>
        <el-row v-if="item.type == 'date'">
          <el-date-picker
            v-model="item.value"
            type="date"
            :placeholder="'选择' + item.name"
            value-format="yyyy-MM-dd"
            :picker-options="item.pickerOptions || {}"
          ></el-date-picker>
        </el-row>
        <el-row v-if="item.type == 'radioButton'">
          <el-radio-group v-model="item.value">
            <el-radio-button v-for="item1 in item.option" :key="item1" :label="item1"></el-radio-button>
          </el-radio-group>
        </el-row>
        <el-row v-if="item.type == 'textNumber'">
         
          <el-col :span="item.tip?12:24">
             <el-input-number v-model="item.value" :min="1" :label="item.name"></el-input-number>
          </el-col>
          <el-col v-if="item.tip" class="alert_icon" :span="2">
            <el-popover placement="top-start" width="200" trigger="hover" :content="item.tip">
              <i class="el-icon-warning" slot="reference"></i>
            </el-popover>
          </el-col>
        </el-row>
      </el-form-item>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    inputInfo: {
      default: [],
    },
    isNeedApproval:{
      default:false
    },
    currentTime:{
      default:''
    }
  },
  computed: {
  },
};
</script>

<style>
</style>