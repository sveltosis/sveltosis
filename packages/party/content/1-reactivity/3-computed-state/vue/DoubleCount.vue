<template>
  <div>{{ doubleCount }}</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const count = ref(10);

const doubleCount = computed(() => {
  return count.value * 2;
});
</script>
