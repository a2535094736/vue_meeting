import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentNav:[],
    navList: [
      {
        id: "1",
        title: "会议信息",
        navTo: [
          { id: "1", title: "会议信息配置", path: "/meetinginfoconfigure" },
          {
            id: "2",
            title: "名单收集模版_首页",
            path: "/meetingcollecthome",
          },
          { id: "3", title: "名单收集模版", path: "/meetingcollectmood" },
        ],
      },
      {
        id: "2",
        title: "名单收集",
        navTo: [
          { id: "1", title: "新建HCP", path: "/newhcp" },
          { id: "2", title: "已提交", path: "/hassubmit" },
          { id: "3", title: "草稿箱", path: "/sketch" },
        ],
      },
      {
        id: "3",
        title: "审批单",
        navTo: [
          { id: "1", title: "审批列表", path: "/approvellist" },
          { id: "2", title: "审批单明细", path: "/approveldetail" },
          { id: "3", title: "已结束会议", path: "/finishedmeeting" },
        ],
      },
    ]
  },
  mutations: {
    changeCurrentNav(state,current){
      state.currentNav = current
    }
  },
  actions: {},
  modules: {},
});
