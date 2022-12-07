<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
          v-model="searchValue"
          shape="round"
          placeholder="请输入搜索关键词"
          show-action
          @cancel="canelClick"
      />

      <!-- tab 切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
<!--        <h2 v-show="tabActive === key">{{ value.title }}</h2>-->
      </template>

    </div>


  </div>
</template>
<script setup>
import router from "@/router";
import {computed, ref} from "vue";
import useCityStore from '@/stores/modules/city'
import {storeToRefs} from "pinia";

import CityGroup from './cpns/city-group.vue'
// import useCityStore from '@/stores/modules/city';

// search 功能
const searchValue = ref("");
const canelClick = () => {
  router.back();
};

// tab切换
const tabActive = ref();

// 城市请求数据
// const allCity = ref({});
// getCityAll().then((res) => {
//   allCity.value = res.data;
//   console.log(allCity.value);
// });

// stores获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const {allCities} = storeToRefs(cityStore)

const currentGroup = computed(() => allCities.value[tabActive.value])




</script>


<style lang="less" scoped>
.city {


  .top{
    position: relative;
    z-index: 9;
  }
  .content {
    /*局部滚动*/
    height: calc(100vh - 98px);
    overflow-y: auto;


  }
}
</style>