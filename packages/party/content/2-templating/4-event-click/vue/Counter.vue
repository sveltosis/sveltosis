<template>
  <p>Counter: {{ count }}</p>
  <button @click="incrementCount">+1</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function incrementCount() {
  count.value = count.value + 1;
}
</script>
