<template>
  <input @input="value = $event.target.value" :value="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('hello');
</script>
