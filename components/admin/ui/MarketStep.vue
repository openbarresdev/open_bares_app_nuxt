<template>
  <div class="bg-white rounded-xl border p-4 space-y-3">

    <h3 class="text-lg font-semibold text-primary mb-3">
      Market Analysis
    </h3>

    <h4 class="font-semibold text-primary">Target Market</h4>
  <CommonInfoRow label="Primary Customers" :value="targetMarket?.primaryCustomers" />
  <CommonInfoRow label="Distribution Channels" :value="targetMarket?.distributionChannels" />

  <h4 class="font-semibold text-primary mt-4">Market Environment</h4>
  <CommonInfoRow label="Source of Supply" :value="marketEnvironment?.sourceOfSupply" />
  <CommonInfoRow label="Main Competitors" :value="marketEnvironment?.mainCompetitors" />
  <CommonInfoRow label="Import Restrictions" :value="marketEnvironment?.importRestrictions" />
  <CommonInfoRow label="Market Substitution" :value="marketEnvironment?.marketSubstitution" />
  <CommonInfoRow label="Critical Factors" :value="marketEnvironment?.criticalFactors" />

  <h4 class="font-semibold text-primary mt-4">Production & Sales (Year 1)</h4>
  <CommonInfoRow label="Production Volume" :value="productionAndSales.yearOne?.productionVolume" />
  <CommonInfoRow label="Unit Price" :value="productionAndSales.yearOne?.unitPrice" />
  <CommonInfoRow label="Total Revenue" :value="productionAndSales.yearOne?.totalRevenue" />
  <CommonInfoRow label="Net Profit" :value="productionAndSales.yearOne?.netProfit" />

  <h4 class="font-semibold text-primary mt-4">Production & Sales (Year 2)</h4>
  <CommonInfoRow label="Production Volume" :value="productionAndSales.yearTwo?.productionVolume" />
  <CommonInfoRow label="Unit Price" :value="productionAndSales.yearTwo?.unitPrice" />
  <CommonInfoRow label="Total Revenue" :value="productionAndSales.yearTwo?.totalRevenue" />
  <CommonInfoRow label="Net Profit" :value="productionAndSales.yearTwo?.netProfit" />

  <h4 class="font-semibold text-primary mt-4">Production & Sales (Year 3)</h4>
  <CommonInfoRow label="Production Volume" :value="productionAndSales.yearThree?.productionVolume" />
  <CommonInfoRow label="Unit Price" :value="productionAndSales.yearThree?.unitPrice" />
  <CommonInfoRow label="Total Revenue" :value="productionAndSales.yearThree?.totalRevenue" />
  <CommonInfoRow label="Net Profit" :value="productionAndSales.yearThree?.netProfit" />

  </div>
</template>

<script setup>
defineProps({
  targetMarket: {
    type: Object,
    required: true,
  },
  productionAndSales: {
    type: Object,
    required: true,
  },
  marketEnvironment: {
    type: Object,
    required: true,
  },  
})
</script>
