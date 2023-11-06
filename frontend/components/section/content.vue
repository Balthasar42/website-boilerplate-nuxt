<template>
  <div class="py-8 relative text-center">
    <UContainer>
      <h2>
        {{ section.title }}
      </h2>
      <div class="prose" v-html="$markdown.render(section.content)" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface ContentProps {
  id: string;
  title: string;
  content: string;
}

defineProps({
  section: {
    type: Object as PropType<ContentProps>,
    default: () => null
  }
})
</script>
