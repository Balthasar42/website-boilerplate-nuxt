<template>
  <main>
    <Sections :items="home.sections" />
  </main>
</template>

<script setup lang="ts">
// import { FALLBACK_SEO } from "@/utils/contants"

const { find } = useStrapi()
const { data: home } = await useAsyncData(
  "home",
  () => find("home"),
  {
    transform: (data: any) => {
      if (data.data) {
        return data.data.attributes
      } else {
        return null
      }
    }
  }
)

useSeoMeta({
  title: home.value?.seo?.metaTitle,
  ogTitle: home.value?.seo?.metaTitle,
  description: home.value?.seo?.metaDescription,
  ogDescription: home.value?.seo?.metaDescription
})
</script>
