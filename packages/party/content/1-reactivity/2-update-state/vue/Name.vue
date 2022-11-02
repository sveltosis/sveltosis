<template>
  <h1>Hello {{ name }}</h1>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const name = ref('John');

onMounted(() => {
  name.value = 'Jane';
});
</script>
