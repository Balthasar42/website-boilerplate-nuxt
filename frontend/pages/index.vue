<template>
  <UContainer>
    <h1 class="text-primary-400">Index</h1>
  </UContainer>
</template>

<script setup lang="ts">
import { FALLBACK_SEO } from "@/utils/contants"

useSeoMeta({
  title: "Startpage",
  ogTitle: "Startpage",
  description: FALLBACK_SEO.description,
  ogDescription: FALLBACK_SEO.description,
})
</script>
