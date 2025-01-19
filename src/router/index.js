import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import MainLayout from '@/components/layout/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: {
            home: HomeView,
          },
        },
        {
          path: '/data',
          name: 'dataEntry',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@views/data/DataEntry.vue'),
        },
        {
          path: '/page1',
          name: 'page1',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@views/TestMenuPage1.vue'),
        },
      ],
    },
  ],
})

const menuList = [
  {
    path: '/',
    name: 'Home',
    fileName: 'HomeView',
  },
  {
    path: '/',
    name: 'DataEntry',
    fileName: 'DataEntry',
  },
]

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const menuStore = useMenuStore()

  if (!authStore.isAuthenticated) {
    menuStore.setMenuList(menuList)
  }
})

export default router
