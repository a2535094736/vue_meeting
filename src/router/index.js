import Vue from 'vue'
import VueRouter from 'vue-router';
import NewHcp from '../views/newHcp.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/newhcp',component:NewHcp}
]

const router = new VueRouter({
  routes
})

export default router
