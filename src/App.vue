<template>
  <div id="app">
    <Header></Header>
    <div class="main">
        <router-view></router-view>
    </div>
  </div>
      
</template>
<script>
import Header from "./components/Header";
export default {
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>
<style lang="less">
#app{
  background-color: #eeeeee;
  .main{
    width: 1500px;
    margin: 0 auto;
  }
}
</style>
