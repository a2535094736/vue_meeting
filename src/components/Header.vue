<template>
  <div class="container_header">
      <div class="header">
    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#29282E"
      text-color="#2D82F0"
      active-text-color="#2D82F0"
    >
      <el-menu-item index="1"><router-link to='/'>会议信息</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1"><router-link to='/newhcp'>新建HCP</router-link></el-menu-item>
        <el-menu-item index="2-2">已提交</el-menu-item>
        <el-menu-item index="2-3">我的草稿</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">审批单</el-menu-item>
    </el-menu>
  </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.container_header{
    background-color:#29282E;
}
    .header{
        width: 1280px;
        margin: 0 auto;
    }
</style>