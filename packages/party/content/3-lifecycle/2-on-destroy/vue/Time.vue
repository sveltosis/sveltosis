<template></template>

<script setup lang="ts">
import { onUnmounted } from 'vue';

onUnmounted(() => {
  console.log('onUnmount');
});
</script>
