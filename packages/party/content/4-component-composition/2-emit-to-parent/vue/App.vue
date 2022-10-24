<template>
  <p>Can I come ?</p>
  <answer-button @yes="onAnswerYes" @no="onAnswerNo"></answer-button>
  <p style="font-size: 50px">{{ canCome ? "😀" : "😥" }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

import AnswerButton from "./AnswerButton.svelte";

const canCome = ref(true);

function onAnswerNo() {
  canCome.value = false;
}
function onAnswerYes() {
  canCome.value = true;
}
</script>
