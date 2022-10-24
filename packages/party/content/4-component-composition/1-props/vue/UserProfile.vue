<template>
  <p>My name is {{ name }} !</p>
  <p>My age is {{ age }} !</p>
  <p>My favourite colors are {{ favouriteColors.join(", ") }} !</p>
  <p>I am {{ isAvailable ? "available" : "not available" }}</p>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<undefined>(), {});
</script>
