<template>
  <Html lang="de" class="h-full">

  <Body class="h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>

  </Html>
</template>

<script setup lang="ts">
const appName = "Breeze";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appName}` : appName;
  }
})
</script>