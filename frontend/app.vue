<template>
  <Html lang="de" class="h-full">
    <Body class="h-full">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
import { FALLBACK_SEO } from "@/utils/contants"
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${FALLBACK_SEO.title}`
      : FALLBACK_SEO.title
  },
})
</script>
