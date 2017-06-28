import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index.vue'
import Login from '@/components/pages/login/index.vue'
import SignUp from '@/components/pages/signup/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp}
  ]
})
