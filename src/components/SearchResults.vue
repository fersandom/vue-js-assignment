<template>
  <div v-if="searchStore.state.isError === false">
    <SectionTitle :text="'Search Results'" />
    <ContentCard
      v-for="post in searchStore.state.postsOfUsers"
      :key="post.id"
      :classes="'card'"
    >
      <SinglePost :inList="true" :post="post" />
    </ContentCard>
  </div>
  <div v-else-if="searchStore.state.isError === true">
    <SectionTitle :text="searchStore.state.errorMessage" />
  </div>
</template>

<script setup>
const { default: searchStore } = require("@/store/searchStore");
const { inject } = require("@vue/runtime-core");
import SectionTitle from "./SectionTitle.vue";
import ContentCard from "./ContentCard.vue";
import SinglePost from "./SinglePost.vue";

inject[searchStore];
</script>

<style>
</style>