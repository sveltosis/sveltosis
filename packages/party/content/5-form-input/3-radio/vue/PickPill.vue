<template>
  <div>Picked: {{ picked }}</div>
  <input
    id="blue-pill"
    type="radio"
    value="blue"
    :checked="picked === 'blue'"
    @input="picked = $event.target.value"
  />
  <label for="blue-pill">Blue pill</label>
  <input
    id="red-pill"
    type="radio"
    value="red"
    :checked="picked === 'red'"
    @input="picked = $event.target.value"
  />
  <label for="red-pill">Red pill</label>
</template>

<script setup lang="ts">
import { ref } from "vue";

const picked = ref("red");
</script>
