<template>
  <ul>
    <template :key="index" v-for="(color, index) in colors">
      <li>{{ color }}</li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const colors = ref(["red", "green", "blue"]);
</script>
