<template>
  <select @change="selectedColorId = $event.target.value" :value="selectedColorId">
    <template :key="index" v-for="(color, index) in colors">
      <option :value="color.id" :disabled="color.isDisabled">
        {{ color.text }}
      </option>
    </template>
  </select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedColorId = ref(2);
const colors = ref([null, null, null, null]);
</script>
