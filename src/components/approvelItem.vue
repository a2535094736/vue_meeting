<template>
  <div>
    <el-card
      v-for="(item, index) in approvelDataList"
      :key="item + index"
      class="approvelItem"
      shadow="never"
    >
      <div class="includeRate">
        <p>会议名称：{{ item.name }}</p>
        <div v-if="hasdetail" class="ratePercent">
          使用额度：
          <el-progress
            :percentage="Math.floor((item.cost / item.gross) * 100)"
            v-if="(item.cost / item.gross) * 100"
            :color="customColors"
          ></el-progress>
        </div>
      </div>
      <p>会议开始日期：{{ item.startTime }}</p>
      <p>会议结束日期: {{ item.endTime }}</p>
      <p>会议编号：{{ item.meetNum }}</p>
      <el-button
        type="primary"
        size="default"
        class="approvelGoDetail"
        @click="handleToApprovelDetail(item)"
      >详情</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    approvelDataList: {
      type: Array,
      default: [],
    },
    hasdetail: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      customColors: [
        { color: "#67C23A", percentage: 60 },
        { color: "#F56C6C", percentage: 80 },
      ],
    };
  },
  methods: {
    handleToApprovelDetail(trip) {
      this.$router.push({path:'/approvaldetail',query:{trip:JSON.stringify(trip)}})
    },
  },
};
</script>

<style>
</style>