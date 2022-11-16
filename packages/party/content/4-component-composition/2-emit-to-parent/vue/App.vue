<template>
  <p>Can I come ?</p>
  <answer-button @yes="onAnswerYes($event)" @no="onAnswerNo($event)"></answer-button>
  <p style="font-size: 50px">{{ canCome ? '😀' : '😥' }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import AnswerButton from './AnswerButton.vue';

const canCome = ref(true);

function onAnswerNo() {
  canCome.value = false;
}
function onAnswerYes() {
  canCome.value = true;
}
</script>
