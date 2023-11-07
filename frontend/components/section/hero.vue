<template>
  <div class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
    <img
      :src="image" :alt="
        section.image.data.attributes.alternativeText || section.image.data.attributes.name" class="absolute inset-0 h-full w-full object-cover object-center"
    >
    <div class="absolute inset-0 bg-primary-500 mix-blend-multiply" />

    <UContainer class="relative flex flex-col items-center p-4">
      <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
        {{ section.title }}
      </h1>
      <p class="mb-4 text-center text-lg text-primary-200 sm:text-xl md:mb-8">
        {{ section.description }}
      </p>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface SectionProps {
  id: string;
  title: string;
  description: string;
  image: any
}

const props = defineProps({
  section: {
    type: Object as PropType<SectionProps>,
    default: () => null
  }
})

const image = useStrapiMedia(props.section.image?.data?.attributes?.url)
</script>
