<template>
  <a-layout-header>
    <div class="logo"><img src="@/assets/moon-1109746_640.jpg" /></div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item v-for="route in routes" :key="route.path" @click="menuClick($event, route)">
        <!-- <router-link :to="route.path" v-bind:key="route.name">{{ route.name }}</router-link> -->
        {{ route.name }}
      </a-menu-item>
      <!-- <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item> -->
    </a-menu>
  </a-layout-header>
</template>

<script setup>
import menuStore from '@stores/menu'

const selectedKeys = ref([''])

const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name !== 'MainLayout')

const menuClick = (event, route) => {
  menuStore.addTabMenu(route)
}
</script>

<style lang="scss" scoped>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);

  img {
    width: 120px;
    height: 31px;
    margin-top: -36px;
  }
}
</style>
