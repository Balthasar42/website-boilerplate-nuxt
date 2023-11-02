<template>
  <div>
    {{ slug }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { slug } = route.params
</script>