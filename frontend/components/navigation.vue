<template>
  <div>
    <div>
      <NuxtLink href="/" class="inline-flex items-center text-2xl font-bold md:text-3xl" :aria-label="appName">
        {{ appName }}
      </NuxtLink>

      <nav class="gap-6 flex">
        <NuxtLink v-for="link in links" :to="link.page.data.attributes.slug">
          {{ link.title || link.page.data.attributes.title }}
        </NuxtLink>
      </nav>

      <!-- <pre>
        {{ links }}
      </pre> -->

    </div>
  </div>
</template>

<script lang="ts" setup>
// import type { LinksIntern } from "../../backend/types/generated/components"
// import type { PropType } from 'vue'
const appName = ref("Home");

defineProps({
  links: {
    // type: Array as PropType<LinksIntern[]>,
    type: Array as PropType<any[]>,
    default: () => null
  }
})

</script>