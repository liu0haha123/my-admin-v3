<template>
  <div>
    <t-layout class="main-layout">
      <t-aside>侧边栏</t-aside>
      <t-layout>
        <global-header></global-header>
        <t-content><router-view></router-view></t-content>
        <t-footer>底部</t-footer>
      </t-layout>
    </t-layout>

  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "./header.vue"
</script>

<style scoped lang="less">
.main-layout {
  height: 100%;
}
</style>
