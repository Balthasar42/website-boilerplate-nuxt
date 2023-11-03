<template>
  <footer>
    <UContainer> FOOTER </UContainer>
    <!-- <div>

      <nav class="gap-6 flex">

        <div v-for="link in links">
          <NuxtLink>
            {{ link }}
          </NuxtLink>
        </div>
      </nav>

    </div> -->
  </footer>
</template>

<script lang="ts" setup>
import type { PropType } from "vue"
import type { LinksIntern } from "../../backend/types/generated/components"

defineProps({
  links: {
    type: Array as PropType<LinksIntern[]>,
    default: () => null,
  },
})
</script>
