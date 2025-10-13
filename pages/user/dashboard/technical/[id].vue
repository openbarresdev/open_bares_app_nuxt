<template>
  <div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const componentMap = {
  'technical-complexity': defineAsyncComponent(() => import('~/components/pagesTechnical/TechnicalComplexity.vue')),
  'human-resources': defineAsyncComponent(() => import('~/components/pagesTechnical/HumanResources.vue')),
  'infrastructure-requirements': defineAsyncComponent(() => import('~/components/pagesTechnical/InfrastructureRequirements.vue')),
  'operating-costs-annual': defineAsyncComponent(() => import('~/components/pagesTechnical/OperatingCosts.vue')),
  'raw-materials-and-supply-chain': defineAsyncComponent(() => import('~/components/pagesTechnical/RawMaterialsSupplyChain.vue')),
  'plant-location-and-size': defineAsyncComponent(() => import('~/components/pagesTechnical/PlantLocationSize.vue')),
  'environmental-and-social-impact': defineAsyncComponent(() => import('~/components/pagesTechnical/EnvironmentalSocialImpact.vue')),
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