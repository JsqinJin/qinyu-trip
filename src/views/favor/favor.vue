<template>
  <div class="favor">
    <h2>favor</h2>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-rate v-model="value" />
    <button @click="add">+111</button>
  </div>
</template>

<script setup>

import {ref} from "vue";

const value = ref(0);
function add(){
  value.value ++
}
</script>

<style lang="less" scoped>

</style>
