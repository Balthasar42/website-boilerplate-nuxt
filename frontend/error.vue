<template>
  <NuxtLayout>
    <section>
      <UContainer>
        <div class="prose">
          <template v-if="error?.statusCode === 404">
            <h1>404!</h1>
            <p>Sorry, that page doesn't exist.</p>
          </template>
          <template v-else>
            <h1>Dang</h1>
            <p>
              <strong>{{ error?.message }}</strong>
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
const error = useError()

useSeoMeta({
  title: error.value?.message,
  ogTitle: error.value?.message
  // description: error
  // ogDescription: error
})

const handleError = () => {
  clearError({
    redirect: "/"
  })
}
</script>
