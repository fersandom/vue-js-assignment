<template>
  <div class="container">
    <div v-if="searchStore.state.isSearch === true">
      <SearchResults />
    </div>
    <SectionTitle class="mt-3" :text="'Posts'" />
    <FadeTransition>
    <div v-if="mainStore.state.loaded === false">
      <p>Please wait while loading posts</p>
    </div>
    <div v-else-if="mainStore.state.loaded === true">
      <div v-for="(posts, index) in groupedPosts" :key="index" class="row">
        <ContentCard v-for="post in posts" :key="post.id" :classes="'col-lg card overflow-auto'" style="height: 400px; ">
          <SinglePost :inList="true" :post="post" />
        </ContentCard>
      </div>
    </div>
    </FadeTransition>
  </div>
</template>

<script setup>
import mainStore from "../store/mainStore";
import searchStore from "@/store/searchStore";
import { computed, inject } from "@vue/runtime-core";
import chunk from "lodash.chunk";
import SinglePost from "../components/SinglePost.vue";
import ContentCard from "../components/ContentCard.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SearchResults from "../components/SearchResults.vue";
import FadeTransition from "../components/FadeTransition.vue";

inject[(mainStore, searchStore)];

mainStore.methods.fetchAll();

const groupedPosts = computed(() => chunk(mainStore.state.posts, 4)); //Groups the posts so they can be shown in rows
</script>

<style>

</style>