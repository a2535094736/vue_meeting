<template>
  <el-card shadow="never">
    <div class="title_small">
      <span>快捷搜索</span>
    </div>
    <el-row :gutter="20">
      <el-col v-for="(i, j) in queryitem" :key="j" :span="5"
        ><el-input v-model="input[i]" :placeholder="'输入' + i"></el-input
      ></el-col>
      <el-col :span="4"><el-button type="primary" icon="el-icon-search" size="default">搜索</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
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