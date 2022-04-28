<template>
  <FadeTransition>
    <div v-if="mainStore.state.loaded === true">
      <div v-if="props.inList === true">
        <div class="card-body">
          <router-link
            :to="{ name: 'post', params: { id: post.id } }"
            target="_blank"
            ><h5 class="card-title">{{ post.title }}</h5></router-link
          >
          <h6 class="card-subtitle">
            By {{ findUserPost(props.post, mainStore.state.users) }}
          </h6>
          <p class="card-text">{{ post.body }}</p>
          <h6 class="card-subtitle">
            {{ countComments(props.post, mainStore.state.comments) }} comments
          </h6>
        </div>
      </div>

      <div v-else-if="props.inList === false">
        <h2 class="text-center">{{ mainStore.state.post.title }}</h2>
        <h6>By {{ mainStore.state.user.name }}</h6>
        <p>{{ mainStore.state.post.body }}</p>
      </div>
    </div>
  </FadeTransition>
</template>

<script setup>
const { default: mainStore } = require("@/store/mainStore");
const { inject } = require("@vue/runtime-core");
import findUserPost from "../composables/findUserPost";
import countComments from "../composables/countComments";
import FadeTransition from "../components/FadeTransition.vue";

inject[mainStore];

const props = defineProps({
  post: Object,
  inList: Boolean,  /*
                    *Determines the origin of the data
                    *If inList data will be processed from arrays in mainStore.state
                    *If !inList data will come from the single objects in mainStore.state 
                    */
});
</script>

<style>
</style>