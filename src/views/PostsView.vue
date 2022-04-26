<template>
  <div class="container">
      <div v-if="searchStore.state.postsOfUsers.length !==0">
        <SearchResults/>
      </div>
    <SectionTitle class="mt-3" :text="'Posts'" />
    <div v-if="mainStore.state.loaded === false">
      <p>Loading</p>
    </div>
    <div v-else-if="mainStore.state.loaded === true">
      <div v-for="(posts, index) in groupedPosts" :key="index" class="row">
        <ContentCard v-for="post in posts" :key="post.id" :classes="'col card'">
          <SinglePost :inList="true" :post="post" />
        </ContentCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import mainStore from "../store/mainStore";
import searchStore from "@/store/searchStore";
import { computed, inject } from "@vue/runtime-core";
import chunk from "lodash.chunk";
import SinglePost from "../components/SinglePost.vue";
import ContentCard from "../components/ContentCard.vue";
import SectionTitle from '../components/SectionTitle.vue'
import SearchResults from '../components/SearchResults.vue'

inject[mainStore, searchStore];

mainStore.methods.fetchAll();

const groupedPosts = computed(() => chunk(mainStore.state.posts, 4));
</script>
