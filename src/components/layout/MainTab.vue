<template>
  <a-layout-content style="padding: 0 50px">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @tabClick="tabClick">
      <a-tab-pane key="/home" :closable="false">
        <template #tab>
          <span>
            <HomeOutlined />
            Home
          </span>
        </template>
        <HomeView />
      </a-tab-pane>
      <!-- <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane> -->
      <a-tab-pane v-for="pane in panes" :key="pane.path" :closable="true">
        <template #tab>
          <router-link v-bind:key="pane.path" :to="pane.path">
            {{ pane.name }}
          </router-link>
        </template>
        <router-view></router-view>
        <!-- <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view> -->
      </a-tab-pane>
    </a-tabs>
  </a-layout-content>
</template>

<script setup>
import menuStore from '@stores/menu'
import HomeView from '@/views/HomeView.vue'

const activekey = ref('')

const panes = ref([]) //반응형 선언해야 유기적으로 동작

onMounted(() => {
  panes.value = menuStore.getTabMenuList()
})

const tabClick = (param) => {
  console.log(param)
}
</script>

<style lang="scss" scoped></style>
