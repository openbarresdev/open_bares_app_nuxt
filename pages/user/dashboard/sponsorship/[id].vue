<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const componentMap = {
  '1': defineAsyncComponent(() => import('~/components/sponsorship/BusinessHistory.vue')),
  '2': defineAsyncComponent(() => import('~/components/sponsorship/Information.vue')),
  '3': defineAsyncComponent(() => import('~/components/sponsorship/StructureManagement.vue')),
  '4': defineAsyncComponent(() => import('~/components/sponsorship/TechnicalAssistance.vue')),
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