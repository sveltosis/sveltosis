<template>
  <div>
    <input
      type="radio"
      value="Plain"
      :checked="tortilla === 'Plain'"
      @input="tortilla = $event.target.value"
    /><input
      type="radio"
      value="Whole wheat"
      :checked="tortilla === 'Whole wheat'"
      @input="tortilla = $event.target.value"
    /><input
      type="radio"
      value="Spinach"
      :checked="tortilla === 'Spinach'"
      @input="tortilla = $event.target.value"
    /><br /><br /><input
      type="checkbox"
      value="Rice"
      :checked="fillings === 'Rice'"
      @input="fillings = $event.target.value"
    /><input
      type="checkbox"
      value="Beans"
      :checked="fillings === 'Beans'"
      @input="fillings = $event.target.value"
    /><input
      type="checkbox"
      value="Cheese"
      :checked="fillings === 'Cheese'"
      @input="fillings = $event.target.value"
    /><input
      type="checkbox"
      value="Guac (extra)"
      :checked="fillings === 'Guac (extra)'"
      @input="fillings = $event.target.value"
    />
    <p>Tortilla: {{ tortilla }}</p>
    <p>Fillings: {{ fillings }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tortilla = ref('Plain');
const fillings = ref([]);
</script>
