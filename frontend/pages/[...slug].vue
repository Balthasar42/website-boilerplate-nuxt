<template>
  <div>
    {{ slug }}
    <hr />
    <pre>
      {{ page }}
    </pre>
  </div>
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
    },
  },
)

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
})

// if (!page.value) {
//   throw createError({ statusCode: 404 })
// }
</script>
