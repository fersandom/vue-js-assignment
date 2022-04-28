<template>
  <form
    class="d-flex"
    @submit.prevent="searchStore.methods.setQueryAndSearch(searchQuery)"
  >
    <div class="form-group">
      <input
        v-model="searchQuery"
        type="text"
        class="form-control"
        id="userName"
        placeholder="Insert user name"
      />
    </div>
    <button type="submit" class="btn-sm btn-primary" @click="searchStore.state.isSearch=false">Search</button>
  </form>


</template>

<script setup>
import { inject, ref } from "@vue/runtime-core";
import mainStore from "../store/mainStore";
import searchStore from "../store/searchStore";


inject[mainStore, searchStore];


let searchQuery = ref("");  //Passed to store through the setter.

</script>

<style>
</style>