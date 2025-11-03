<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const componentMap = {
  'government-incentives': defineAsyncComponent(() => import('~/components/pages/support/GovernmentIncentives.vue')),
  'economic-development-impact': defineAsyncComponent(() => import('~/components/pages/support/EconomicDevelopmentImpact.vue')),
  'regulatory-environment': defineAsyncComponent(() => import('~/components/pages/support/RegulatoryEnvironment.vue')),
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