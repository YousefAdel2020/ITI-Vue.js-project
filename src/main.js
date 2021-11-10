import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

import { createWebHistory, createRouter } from "vue-router";

import home from './components/homecomponent.vue'
import shop from './components/shopcomponent.vue'
const routes=[
    {path:'/',component:home},

    {path:'/shop',component:shop}
  ];
  const router = createRouter({history:createWebHistory(),routes});



createApp(App).use(router).mount('#app')
