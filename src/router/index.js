import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Before from '@/views/Before.vue'
import After from '@/views/After.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Gallery from '@/views/Gallery.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '#/:before',
        name: 'homeBefore',
        component: Before,
      },
      {
        path: '#/:after',
        name: 'homeAfter',
        component: After,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router