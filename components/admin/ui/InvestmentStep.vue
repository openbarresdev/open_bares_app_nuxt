<template>
  <div class="bg-white rounded-xl border p-4 space-y-3">

    <h3 class="text-lg font-semibold text-primary mb-3">
      
    </h3>

    <h4 class="font-semibold text-primary mt-4">totalInvestment</h4>
    <CommonInfoRow label="Buildings & Infrastructure" :value="totalInvestment?.buildingsInfrastructure" />
    <CommonInfoRow label="Contingency" :value="totalInvestment?.contingency" />
    <CommonInfoRow label="Land & Site Preparation" :value="totalInvestment?.landSitePreparation" />
    <CommonInfoRow label="Machinery & Equipment" :value="totalInvestment?.machineryEquipment" />
    <CommonInfoRow label="Pre-Operating Expenses" :value="totalInvestment?.preOperatingExpenses" />
    <CommonInfoRow label="Total Project Cost" :value="totalInvestment?.totalProjectCost" />
    <CommonInfoRow label="Working Capital" :value="totalInvestment?.workingCapital" />

    <h4 class="font-semibold text-primary mt-4">Financing Structure</h4>
    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Sponsor Equity" :value="financingStructure?.sponsorEquityAmount" />
        <CommonInfoRow label="Sponsor Equity Percentage" :value="financingStructure?.sponsorEquityPercentage" />
    </div>

    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Requested Financing" :value="financingStructure?.requestedFinancingAmount" />
        <CommonInfoRow label="Requested Financing Percentage" :value="financingStructure?.requestedFinancingPercentage" />
    </div>
    
    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Government Grants Amount" :value="financingStructure?.governmentGrantsAmount" />
        <CommonInfoRow label="Government Grants Percentage" :value="financingStructure?.governmentGrantsPercentage" />
    </div>

    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Others Amount" :value="financingStructure?.othersAmount" />
        <CommonInfoRow label="Others Percentage" :value="financingStructure?.othersPercentage" />
    </div>

    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Total Amount" :value="financingStructure?.totalAmount" />
        <CommonInfoRow label="Total Percentage" :value="financingStructure?.totalPercentage" />
    </div>

    <h4 class="font-semibold text-primary mt-4">Financing Types</h4>
    <CommonInfoRow label="Type of Financing" :value="financingType?.financingTypes" />
    <CommonInfoRow label="Interest Rate" :value="financingType?.interestRatePercentage" />
    <CommonInfoRow label="Grace Period" :value="financingType?.gracePeriodMonths" />
    <CommonInfoRow label="Repayment Period" :value="financingType?.repaymentPeriodMonths" />

    <h4 class="font-semibold text-primary">Financial Projections</h4>
    <div class="flex items-center gap-4 w-full">        
        <CommonInfoRow label="Year 1 Revenue" :value="financialProjections?.year1Revenue" />
        <CommonInfoRow label="Year 1 Net Profit" :value="financialProjections?.year1NetProfit" />
        <CommonInfoRow label="Year 1 Operating Profit" :value="financialProjections?.year1OperatingProfit" />
        <CommonInfoRow label="Year 1 ROI" :value="financialProjections?.year1RoiPercentage" />
        <CommonInfoRow label="Year 1 ROE" :value="financialProjections?.year1RoePercentage" />
    </div>

    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Year 2 Revenue" :value="financialProjections?.year2Revenue" />
        <CommonInfoRow label="Year 2 Net Profit" :value="financialProjections?.year2NetProfit" />
        <CommonInfoRow label="Year 2 Operating Profit" :value="financialProjections?.year2OperatingProfit" />
        <CommonInfoRow label="Year 2 ROI" :value="financialProjections?.year2RoiPercentage" />
        <CommonInfoRow label="Year 2 ROE" :value="financialProjections?.year2RoePercentage" />
    </div>

    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Year 3 Revenue" :value="financialProjections?.year3Revenue" />
        <CommonInfoRow label="Year 3 Net Profit" :value="financialProjections?.year3NetProfit" />
        <CommonInfoRow label="Year 3 Operating Profit" :value="financialProjections?.year3OperatingProfit" />
        <CommonInfoRow label="Year 3 ROI" :value="financialProjections?.year3RoiPercentage" />
        <CommonInfoRow label="Year 3 ROE" :value="financialProjections?.year3RoePercentage" />
    </div>

    <h4 class="font-semibold text-primary mt-4">success Factors</h4>
    <CommonInfoRow label="Key Success Factors" :text-area="true" :value="successFactors?.keyFactors" />     
    </div>
</template>

<script setup>
defineProps({
     successFactors: {
      type: Object,
        required: true,
    },
    financialProjections: {
      type: Object,
        required: true,
    },
    financingType: {
      type: Object,
        required: true,
    },
    financingStructure: {
      type: Object,
        required: true,
    },
    totalInvestment: {
      type: Object,
        required: true,
    },
})
</script>
