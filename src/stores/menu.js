export const useMenuStore = defineStore('menu', () => {
  /* menu */
  const menuItems = ref([])

  const createMenuItems = (menuList) => {
    let resultList = []

    menuList.forEach((menu) => {
      let result = {
        key: menu.path,
        label: menu.name,
        title: menu.name,
      }

      if (menu.children) {
        result.children = createMenuItems(menu.children)
      }

      resultList.push(result)
    })

    return resultList
  }

  const setMenuItems = (param) => {
    menuItems.value = createMenuItems(param)
  }

  /* tab */
  const activeKey = ref()
  const tabMenuList = ref([{ name: 'Home', path: '/' }])

  const addTabMenu = (menuItem) => {
    const isAdded = tabMenuList.value.find((tab) => {
      return tab.path === menuItem.key
    })
    if (!isAdded) {
      tabMenuList.value.push({
        name: menuItem.title,
        path: menuItem.key,
      })
    }

    activeKey.value = menuItem.key
  }

  const removeTabMenu = (tabPath) => {
    let lastIndex = 0
    const isAdded = tabMenuList.value.find((tab, index) => {
      if (tab.path === tabPath) {
        lastIndex = index - 1
        return tab
      }
    })

    if (isAdded) {
      tabMenuList.value = tabMenuList.value.filter((tab) => tab.path !== isAdded.path)
      activeKey.value = tabMenuList.value.at(lastIndex).path
    }
  }

  const getTabMenuList = () => {
    return tabMenuList.value
  }

  /* keepAlive */
  const keepAliveList = ref([])

  const addKeepAliveList = (componentName) => {
    const isAdded = keepAliveList.value.find((item) => item === componentName)

    if (!isAdded) {
      keepAliveList.value.push(componentName)
    }
  }

  const removeKeepAliveList = (componentName) => {
    const isAdded = keepAliveList.value.find((item) => item === componentName)

    if (isAdded) {
      keepAliveList.value = keepAliveList.value.filter((item) => item !== componentName)
    }
  }

  return {
    menuItems,
    setMenuItems,

    activeKey,
    tabMenuList,
    addTabMenu,
    removeTabMenu,
    getTabMenuList,

    keepAliveList,
    addKeepAliveList,
    removeKeepAliveList,
  }
})
