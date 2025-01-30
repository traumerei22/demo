<template>
  <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
    <a-tab-pane
      v-for="pane in tabMenuList"
      :key="pane.path"
      :tab="pane.name"
      :closable="pane.path === '/' ? false : true"
    ></a-tab-pane>
  </a-tabs>
</template>

<script setup>
const menuStore = useMenuStore()
const { activeKey, tabMenuList } = storeToRefs(menuStore)

const router = useRouter()
// const tabChange = (currentKey) => {
//   router.push(currentKey)
// }

watch(
  () => activeKey,
  (newValue) => {
    router.push(newValue.value)
  },
  {
    deep: true,
  },
)

const onEdit = (targetKey, action) => {
  if (action === 'remove') {
    const removeComponentName = router.getRoutes().find((route) => route.path === targetKey)
      .meta.componentName
    menuStore.removeKeepAliveList(removeComponentName)
    menuStore.removeTabMenu(targetKey)
  }
}
</script>

<style lang="scss" scoped></style>
