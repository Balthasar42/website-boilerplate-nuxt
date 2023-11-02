<template>
  <div v-if="pending">
    Loading...
  </div>

  <Navigation :links="global?.navigation?.links" />

  <main>
    <!-- <pre>{{ global }}</pre> -->
    <slot />
  </main>

  <Footer :links="global?.footer" />
</template>

<script setup lang="ts">
const { find } = useStrapi()
const { data: global, pending, refresh, error } = await useAsyncData(
  'global',
  () => find("global", { populate: ["navigation.links", "navigation.links.page", "footer.links", "footer.links.page"] }), {
  transform: (data: any) => {
    if (data.data) {
      return data.data.attributes
    } else { return null }
  }
}
)


</script>