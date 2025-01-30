import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/layout/MainLayout.vue'
import { orgMenuList } from './menuList'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '/:pathMatch(.*)*',
          redirect: '/',
        },
      ],
    },
  ],
})

const createRouterRecords = (menuList) => {
  // let routes = []

  menuList.forEach((menu) => {
    let routerRecord = {
      path: menu.path,
      name: menu.name,
      meta: {
        componentName: menu.fileName.split('/').reverse()[0],
      },
      component: () => import(/* @vite-ignore */ '../views/' + menu.fileName + '.vue'),
    }

    if (menu.children) {
      routerRecord.children = createRouterRecords(menu.children)
    }

    router.addRoute('MainLayout', routerRecord)
  })

  // return router.addRoute()
}

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const menuStore = useMenuStore()

  if (!authStore.isAuthenticated) {
    createRouterRecords(orgMenuList)
    menuStore.setMenuItems(orgMenuList)
    authStore.setAuthenticated(true)

    next('/')
  } else {
    if (to.fullPath !== '/') {
      menuStore.addKeepAliveList(to.meta.componentName)
    }
    next()
  }
})

export default router
