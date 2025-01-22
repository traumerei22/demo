<template>
  <div style="margin-left: 50px">
    <SuppTabs v-model:activeKey="activeKey">
      <SuppTabPane key="1">
        <template #tab>
          <span>
            <apple-outlined />
            Tab 1
          </span>
        </template>
        Content of Tab Pane 1
      </SuppTabPane>
      <SuppTabPane key="2" tab="Tab 2">Content of Tab Pane 2</SuppTabPane>
      <SuppTabPane key="3" tab="Disabled" disabled>Content of Tab Pane 3</SuppTabPane>
    </SuppTabs>
  </div>
</template>

<script setup>
const activeKey = ref('1')
</script>

<style lang="scss" scoped></style>
