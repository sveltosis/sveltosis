<template>
  <button @click="toggleLight">Toggle light</button>
  <p>Light is: {{ light }}</p>
  <p>
    You must

    <template v-if="light === 'red'">
      <span>STOP</span>
    </template>

    <template v-else>
      <span>GO</span>
    </template>
  </p>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const TRAFFIC_LIGHTS = ref(['red', 'green']);
const lightIndex = ref(0);

const light = computed(() => {
  return TRAFFIC_LIGHTS.value[lightIndex];
});

function toggleLight() {
  lightIndex.value = lightIndex.value === 0 ? 1 : 0;
}
</script>
