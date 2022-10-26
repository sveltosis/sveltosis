<template>
	<div>Is disabled? {{ disabled }}</div>
</template>

<script setup lang="ts">
import { inject, provide, ref } from 'vue';

const activeTab = ref(0);

const disabled = inject('disabled');

provide('activeTab', activeTab.value);
</script>
