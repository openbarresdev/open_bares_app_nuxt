<template>
  <div class="bg-white rounded-xl border p-4 space-y-3">

    <h3 class="text-lg font-semibold text-primary mb-3">
        Government Evaluation
    </h3>

    <h4 class="font-semibold text-primary mt-4">Incentives</h4>
    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Number of Incentives" :value="incentives?.selectedIncentives" />
        <CommonInfoRow label="Other Incentive" :value="incentives?.otherIncentive" />
    </div>
    <CommonInfoRow label="Other Details" :text-area="true" :value="incentives?.otherDetails" />

    <h4 class="font-semibold text-primary">Economic Impact</h4>
    <CommonInfoRow label="Employment Creation" :value="economicImpact?.employmentCreation" />
    <CommonInfoRow label="Technology Transfer" :value="economicImpact?.technologyTransfer" />
    <CommonInfoRow label="Skills Development" :text-area="true" :value="economicImpact?.skillsDevelopment" />
    <CommonInfoRow label="Export Earnings" :value="economicImpact?.exportEarnings" />
    <CommonInfoRow label="Import Substitution" :value="economicImpact?.importSubstitution" />
    <CommonInfoRow label="Other Benefits" :text-area="true" :value="economicImpact?.otherBenefits" />

    <h4 class="font-semibold text-primary mt-4">Regulatory Environment</h4>
    <CommonInfoRow label="Capital Entry Conditions" :text-area="true" :value="regulatoryEnvironment?.capitalEntryConditions" />
    <CommonInfoRow label="Repatriation Conditions" :text-area="true" :value="regulatoryEnvironment?.capitalRepatriationConditions" />
    <CommonInfoRow label="Exchange Control Regulations" :text-area="true" :value="regulatoryEnvironment?.exchangeControlRegulations" />
    <CommonInfoRow label="Other Relevant Regulations" :text-area="true" :value="regulatoryEnvironment?.otherRelevantRegulations" />
  
  </div>
</template>

<script setup>
defineProps({
   economicImpact: {
       type: Object,
       required: true
    },
    incentives: {
         type: Object,
         required: true
    },
    regulatoryEnvironment: {
         type: Object,
         required: true
    } 
})
</script>
