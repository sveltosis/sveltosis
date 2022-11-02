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
      :checked="fillings.includes('Rice')"
      @input="
        $event.target.checked
          ? fillings.push($event.target.value)
          : fillings.splice(fillings.indexOf('Rice'), 1)
      "
    /><input
      type="checkbox"
      value="Beans"
      :checked="fillings.includes('Beans')"
      @input="
        $event.target.checked
          ? fillings.push($event.target.value)
          : fillings.splice(fillings.indexOf('Beans'), 1)
      "
    /><input
      type="checkbox"
      value="Cheese"
      :checked="fillings.includes('Cheese')"
      @input="
        $event.target.checked
          ? fillings.push($event.target.value)
          : fillings.splice(fillings.indexOf('Cheese'), 1)
      "
    /><input
      type="checkbox"
      value="Guac (extra)"
      :checked="fillings.includes('Guac (extra)')"
      @input="
        $event.target.checked
          ? fillings.push($event.target.value)
          : fillings.splice(fillings.indexOf('Guac (extra)'), 1)
      "
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
