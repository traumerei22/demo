import { ref } from 'vue'

const tabMenuList = ref([
  // { name: 'Home', path: '/' }
])

const menu = {
  addTabMenu: (tab) => {
    const isAdded = tabMenuList.value.find((menu) => {
      return menu.name === tab.name
    })
    if (!isAdded) {
      tabMenuList.value.push(tab)
    }
  },
  getTabMenuList: () => {
    return tabMenuList.value
  },
}

export default menu
