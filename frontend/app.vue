<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(1.05);
  filter: blur(.5rem);
}

.page-leave-to {
  opacity: 0;
  transform: scale(1.05);
  filter: blur(.5rem);
}
</style>
