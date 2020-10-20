<template>
  <el-card shadow="never">
    <div class="title_small">
      <span>快捷搜索</span>
    </div>
    <el-row :gutter="20">
      <el-col v-for="(i, j) in queryitem" :key="j" :span="5">
        <el-input v-if="i.type =='input'" v-model="i.input" :placeholder="i.title"></el-input>
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
  /**
   * @params {Array} queryitem //传递当前快速搜索所需参数
   */
  name: "quicksearch",
  props: {
    queryitem: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      input: {},
    };
  },
};
</script>

<style>
</style>