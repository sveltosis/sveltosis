<template>
  <button @click="clickYes">YES</button>
  <button @click="clickNo">NO</button>
</template>

<script setup lang="ts">
const props = defineProps(["onYes", "onNo"]);

function clickYes() {
  props.onYes();
}

function clickNo() {
  props.onNo();
}
</script>
