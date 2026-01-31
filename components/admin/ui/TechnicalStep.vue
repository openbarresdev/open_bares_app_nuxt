<template>
  <div class="bg-white rounded-xl border p-4 space-y-3">

    <h3 class="text-lg font-semibold text-primary mb-3">
      Technical Evaluation
    </h3>

    <h4 class="font-semibold text-primary">Human Resources</h4>
    <CommonInfoRow label="Total Employment" :value="humanResources?.totalEmployment" />
    <CommonInfoRow label="Management Positions" :value="humanResources?.mangtPositionNumber" />
    <CommonInfoRow label="Skilled Workers" :value="humanResources?.techSkilledWorkersNumber" />
    <CommonInfoRow label="Unskilled Workers" :value="humanResources?.unskilledWorkersNumber" />
    <CommonInfoRow label="Available Skills Required" :value="humanResources?.availableSkillsRequired" />

    <h4 class="font-semibold text-primary mt-4">Infrastructure</h4>
    <CommonInfoRow label="Power Supply" :value="infrastructure?.powerSupplyStatus" />
    <CommonInfoRow label="Water Supply" :value="infrastructure?.waterSupplyStatus" />
    <CommonInfoRow label="Transportation" :value="infrastructure?.transportationStatus" />
    <CommonInfoRow label="Communications" :value="infrastructure?.communicationsStatus" />

    <h4 class="font-semibold text-primary mt-4">Environmental Impact</h4>
    <CommonInfoRow label="Environmental Issues" :value="environmentalImpact?.environmentalIssuesDesc" />
    <CommonInfoRow label="Mitigation Measures" :value="environmentalImpact?.mitigationMeasuresDesc" />
    <CommonInfoRow label="Social Benefits" :value="environmentalImpact?.socialBenefitsDesc" />

    <h4 class="font-semibold text-primary mt-4">Operating Costs</h4>
    <CommonInfoRow label="Administration Costs" :value="operatingCosts?.administrationCosts" />
    <CommonInfoRow label="Maintenance Costs" :value="operatingCosts?.maintenanceCosts" />
    <CommonInfoRow label="Other Operating Costs" :value="operatingCosts?.otherCosts" />
    <CommonInfoRow label="Marketing Costs" :value="operatingCosts?.marketingCosts" />
    <CommonInfoRow label="Raw Material Costs" :value="operatingCosts?.rawMaterialCosts" />
    <CommonInfoRow label="Utilities Costs" :value="operatingCosts?.utilitiesCosts" />
    <CommonInfoRow label="Total Operating Costs" :value="operatingCosts?.totalOperatingCosts" />
    
    <h4 class="font-semibold text-primary mt-4">plantLocationSize</h4>
    <CommonInfoRow label="Infrastructure Location" :value="plantLocationSize?.infrastructureLocation" />
    <CommonInfoRow label="Markets Location" :value="plantLocationSize?.marketsLocation" />
    <CommonInfoRow label="Plant Size" :value="plantLocationSize?.plantSize" />
    <CommonInfoRow label="Suppliers Location" :value="plantLocationSize?.suppliersLocation" />
    <CommonInfoRow label="Workforce Location" :value="plantLocationSize?.workforceLocation" />

    <h4 class="font-semibold text-primary mt-4">Raw Materials</h4>
    <CommonInfoRow label="Import Restrictions" :value="rawMaterials?.importRestrictions" />
    <CommonInfoRow label="Quality Assurance Measures" :value="rawMaterials?.qualityAssuranceMeasures" />
    <CommonInfoRow label="Source of Raw Materials" :value="rawMaterials?.sourceRawMaterials" />
    
    <h4 class="font-semibold text-primary mt-4">Technical Complexity</h4>
    <CommonInfoRow label="Special Technical Complexities" :value="technicalComplexity?.specialTechComplexitiesDesc" />
    <CommonInfoRow label="Key Equipment Description" :value="technicalComplexity?.keyEquipementDesc" />

  </div>
</template>

<script setup>
defineProps({
  environmentalImpact: {
    type: Object,
    required: true,
    },
    humanResources: {
    type: Object,
    required: true,
    },  
    infrastructure: {
    type: Object,
    required: true,
    },
    operatingCosts: {
    type: Object,
    required: true,
    },
    plantLocationSize: {
    type: Object,
    required: true,
    },
    rawMaterials: {
    type: Object,
    required: true,
    },
    technicalComplexity: {
      type: Object,
      required: true,
  }
})
</script>
