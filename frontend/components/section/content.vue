<template>
  <UContainer>
    <h2>{{ section.title }}</h2>
    <div class="prose" v-html="$markdown.render(section.content)" />
  </UContainer>
</template>

<script setup lang="ts">
interface ContentProps {
  id: string;
  title: string;
  content: string;
  // picture: Picture;
  // buttons: Button[];
}

defineProps({
  section: {
    type: Object as PropType<ContentProps>,
    default: () => null
  }
})
</script>
