import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter);

export default new VueRouter({ routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {//控制组件路由是否显示隐藏 也就是底部是否显示
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {//控制组件路由是否显示隐藏 也就是底部是否显示
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {//控制组件路由是否显示隐藏 也就是底部是否显示
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {//控制组件路由是否显示隐藏 也就是底部是否显示
        showFooter: true
      }
    } ,
    {
      path: '/login',
      component: Login,
      meta:{
        showFooter:false
      }
    }
    ]
})
