<template>
  <NuxtLayout>
    <section>
      <UContainer>
        <div class="prose">
          <template v-if="is404">
            <h1>404!</h1>
            <p>Sorry, that page doesn't exist.</p>
          </template>
          <template v-else>
            <h1>Dang</h1>
            <p>
              <strong>{{ message }}</strong>
            </p>
            <p>It looks like something broke.</p>
            <p>Sorry about that.</p>
          </template>
          <p>
            Go back to your
            <a @click="handleError">
              Startpage
            </a>
          </p>
        </div>
      </UContainer>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
// const { error} = useError()

const props = defineProps({
  error: Object
})

const message = computed(() => String(props.error?.message || ""))
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes("404"))

useSeoMeta({
  title: props.error?.message,
  ogTitle: props.error?.message
  // description: error
  // ogDescription: error
})

const handleError = () => clearError({ redirect: "/" })
</script>
