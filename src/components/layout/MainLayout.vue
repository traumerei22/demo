<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <MainHeader />
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <MainTab />
      <router-view v-slot="{ Component }">
        <keep-alive exclude="HomeView" :include="keepAliveList">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </a-layout-content>
  </a-layout>
</template>
<script setup>
const menuStore = useMenuStore()
const { keepAliveList } = storeToRefs(menuStore)
</script>
<style scoped></style>
