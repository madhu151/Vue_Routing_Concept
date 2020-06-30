import HomeComp from '../components/HomeComp.vue'
import HelloWorld from '../components/HelloWorld.vue'
import CustomerComp from '../components/CustomerComp'
import Custinfo from '../components/Custinfo.vue'
import NewCustomer from '../components/NewCustomer.vue'

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes : [
      {
          path: '/Home',
          name : 'Home',
          component : HomeComp
      },
      {
          path: '/HelloWorld',
          name:"HelloWorld",
          component:HelloWorld
      },
      {
        path: '/CustComp/',
        name:"CustComp",
        component:CustomerComp,
        children:[
            {
                path: 'NewCust',
                component: NewCustomer
            }
        ]
    },
    {
        path: '/Custinfo/:cname',
        name:"Custinfo",
        component:Custinfo
    }

  ]  
})