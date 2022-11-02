<template>
  <p>Page title is: {{ pageTitle }}</p>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const pageTitle = ref('');

onMounted(() => {
  pageTitle.value = document.title;
});
</script>
