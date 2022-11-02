<template>
  <input
    :class="
      _classStringToObject(`form-input ${disabled ? 'disabled' : ''} ${focus ? 'focus' : ''}`)
    "
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<undefined>(), {});
const focus = ref(true);

function _classStringToObject(str) {
  const obj = {};
  if (typeof str !== 'string') {
    return obj;
  }
  const classNames = str.trim().split(/\s+/);
  for (const name of classNames) {
    obj[name] = true;
  }
  return obj;
}
</script>
