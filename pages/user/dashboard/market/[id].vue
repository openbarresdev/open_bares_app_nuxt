<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const componentMap = {
  'target-market': defineAsyncComponent(() => import('~/components/market/TargetMarket.vue')),
  'market-environment': defineAsyncComponent(() => import('~/components/market/MarketEnvironment.vue')),
  'production-and-sales-projections': defineAsyncComponent(() => import('~/components/market/ProductionSalesProjections.vue')),
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