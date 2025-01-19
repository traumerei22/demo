export const useMenuStore = defineStore('menu', () => {
  const menuList = ref([])

  const setMenuList = (menuList) => {
    menuList.value = menuList
  }

  const tabMenuList = ref([
    // { name: 'Home', path: '/' }
  ])

  const addTabMenu = (tab) => {
    const isAdded = tabMenuList.value.find((menu) => {
      return menu.name === tab.name
    })
    if (!isAdded) {
      tabMenuList.value.push(tab)
    }
  }

  const getTabMenuList = () => {
    return tabMenuList.value
  }

  return {
    tabMenuList,
    addTabMenu,
    getTabMenuList,

    menuList,
    setMenuList,
  }
})
