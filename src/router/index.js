import Vue from 'vue'
import VueRouter from 'vue-router';
import NewHcp from '../views/newHcp.vue'
import Meetinginfoconfigure from '../views/meetingInfoConfig.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/meetinginfoconfigure'},
  {path:'/meetinginfoconfigure',component:Meetinginfoconfigure},
  {path:'/newhcp',component:NewHcp},
]

const router = new VueRouter({
  routes
})

export default router
