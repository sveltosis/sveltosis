<template>
  <h1>Hello {{ name }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('John');
</script>
