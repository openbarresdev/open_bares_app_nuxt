<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const componentMap = {
  'sponsor-information': defineAsyncComponent(() => import('~/components/pages/sponsorship/Information.vue')),
  'sponsor-business-history': defineAsyncComponent(() => import('~/components/pages/sponsorship/BusinessHistory.vue')),
  'management-structure': defineAsyncComponent(() => import('~/components/pages/sponsorship/StructureManagement.vue')),
  'technical-assistance': defineAsyncComponent(() => import('~/components/pages/sponsorship/TechnicalAssistance.vue')),
}

const currentComponent = computed(() => {
  return componentMap[id] || null
})

if (!componentMap[id]) {
  throw createError({
    statusCode: 404,
    message: 'Page not found'
  })
}
</script>