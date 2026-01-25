<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator height="4"/>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `Crownhill Funding - Strategic Investment Partnership for Sustainable Growth` }]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>