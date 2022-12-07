
<template>
  <div>
    <router-view />
    <TabBar v-if="!route.meta.showTabBar" />
  </div>
</template>

<script setup>
import TabBar from "@/components/TabBar/tab-bar.vue";
import {  RouterView, useRoute } from "vue-router";

/* 显示底部 的tabbar 动态数据 */
const route = useRoute()
</script>

<style scoped>
</style>
