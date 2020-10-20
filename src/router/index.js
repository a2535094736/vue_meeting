import Vue from 'vue'
import VueRouter from 'vue-router';
import NewHcp from '../views/newHcp.vue'
import Meetinginfoconfigure from '../views/meetingInfoConfig.vue'
import MeetingCollectHome from '../views/listFormat'
import MeetingCollectMood from '../views/meetingcollectmood'
import ApprovelList from '../views/approvelList'
import SubmitList from '../views/submitList'
import Sketch from '../views/sketch'
import ApprovelFreeList from '../views/approvelfreelist'
import ApprovalDetail from '../views/approvaldetail'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/meetinginfoconfigure'},
  {path:'/meetinginfoconfigure',component:Meetinginfoconfigure},
  {path:'/meetingcollecthome',component:MeetingCollectHome},
  {path:'/meetingcollectmood',component:MeetingCollectMood},
  {path:'/newhcp',component:NewHcp},
  {path:'/approvallist',component:ApprovelList},
  {path:'/submitlist',component:SubmitList},
  {path:'/sketch',component:Sketch},
  {path:'/approvalfreelist',component:ApprovelFreeList},
  {path:'/approvaldetail',component:ApprovalDetail},
]

const router = new VueRouter({
  routes
})

export default router
