<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <!--     <div class="location">
          <div class="city">广州</div>
          <div class="position">
            <span class="text">我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
          </div>
        </div> -->
    <HomeSearchBox ></HomeSearchBox>


  </div>
</template>

<script setup>

import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from "./cpns/home-search-box.vue"
import {ref} from "vue";

import hyRequest from '@/service/request/index'
import useHomeStore from "@/stores/modules/home";

// 发送网咯请求获取热门数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
// const hotSuggests = ref([])
// hyRequest.get({
//   url: "/home/hotSuggests"
// }).then(res =>{
//   hotSuggests.value = res.data
// })


</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}


</style>
