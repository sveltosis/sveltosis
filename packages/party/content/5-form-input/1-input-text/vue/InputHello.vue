<template>
  <p>{{ text }}</p>
  <input @input="text = $event.target.value" :value="text" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('Hello World');
</script>
