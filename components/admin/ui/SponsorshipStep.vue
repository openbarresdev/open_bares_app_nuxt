<template>
  <div class="bg-white rounded-xl border p-4 space-y-3">

    <h3 class="text-lg font-semibold text-primary mb-3">
      Sponsorship
    </h3>

    <h4 class="font-semibold text-primary">Sponsor Information</h4>
    <CommonInfoRow label="Sponsor" :value="sponsorInfo?.sponsor" />
    <CommonInfoRow label="Registration Number" :value="sponsorInfo?.regnumber" />
    <CommonInfoRow label="Country of Incorporation" :value="sponsorInfo?.countryOfIncorporation" />
    <CommonInfoRow label="Legal Structure" :value="sponsorInfo?.legalStructure" />
    <CommonInfoRow label="Date of Incorporation" :value="formatDate(sponsorInfo?.dateOfIncorporation)" />

    <h4 class="font-semibold text-primary mt-4">Business History</h4>
    <CommonInfoRow label="Project Description" :text-area="true" :value="sponsorBusinessHist?.projectDescription" />
    <CommonInfoRow label="Net Worth" :value="sponsorBusinessHist?.netWorth" />
    <CommonInfoRow label="Total Assets" :value="sponsorBusinessHist?.totalAssets" />
    <CommonInfoRow label="1st Year Revenue" :value="sponsorBusinessHist?.firstYearRevenue" />
    <CommonInfoRow label="2nd Year Revenue" :value="sponsorBusinessHist?.secondYearRevenue" />
    <CommonInfoRow label="3rd Year Revenue" :value="sponsorBusinessHist?.thirdYearRevenue" />

    <h4 class="font-semibold text-primary mt-4">Management Structure</h4>
    <CommonInfoRow label="CEO Name" :value="structureManagementDesc?.ceoName" />
    <CommonInfoRow label="CEO Experience" :value="structureManagementDesc?.ceoYearExperience" />
    <CommonInfoRow label="CEO Education" :value="structureManagementDesc?.ceoEducationDegree" />
    <CommonInfoRow label="CEO Previous Position" :value="structureManagementDesc?.ceoPreviousPosition" />

    <h4 class="font-semibold text-primary mt-4">Technical Assistance Needed</h4>
    <CommonInfoRow label="Financial Assistance" :text-area="true" :value="technicalAssistance?.financialAssist" />
    <CommonInfoRow label="Management Assistance" :text-area="true" :value="technicalAssistance?.managementAssist" />
    <CommonInfoRow label="Marketing Assistance" :text-area="true" :value="technicalAssistance?.marketingAssist" />
    <CommonInfoRow label="Production Assistance" :text-area="true" :value="technicalAssistance?.productionAssist" />
    <CommonInfoRow label="Other Assistance" :text-area="true" :value="technicalAssistance?.others" />
  </div>
</template>

<script setup>
defineProps({
   technicalAssistance: {
    type: Object,
    required: true,
  },
  structureManagementDesc: {
    type: Object,
    required: true,
  },
  sponsorInfo: {
    type: Object,
    required: true,
  },
  sponsorBusinessHist: {
    type: Object,
    required: true,
  },    
})

const formatDate = (date) => {
    if (!date) return '—'
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}
</script>
