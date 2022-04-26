<template>
  <form @submit.prevent="findPostsByUser(query, mainStore.state.posts)">
    <div class="form-group">
      <label for="userName">User search</label>
      <input
        v-model="query"
        type="text"
        class="form-control"
        id="userName"
        placeholder="Insert user name"
      />
    </div>
    <button type="submit" class="btn btn-primary">Search</button>
  </form>

  <div v-if="postsOfUsers.length !== 0">
    <SectionTitle :text="'Search Results'" />
    <ContentCard v-for="post in postsOfUsers" :key="post.id" :classes="'card'">
      <SinglePost :inList="true" :post="post" />
    </ContentCard>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import mainStore from "../store/mainStore";
import SectionTitle from "./SectionTitle.vue";
import SinglePost from "./SinglePost.vue";
import ContentCard from "./ContentCard.vue";

inject[mainStore];
const query = ref("");
const postsOfUsers = ref([]);
const userSearch = (query, users) => {
  console.log(
    users.filter(({ name }) =>
      name.toLowerCase().trim().includes(query.toLowerCase().trim())
    )
  );
  return users.filter(({ name }) =>
    name.toLowerCase().trim().includes(query.toLowerCase().trim())
  );
};

const findPostsByUser = (query, posts) => {
  postsOfUsers.value = [];
  const filteredUsers = userSearch(query, mainStore.state.users);
  for (const post of posts) {
    for (const user of filteredUsers) {
      if (post.userId === user.id) {
        postsOfUsers.value.push(post);
      }
    }
  }
  console.log(postsOfUsers.value);
};
</script>

<style>
</style>