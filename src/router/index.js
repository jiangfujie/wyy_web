import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import Discover from '../components/Discover'
import TopList from '../views/TopList'
Vue.use(VueRouter)

  const routes = [
  {path:'/',component:Index},
  {path:'/discover',component:Discover},
  {path:'/discover/toplist/:lei',component:TopList,props:true}
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
export default router
