<template>
  <div class="container_header">
    <div class="header">
      <el-menu
        default-active="1"
        mode="horizontal"
        @select="handleSelect"
        background-color="#29282E"
        text-color="#2D82F0"
        active-text-color="#2D82F0"
      >
        <el-submenu v-for="item in navList" :key="item.id" :index="item.id">
          <template slot="title">{{ item.title }}</template>
          <el-menu-item
            v-for="item1 in item.navTo"
            :key="item.id + item1.id"
            :index="item.id + item1.id"
          >
            <router-link :to="item1.path">{{ item1.title }}</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      const nowCurrent = keyPath[1].split("");
      this.changeCurrentNav(nowCurrent);
    },
    ...mapMutations(["changeCurrentNav"]),
  },
  computed: {
    ...mapState(["navList", "currentNav"]),
  },
};
</script>
<style lang="less">
.container_header {
  background-color: #29282e;
  width: 100%;
  position: fixed;
  z-index: 100;
}
.header {
  width: 1280px;
  margin: 0 auto;
}
</style>
