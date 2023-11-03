<template>
  <div class="bg-white dark:bg-black">
    <UContainer>
      <header class="flex items-center justify-between py-4 md:py-8">
        <NuxtLink
          href="/"
          class="inline-flex items-center text-2xl font-bold md:text-3xl"
          :aria-label="appName"
        >
          {{ appName }}
        </NuxtLink>

        <nav class="flex gap-6 text-opacity-25">
          <NuxtLink
            v-for="link in filteredLinks"
            :key="link.id"
            :to="link.page.data.attributes.slug"
          >
            {{ link.title || link.page.data.attributes.title }}
          </NuxtLink>
        </nav>
      </header>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const appName = ref("Home")

const props = defineProps({
  links: {
    type: Array as PropType<any[]>,
    default: () => null,
  },
})

const filteredLinks = computed(() =>
  props.links.filter((link) => link.page.data),
)
</script>
