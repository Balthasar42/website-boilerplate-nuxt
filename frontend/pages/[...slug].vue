<template>
  <main>
    <Sections :items="page.sections" />
  </main>
</template>

<script setup lang="ts">
const { findOne } = useStrapi()
const route = useRoute()
const { slug } = route.params

const { data: page } = await useAsyncData(
  "pages",
  () => findOne("pages", { filters: { slug } }),
  {
    transform: (data: any) => {
      if (data.data[0]) {
        return data.data[0].attributes
      } else {
        return null
      }
    }
  }
)

useSeoMeta({
  title: page.value?.seo?.metaTitle,
  ogTitle: page.value?.seo?.metaTitle,
  description: page.value?.seo?.metaDescription,
  ogDescription: page.value?.seo?.metaDescription
})

if (!page.value) {
  throw createError({ statusCode: 404 })
}
</script>
