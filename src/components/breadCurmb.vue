<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>
      <i class="el-icon-s-order breadcrumbcolor"></i>
      {{ this.currentInfo.title }}
    </el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:this.currentItem.path}">{{ this.currentItem.title }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="this.currentChildren.title">{{this.currentChildren.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BreadCrumb",
  data() {
    return {
      navList: [
        {
          id: "1",
          title: "会议信息",
          navTo: [
            { id: "1", title: "会议信息配置", path: "/meetinginfoconfigure" },
            {
              id: "2",
              title: "名单收集模版",
              path: "/meetingcollecthome",
              childern: [
                {
                  id: "3",
                  title: "自定义名单收集模版",
                  path: "/meetingcollectmood",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          title: "名单收集",
          navTo: [
            { id: "1", title: "新建HCP", path: "/newhcp" },
            { id: "2", title: "已提交", path: "/submitlist" },
            { id: "3", title: "草稿箱", path: "/sketch" },
          ],
        },
        {
          id: "3",
          title: "审批单",
          navTo: [
            { id: "1", title: "审批列表", path: "/approvallist" },
            {
              id: "2",
              title: "审批单明细",
              path: "/approvaldetail",
              childern: [
                { id: "4", title: "审批单详情", path: "/approvelindividual" },
              ],
            },
            { id: "3", title: "已结束会议", path: "/approvalfreelist" },
          ],
        },
      ],
      currentInfo: {},
      currentItem: {},
      currentChildren: {},
    };
  },
  created() {
    const currentRoute = this.$route.path;
    this.navList.map((item) => {
      item.navTo.map((item1) => {
        if (item1.path == currentRoute) {
          this.currentInfo = item;
          this.currentItem = item1;
        } else {
          item1.childern?item1.childern.map((item2) => {
              if (item2.path == currentRoute) {
                this.currentInfo = item;
                this.currentItem = item1;
                this.currentChildren = item2;
              }
            }):null;
          
        }
      });
    });
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