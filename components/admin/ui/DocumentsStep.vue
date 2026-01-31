<template>
  <div class="bg-white rounded-xl border p-4 space-y-3">

    <h3 class="text-lg font-semibold text-primary mb-3">
        Supporting Documents
    </h3>

    <div v-for="(doc, index) in documents" :doc="doc" :key="doc.id" class="flex flex-col gap-2">
        <h4 v-if="doc.docType === 'company_registration_document'" class="font-semibold text-primary">Company Registration Document</h4>
        <h4 v-if="doc.docType === 'technical_specifications'" class="font-semibold text-primary">Technical Specifications</h4>
        <h4 v-if="doc.docType === 'business_plan'" class="font-semibold text-primary">Business Plan</h4>
        <h4 v-if="doc.docType === 'financial_projections'" class="font-semibold text-primary">Financial Projections</h4>
        <h4 v-if="doc.docType === 'banking_reference'" class="font-semibold text-primary">Banking Reference</h4>
        <h4 v-if="doc.docType === 'audited_financial_statement'" class="font-semibold text-primary">Audited Financial Statement</h4>
        <h4 v-if="doc.docType === 'management_cvs'" class="font-semibold text-primary">Management CVs</h4>
        <h4 v-if="doc.docType === 'environmental_impact_assessment'" class="font-semibold text-primary">Environmental Impact Assessment</h4>
        <h4 v-if="doc.docType === 'government_approvals'" class="font-semibold text-primary">Government Approvals</h4>
        <h4 v-if="doc.docType === 'market_research_reports'" class="font-semibold text-primary">Market Research Reports</h4>
        <h4 v-if="doc.docType === 'other_document'" class="font-semibold text-primary">Other Document</h4>

        <div class="flex items-center gap-2">
            <div class="p-2 bg-blue-100 rounded w-fit">
                <span class="icon-[tabler--file] text-blue-600 size-6"></span>
            </div>
    
            <h4 class="font-medium text-gray-700">
                <a :href="doc.url" target="_blank" class="hover:underline">
                    {{ doc.originalName }}
                </a>
            </h4>
        </div>
    </div>
    
  </div>
</template>

<script setup>
defineProps({
    documents: {
         type: Array,
         required: true
     },
})
</script>
