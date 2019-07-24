import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Home from '@/pages/Home'
import Result from '@/pages/Result'
import Service from '@/pages/Service'
import My from '@/pages/My'
import Personaldata from '@/pages/Personaldata'
import Statement from '@/pages/Statement'
import Agency from '@/pages/Agency'
import Safety from '@/pages/Safety'
import Personaloverview from '@/pages/Personaloverview'
import Personalstatements from '@/pages/Personalstatements'
import Bettingrecord from '@/pages/Bettingrecord'
import Bettingdetails from '@/pages/Bettingdetails'
import Rechargerecord from '@/pages/Rechargerecord'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect:'/home',
      component: Index,
      children:[
        {
          path:'/home',
          name:"Home",
          component:Home
        },
        {
          path:'/result',
          name:"Result",
          component:Result
        },
        {
          path:'/service',
          name:"Service",
          component:Service
        },
        {
          path:'/my',
          name:"My",
          component:My,
          // children:[
          //   {
          //     path:'personaldata',
          //     name:'Personaldata',
          //     component:Personaldata
          //   }
          // ]
        }
      ]
      
    },
    {
      path:'/personaldata',
      name:'Personaldata',
      component:Personaldata
    },
    {
      path:'/statement',
      name:'Statement',
      component:Statement
    },
    {
      path:'/agency',
      name:'Agency',
      component:Agency
    },
    {
      path:'/safety',
      name:'Safety',
      component:Safety
    },
    {
      path:'/personaloverview',
      name:'Personaloverview',
      component:Personaloverview
    },
    {
      path:'/personalstatements',
      name:'Personalstatements',
      component:Personalstatements
    },
    {
      path:'/bettingrecord',
      name:'Bettingrecord',
      component:Bettingrecord
    },
    {
      path:'/bettingdetails',
      name:'Bettingdetails',
      component:Bettingdetails
    },
    {
      path:'/rechargerecord',
      name:'Rechargerecord',
      component:Rechargerecord
    }
    
    
  ]
})
