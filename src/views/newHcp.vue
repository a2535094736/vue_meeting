<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }"
        ><i class="el-icon-s-order breadcrumbcolor"></i>首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>新建HCP</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="page">
      <div class="siderbar">
        <div class="sider_item">
          新建HCP
        </div>
      </div>
      <div class="mainer">
        <el-row class="new_hcp_title"
          >会议名称：广州肿瘤会议 会议编号：EPG</el-row
        >
        <el-card shadow="never">
          <div class="new_hcp_title_small"><span>HCP 基本信息</span><span>查看常用联系人</span></div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .page {
    width: 100%;
    display: flex;
    height: 100%;
    .siderbar {
      width: 280px;
      margin-right: 20px;
      .sider_item {
        height: 60px;
        background-color: #2d8cf0;
        text-align: center;
        line-height: 60px;
        color: #fff;
      }
    }
    .mainer {
      width: 1200px;
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;
      .new_hcp_title {
        padding-left: 20px;
        font-size: 18px;
        font-weight: 500;
        color: #2d8cf0;
        margin-bottom: 20px;
      }
      .new_hcp_title_small {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 500;
        color: #2d8cf0;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
