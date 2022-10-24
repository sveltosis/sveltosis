<template>
  <user-profile
    name="John"
    :age="20"
    :favouriteColors="['green', 'blue', 'red']"
    :isAvailable="true"
  ></user-profile>
</template>

<script setup lang="ts">
import UserProfile from "./UserProfile.svelte";
</script>
