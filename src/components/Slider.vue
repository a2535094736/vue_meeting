<template>
  <div>
    <div class="siderbar">
      <div class="sider_item isActive">
        {{siderItem}}
      </div>
      <!-- <div
        v-for="(item, index) in siderItem"
        :key="index"
        class="sider_item"
        :class="index == currentSider ? 'isActive' : ''"
        @click="handelSlider(index)"
      >
        {{ item }}
      </div> -->
    </div>
    <div @click="FunbackTop" class="backup">
      <i class="el-icon-caret-top"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    siderItem: {
      type: String,
      defalut: '',
    },
  },
  data() {
    return {
      currentSider: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentPath=this.$route.path;
      if(currentPath == '/meetinginfoconfigure'){
          return;
      }
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const nav = document.querySelector(".siderbar");
      const backup = document.querySelector(".backup");
      if (scrollTop > 80) {
        nav.classList.add("fix_sider");
        backup.classList.add("backup_show");
      } else {
        nav.classList.remove("fix_sider");
        backup.classList.remove("backup_show");
      }
    },
    handelSlider(num) {
      this.currentSider = num;
    },
    FunbackTop() {
      //返回顶部
      var scrollToptimer = setInterval(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var speed = top / 6;
        if (document.body.scrollTop != 0) {
          document.body.scrollTop -= speed;
        } else {
          document.documentElement.scrollTop -= speed;
        }
        if (top == 0) {
          clearInterval(scrollToptimer);
        }
      }, 20);
    },
  },
};
</script>

<style>
</style>