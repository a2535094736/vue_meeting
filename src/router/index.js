import Vue from 'vue'
import VueRouter from 'vue-router';
import NewHcp from '../views/newHcp.vue'
import Meetinginfoconfigure from '../views/meetingInfoConfig.vue'
import MeetingCollectHome from '../views/listFormat'
import MeetingCollectMood from '../views/meetingcollectmood'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/meetinginfoconfigure'},
  {path:'/meetinginfoconfigure',component:Meetinginfoconfigure},
  {path:'/meetingcollecthome',component:MeetingCollectHome},
  {path:'/meetingcollectmood',component:MeetingCollectMood},
  {path:'/newhcp',component:NewHcp},
]

const router = new VueRouter({
  routes
})

export default router
