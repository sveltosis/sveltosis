<template>
  <div v-html="html"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const html = ref("<b>bold</b>");
</script>
