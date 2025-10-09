<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const componentMap = {
  'sponsor-information': defineAsyncComponent(() => import('~/components/sponsorship/Information.vue')),
  'sponsor-business-history': defineAsyncComponent(() => import('~/components/sponsorship/BusinessHistory.vue')),
  'management-structure': defineAsyncComponent(() => import('~/components/sponsorship/StructureManagement.vue')),
  'technical-assistance': defineAsyncComponent(() => import('~/components/sponsorship/TechnicalAssistance.vue')),
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