<template>
  <div class="container">
    <div v-if="searchStore.state.isSearch === true">
      <SearchResults />
    </div>
        <SinglePost :inList="false" />
        <SectionTitle :text="'Comments'" />
        <ContentCard
          v-for="comment in mainStore.state.filteredComments"
          :key="comment.id"
        >
          <SingleComment :comment="comment" />
        </ContentCard>
  </div>
</template>

<script setup>
const { default: mainStore } = require("@/store/mainStore");
const { inject } = require("@vue/runtime-core");
const { useRoute } = require("vue-router");
const route = useRoute();
import SinglePost from "../components/SinglePost.vue";
import ContentCard from "../components/ContentCard.vue";
import SingleComment from "../components/SingleComment.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SearchResults from "../components/SearchResults.vue";
import searchStore from "@/store/searchStore";

inject[(mainStore, searchStore)];

let routeId = parseInt(route.params.id, 10);

async function fetchData(routeId) {
  await mainStore.methods.fetchPost(routeId);
  const userId = mainStore.state.post.userId;
  await mainStore.methods.fetchUser(userId);
  await mainStore.methods.fetchCommentsOfPost(routeId);
}
fetchData(routeId);
mainStore.methods.fetchAll();
</script>

<style>
</style>