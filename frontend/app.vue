<template>
  <!-- <Html lang="de" class="h-full">
    <Body class="h-full"> -->
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
  <!-- </Body>
  </Html> -->
</template>

<script setup lang="ts">
// import { FALLBACK_SEO } from "@/utils/contants"
// useHead({
//   htmlAttrs: {
//     lang: "en"
//   },
//   link: [
//     {
//       rel: "icon",
//       type: "image/png",
//       href: "/favicon.png"
//     }
//   ],
//   titleTemplate: (titleChunk) => {
//     return titleChunk
//       ? `${titleChunk} - ${FALLBACK_SEO.title}`
//       : FALLBACK_SEO.title
//   }
// })
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
