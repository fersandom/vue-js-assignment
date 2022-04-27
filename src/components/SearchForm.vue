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
    <button type="submit" class="btn-sm btn-primary">Search</button>
  </form>

  <!-- <div v-if="searchStore.state.postsOfUsers.length !== 0">
    <SectionTitle :text="'Search Results'" />
    <ContentCard v-for="post in searchStore.state.postsOfUsers" :key="post.id" :classes="'card'">
      <SinglePost :inList="true" :post="post" />
    </ContentCard>
  </div> -->
</template>

<script setup>
import { inject, ref } from "@vue/runtime-core";
import mainStore from "../store/mainStore";
import searchStore from "../store/searchStore";
// import SectionTitle from "./SectionTitle.vue";
// import SinglePost from "./SinglePost.vue";
// import ContentCard from "./ContentCard.vue";

inject[mainStore, searchStore];


let searchQuery = ref("");

</script>

<style>
</style>