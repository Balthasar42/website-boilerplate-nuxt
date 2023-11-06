<template>
  <div class="flex flex-col gap-4">
    <section v-for="section in sections" :key="section?.index">
      <component :is="section?.type" :section="section?.data" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { SectionHero, SectionContent } from "#components"

const props = defineProps({
  items: {
    type: Array as PropType<any[]>,
    default: () => null
  }
})

const sections = computed(() =>
  props.items.map((section: any, index: number) => sectionRenderer(section, index))
)

function sectionRenderer (section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return { type: SectionHero, index, data: section }
    case "sections.content":
      return { type: SectionContent, index, data: section }
    default:
      return null
  }
}
</script>
