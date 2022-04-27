<template>
      <div class="card-body">
        <h6>{{ props.comment.email }} says:</h6>
        <p>{{ props.comment.body }}</p>
      </div>
</template>

<script setup>
const props = defineProps({
  comment: Object,
});
</script>

<style>
</style>