<script setup lang="ts">
const date = useLocaleDate(new Date(`2022-01-01`));
</script>

<template>
  <div>{{ date }}</div>
</template>
