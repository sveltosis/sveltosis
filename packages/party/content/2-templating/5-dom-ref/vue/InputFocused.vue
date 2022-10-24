<template>
  <input ref="inputElement" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const inputElement = ref<any>();

onMounted(() => {
  inputElement.value.focus();
});
</script>
