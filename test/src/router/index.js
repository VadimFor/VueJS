import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog.vue";
import testview from "@/views/testview.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog', //Nombre del view
      component: Catalog
    },
    {
      path: '/testview',
      name: 'testview', //Nombre del view
      component: testview
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetail
    }
    ,
    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    }
  ]
})

export default router
