<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>
        <i class="el-icon-s-order breadcrumbcolor"></i>
        {{ this.currentInfo.title }}
        </el-breadcrumb-item>
    <el-breadcrumb-item>{{ this.currentItem.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BreadCrumb",
  data() {
    return {
      currentBread: [],
      currentInfo: {},
      currentItem: {},
    };
  },
  created() {
    const currentRoute = this.$route.path;
    this.navList.map((item) => {
      item.navTo.map((item1) => {
        if (item1.path == currentRoute) {
          this.currentInfo = item;
          this.currentItem = item1;
        }
      });
    });
  },
  computed: {
    ...mapState(["currentNav", "navList"]),
  },
};
</script>

<style>
.el-breadcrumb {
  margin: 20px 0;
  font-size: 18px;
}
.breadcrumbcolor {
  color: #2d8cf0;
  margin-right: 5px;
}
</style>