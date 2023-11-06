<template>
  <div>
    <div v-if="pending">
      Loading...
    </div>

    <Navigation :links="global?.navigation?.links" />

    <!-- <pre>{{ global }}</pre> -->
    <slot />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { FALLBACK_SEO } from "@/utils/contants"

const { find } = useStrapi()
const { data: global, pending } = await useAsyncData(
  "global",
  () =>
    find("global", {
      populate: [
        "navigation.links",
        "navigation.links.page",
        "footer.links",
        "footer.links.page"
      ]
    }),
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

useHead({
  htmlAttrs: {
    lang: "en"
  },
  // link: [
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     href: "/favicon.png"
  //   }
  // ],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${FALLBACK_SEO.title}`
      : FALLBACK_SEO.title
  }
})
</script>
