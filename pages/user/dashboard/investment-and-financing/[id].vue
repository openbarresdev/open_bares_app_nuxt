<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const componentMap = {
  'total-investment-requirements': defineAsyncComponent(() => import('~/components/pages/investment/TotalInvestmentRequirements.vue')),
  'financing-structure': defineAsyncComponent(() => import('~/components/pages/investment/FinancingStructure.vue')),
  'type-of-financing-requested': defineAsyncComponent(() => import('~/components/pages/investment/FinancingRequested.vue')),
  'financial-projections': defineAsyncComponent(() => import('~/components/pages/investment/FinancialProjections.vue')),
  'critical-success-factors': defineAsyncComponent(() => import('~/components/pages/investment/CriticalSuccessFactors.vue')),

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