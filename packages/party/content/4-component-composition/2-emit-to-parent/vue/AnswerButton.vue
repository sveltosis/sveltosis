<template>
  <button @click="clickYes($event)">YES</button>
  <button @click="clickNo($event)">NO</button>
</template>

<script setup lang="ts">
const props = defineProps(['onYes', 'onNo']);

function clickYes() {
  props.onYes();
}
function clickNo() {
  props.onNo();
}
</script>
