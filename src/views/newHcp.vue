<template>
  <div class="container">
    <BreadCrumb></BreadCrumb>
    <div class="page">
      <div class="siderbar">
        <div class="sider_item isActive">
          新建HCP
        </div>
      </div>
      <div class="mainer">
        <el-row class="new_hcp_title"
          >会议名称：广州肿瘤会议 会议编号：EPG</el-row
        >
        <el-card shadow="never">
          <div class="new_hcp_title_small"><span>HCP 基本信息</span><span><el-button type='text' size='small'>查看常用联系人</el-button></span></div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '../components/breadCurmb'
export default {
  components:{
    BreadCrumb,
  }
};
</script>

<style lang="less" scoped>

</style>
