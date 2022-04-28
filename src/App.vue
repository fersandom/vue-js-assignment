<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <router-link to="/posts" class="navbar-brand active">Posts</router-link>

      <div class="d-flex">
        <SearchForm />
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import SearchForm from "./components/SearchForm.vue";

</script>


<style>
</style>
