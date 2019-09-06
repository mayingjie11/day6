import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path:'/home',
     name:'home',
     component:()=>import('./views/home/home.vue')
   },
   {
    path:'/my',
    name:'my',
    component:()=>import('./views/my/my.vue')
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
