<template>
  <div class="py-8 relative text-center">
    <UContainer>
      <h2>{{ section.title }}</h2>
      <div class="py-4 grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
        <ElementFeature v-for="feature in filteredFeatures" :key="feature.id" :feature="feature" />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface SectionProps {
  id: string;
  title: string;
  features: any[];
}

const props = defineProps({
  section: {
    type: Object as PropType<SectionProps>,
    default: () => null
  }
})

// TODO Computed filter
const filteredFeatures = computed(() =>
  props.section.features.filter(obj => Object.keys(obj).length > 0)
)
</script>
