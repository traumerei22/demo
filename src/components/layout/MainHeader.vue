<template>
  <a-layout-header>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
      :items="menuItems"
      @click="menuClick"
    >
    </a-menu>
  </a-layout-header>
</template>

<script setup>
const selectedKeys = ref([''])

const menuStore = useMenuStore()
const { menuItems } = storeToRefs(menuStore)

const router = useRouter()

const menuClick = (menuItem) => {
  router.push(menuItem.key)
  menuStore.addTabMenu(menuItem.item.originItemValue)
}
</script>

<style lang="scss" scoped></style>
