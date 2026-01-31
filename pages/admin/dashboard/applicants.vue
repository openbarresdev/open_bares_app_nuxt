<template>
    <div>
        <CommonPageHeading title="Applicants list" />
        <div class="w-full overflow-x-auto my-4 py-2 border-2 rounded-xl border-zinc-200">
            <table class="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Sector</th>
                        <th>Country</th>
                        <th>Email</th>
                        <th class="text-center">Docs</th>
                        <th>Status / Progress</th>
                        <th class="text-end">Application Date</th>
                    </tr>
                </thead>

                <tbody class="text-black">
                    <template v-for="user in applicants" :key="user.id">
                        <!-- ligne principale -->
                        <tr class="row-hover cursor-pointer"
                            :class="{ 'bg-primary text-white hover:bg-primary hover:text-white row-none': expandedUserId === user.id }"
                            @click="userDetails(user.id)">
                            <td>{{ user.project?.companyName || '—' }}</td>
                            <td class="capitalize">{{ user.project?.industrialSector || '—' }}</td>
                            <td>{{ user.project?.country || '—' }}</td>
                            <td>{{ user.email }}</td>
                            <td class="text-center">
                                {{ user.project?.documents?.documents?.length ?? 0 }}
                            </td>

                            <td>
                                <span class="badge badge-soft"
                                    :class="getProgress(user.id) === 100 ? 'badge-success' : 'badge-warning'">
                                    {{ getProgress(user.id) }}%
                                </span>

                            </td>
                            <td class="text-end">
                                {{ formatDate(user.project?.createdAt || user.createdAt) }}
                            </td>
                        </tr>
                            
                        <!-- ligne details -->
                        <tr v-if="expandedUserId === user.id">
                            <td colspan="7" class="bg-zinc-100 p-4">
                                <div :id="`print-${user.id}`">
                                    <div class="flex items-center justify-between mb-4">
                                        <h3 class="font-bold text-2xl text-primary">Application Details</h3>

                                        <button class="btn btn-sm mt-2" @click.stop="printSection(user.id)">
                                            <icon class="icon-[tabler--printer] text-white"></icon>
                                        </button>
                                    </div>

                                    <div class="flex items-center justify-start w-full overflow-hidden gap-2">
                                        <span @click="loadUserDetails(steps, user.id, user.project?.id)"
                                            v-for="(steps) in stepsSections"
                                            class="w-30 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer py-2 px-4 capitalize text-medium text-center">
                                            {{ steps }}
                                        </span>
                                    </div>

                                    <div v-if="expandedSteps === 'sponsorship'">sponsored</div>
                                    <div v-else-if="expandedSteps === 'market'"></div>
                                    <div v-else-if="expandedSteps === 'technical'"></div>
                                    <div v-else-if="expandedSteps === 'investment'"></div>
                                    <div v-else-if="expandedSteps === 'government'"></div>
                                    <div v-else-if="expandedSteps === 'timeline'"></div>
                                    <div v-else-if="expandedSteps === 'documents'"></div>
                                    <div v-else>
                                        <!-- {{ profileStore.applicant?.project }} -->
                                        Profile
                                    </div>



                                </div>
                            </td>
                        </tr>

                        <tr v-if="loading">
                            <td colspan="7" class="text-center py-6 text-zinc-500">
                                No applicants found
                            </td>
                        </tr>
                    </template>
                </tbody>

            </table>
        </div>

        <div v-if="loading" class="text-center py-4">
            Loading applicants...
        </div>
       
        <div v-if="error" class="text-red-500 py-2">
            {{ error }}
        </div>
    </div> 
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAdminApplicantsStore } from '@/stores/adminApplicants';
import { useStepStore } from '@/stores/useStepStore';

const stepStore = useStepStore();

const stepsSections = [
    'profile',
    'sponsorship',
    'market',
    'technical',
    'investment',
    'government',
    'timeline',
    'documents',
]

const steps = ref(null);

const { checkAuth } = useAuth();

const store = useAdminApplicantsStore();


const { applicants, loading, error } = storeToRefs(store);

const expandedUserId = ref(null)
const expandedSteps = ref(null)

onMounted(async () => {
    await checkAuth();
    await checkAuth();
    store.fetchApplicants();

    for (const user of store.applicants) {
        if (user.id && user.project?.id) {
            store.fetchApplicationSettings(user.id)
        if (user.id && user.project?.id) {
            store.fetchApplicationSettings(user.id)
        }
    }
    }
})

const getProgress = (userId) => {
    
    const steps = store.applicationSettingsMap[userId]?.steps
    if (!steps || typeof steps !== 'object') return 0

    
    const values = Object.values(steps)
    if (!values.length) return 0

    const completed = values.filter(Boolean).length
    return Math.round((completed / values.length) * 100)
}

const formatDate = (date) => {
    if (!date) return '—'
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
   
}


const userDetails = async (userId) => {
    expandedUserId.value =
        expandedUserId.value === userId ? null : userId
}

// const applicantStepsData = ref({})
const sponsorshipData = ref({
    technicalAssistance: {},
    structureManagementDesc: {},
    sponsorInfo: {},
    sponsorBusinessHist: {},

})

const marketData = ref({
    targetMarket: {},
    productionAndSales: {},
    marketEnvironment: {},
})

const technicalData = ref({
    environmentalImpact: {},
    humanResources: {},
    infrastructure: {},
    operatingCosts: {},
    plantLocationSize: {},
    rawMaterials: {},
    technicalComplexity: {},

})
const investmentData = ref({
    successFactors: {},
    financialProjections: {},
    financingType: {},
    financingStructure: {},
    totalInvestment: {},
})

const governmentData = ref({
    economicImpact: {},
    incentives: {}, 
    regulatoryEnvironment: {},
})

const timelineData = ref({ implementationSchedule: {} })

// const documentsData = ref({ documents: [] })


const loadUserDetails = async (step, userId, projectId) => {
    expandedSteps.value =
        expandedSteps.value === step ? null : step

    try {
        if (projectId) {
            await stepStore.fetchStep(step, projectId);
            switch (step) {
                case 'profile':
                

                    break;
                case 'sponsorship':
                    // Handle sponsorship step
                    sponsorshipData.value = {
                        technicalAssistance: stepStore.state?.technicalAssistance || {},
                        structureManagementDesc: stepStore.state?.structureManagementDesc || {},
                        sponsorInfo: stepStore.state?.sponsorInfo || {},
                        sponsorBusinessHist: stepStore.state?.sponsorBusinessHist || {},
                    }
                    console.log('stepStore sponsorship', sponsorshipData.value);

                    break;

                case 'market':
                    // Handle market step
                    marketData.value = {
                        targetMarket: stepStore.state?.targetMarket || {},
                        productionAndSales: stepStore.state?.productionAndSales || {},
                        marketEnvironment: stepStore.state?.marketEnvironment || {},
                    }

                    console.log('stepStore market', marketData.value);

                    break;
                case 'technical':
                    // Handle technical step
                    technicalData.value = {
                        environmentalImpact: stepStore.state?.environmentalImpact || {},
                        humanResources: stepStore.state?.humanResources || {},
                        infrastructure: stepStore.state?.infrastructure || {},
                        operatingCosts: stepStore.state?.operatingCosts || {},
                        plantLocationSize: stepStore.state?.plantLocationSize || {},
                        rawMaterials: stepStore.state?.rawMaterials || {},
                        technicalComplexity: stepStore.state?.technicalComplexity || {},
                    }
                    break;
                case 'investment':
                    // Handle investment step
                    investmentData.value = {
                        successFactors: stepStore.state?.successFactors || {},
                        financialProjections: stepStore.state?.financialProjections || {},
                        financingType: stepStore.state?.financingType || {},
                        financingStructure: stepStore.state?.financingStructure || {},
                        totalInvestment: stepStore.state?.totalInvestment || {},
                    }

                    break;
                case 'government':
                    // Handle government step
                    governmentData.value = {
                        economicImpact: stepStore.state?.economicImpact || {},
                        incentives: stepStore.state?.incentives || {},
                        regulatoryEnvironment: stepStore.state?.regulatoryEnvironment || {},
                    }

                    break;
                case 'timeline':
                    // Handle timeline step
                    timelineData.value = {
                        implementationSchedule: stepStore.state?.implementationSchedule || {},
                    }

                    break;
                case 'documents':
                    // Handle documents step
                    // documentsData.value = {
                    //     documents: stepStore.state?.documents || [],
                    // }

                    break;

                default:
                    break;
            }

        }
    } catch (error) {
        console.error('Failed to load step data:', error);
    }
}

const printSection = (userId) => {
    const el = document.getElementById(`print-${userId}`)
    if (!el) return

    const printWindow = window.open('', '', 'width=900,height=600')
    printWindow.document.write(`
    <html>
      <head>
        <title>Application</title>
        <style>
          body { font-family: sans-serif; padding: 20px; }
        </style>
      </head>
      <body>
        ${el.innerHTML}
      </body>
    </html>
  `)

    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
    printWindow.close()
}

</script>