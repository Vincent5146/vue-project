import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/user/About.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/admin/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/user/Userboard.vue'),
    children: [
      {
        path: 'products',
        name: 'user-products',
        component: () => import('../views/user/UserProducts.vue')
      },
      {
        path: 'boarding',
        component: () => import('../views/user/products/Boarding.vue')
      },
      {
        path: 'daycare',
        component: () => import('../views/user/products/Daycare.vue')
      },
      {
        path: 'spa',
        component: () => import('../views/user/products/Spa.vue')
      },
      {
        path: 'swimming',
        component: () => import('../views/user/products/Swimming.vue')
      }
    ]
  },
  {
    path: '/checkout',
    component: () => import('../views/user/Checkout.vue')
  },
  {
    path: '/checkpayment/:productId',
    component: () => import('../views/user/Checkpayment.vue')
  },
  {
    path: '/product/:productId',
    name: 'productDetail',
    component: () => import('../views/user/UserProduct.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/user/Cart.vue')
  },
  {
    path: '/orders',
    component: () => import('../views/user/Checkorder.vue')
  },
  {
    path: '/followPage',
    component: () => import('../views/user/Followpage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
