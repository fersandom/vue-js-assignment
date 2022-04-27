<template>
  <div class="container">
    <Transition name="in-left">
      <div v-if="searchStore.state.isSearch === true">
        <SearchResults />
      </div>
    </Transition>
    <SectionTitle class="mt-3" :text="'Posts'" />
    <div v-if="mainStore.state.loaded === false">
      <p>Please wait while loading posts</p>
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
import SectionTitle from "../components/SectionTitle.vue";
import SearchResults from "../components/SearchResults.vue";

inject[(mainStore, searchStore)];

mainStore.methods.fetchAll();

const groupedPosts = computed(() => chunk(mainStore.state.posts, 4));
</script>

<style>
.in-left-enter-active {
  transition: all 0.3s ease-out;
}

.in-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.in-left-enter-from,
.in-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>