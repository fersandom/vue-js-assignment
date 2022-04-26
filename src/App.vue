<template>
  <nav>
    <router-link to="/posts">Posts</router-link>
  </nav>
  <router-view/>
</template>

<script setup>
const { inject }=require("@vue/runtime-core");
const { default: mainStore }=require("./store/mainStore");

inject[mainStore]
</script>


<style>

</style>
