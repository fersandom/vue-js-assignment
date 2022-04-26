<template >
  <div :class="classes" >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
    classes: String,
    
});
</script>

<style>
</style>