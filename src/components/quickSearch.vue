<template>
  <el-card shadow="never">
    <div class="title_small">
      <span>快捷搜索</span>
    </div>
    <el-row :gutter="20">
      <el-col v-for="(i, j) in queryitem" :key="j" :span="5">
        <el-input
          v-if="i.type == 'input'"
          v-model="i.input"
          :placeholder="i.title"
        ></el-input>
        <el-date-picker
          v-if="i.type == 'date'"
          v-model="i.input"
          type="date"
          :placeholder="i.title"
        >
        </el-date-picker>
        <el-select
          v-if="i.type == 'select'"
          v-model="i.input"
          :placeholder="i.title"
        >
          <el-option
            v-for="i1 in i.select"
            :key="i1.value"
            :label="i1.label"
            :value="i1.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4"
        ><el-button type="primary" icon="el-icon-search" size="default"
          >搜索</el-button
        >
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "quicksearch",
  props: {
    queryitem: {
      /**
       * @params {Array} queryitem //传递当前快速搜索所需参数
       * @params queryitem:[
       * {
       * @params {Number} title //placeholder里需要传的值
       * @params input //当前输入框的结果值
       * @params {String} type //当前输入框的类型
       * @params {Array} select //当输入类型为select时 需要传入的选项值
       * }
       * ]
       */
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
</style>