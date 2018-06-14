import Vue from 'vue'
import Router from 'vue-router'
import HomeCont from '@/components/Home'
import Column from '@/page/Column'
import Follow from '@/page/Follow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeCont',
      component: HomeCont
    },
    {
      path: '/home',
      name: 'HomeCont',
      component: HomeCont
    },
    {
      path: '/column',
      name: 'Column',
      component: Column
    }, {
      path: '/follow',
      name: 'Follow',
      component: Follow
    }
  ]
})
