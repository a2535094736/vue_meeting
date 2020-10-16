# vue_meeting
项目用到的技术主要是 vue vueX element-ui vue-router axios less
## 分为会议基本信息 新建hcp页面 和审批页面
### 1. 会议基本页面 01 会议信息配置
#### header组件为头部导航栏  
- header 组件通过vuerouter 实现页面跳转
  - 通过vueX 统一管理全部页面跳转信息  在点击是触发state里保存的当前路由页面
- breadCrumb 组件为头部面包屑导航
  - breadCrumb 在加载的时候获取当前页面得路由 this.$route.path;
  - 同一状态管理中获取所有的地址 map进行匹配当前页面 获取当前title并渲染到页面中
#### 页面主体
1. 1侧边栏
slider和回到页面顶部 拆分出放来放到单独组件中进行维护
监听当前页面的scroll 当上卷高度超过80 侧边栏固定定位到距离页眉20px
通过判断当前index是否等于数据中保存的当前item来实现排他显示
页面内锚点链接跳转
2. 页面主体通过vue element ui组件实现数据双向绑定
3. 回到顶部 当上卷高度超过80 显示回到顶部按钮 并通过js实现动画
### 2. 名单收集 01 新建Hcp