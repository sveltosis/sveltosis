<template>
  <button ref="button0">{{ buttonText }}</button>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const buttonText = ref('Click Me');
const actionHandler0 = ref(null);

const button0 = ref<>();

onMounted(() => {
  if (button0.value) {
    actionHandler0.value = onClick(button0, buttonText);
  }
});

watch(
  () => [button0.value],
  ([button0]) => {
    if (!button0.value && actionHandler0.value) {
      actionHandler0.value?.destroy();
      actionHandler0.value = null;
    } else if (button0.value && !actionHandler0.value) {
      if (button0.value) {
        actionHandler0.value = onClick(button0, buttonText);
      }
    }
  },
  { immediate: true },
);
watch(
  () => [buttonText.value],
  ([buttonText]) => {
    actionHandler0.value?.update(buttonText.value);
  },
  { immediate: true },
);
function onClick(node, args) {
  console.log('Mounted', node);
  return {
    update() {
      console.log('Updated', args);
    },
    destroy() {
      console.log('Destroyed', node);
    },
  };
}
</script>
