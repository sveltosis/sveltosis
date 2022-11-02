<template>
  <input
    id="is-available"
    type="checkbox"
    @input="isAvailable = $event.target.checked"
    :checked="isAvailable"
  />
  <label for="is-available">Is available</label>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isAvailable = ref(false);
</script>
