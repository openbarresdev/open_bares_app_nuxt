<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const componentMap = {
  'technical-complexity': defineAsyncComponent(() => import('~/components/pages/technical/TechnicalComplexity.vue')),
  'human-resources': defineAsyncComponent(() => import('~/components/pages/technical/HumanResources.vue')),
  'infrastructure-requirements': defineAsyncComponent(() => import('~/components/pages/technical/InfrastructureRequirements.vue')),
  'operating-costs-annual': defineAsyncComponent(() => import('~/components/pages/technical/OperatingCosts.vue')),
  'raw-materials-and-supply-chain': defineAsyncComponent(() => import('~/components/pages/technical/RawMaterialsSupplyChain.vue')),
  'plant-location-and-size': defineAsyncComponent(() => import('~/components/pages/technical/PlantLocationSize.vue')),
  'environmental-and-social-impact': defineAsyncComponent(() => import('~/components/pages/technical/EnvironmentalSocialImpact.vue')),
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