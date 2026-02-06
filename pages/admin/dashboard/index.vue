<template>
    <div class="lg:max-w-2xl m-1">
        <CommonPageHeading title="Home admin"/>

        <div class="grid lg:grid-cols-4 grid-cols-2 space-x-4 gap-4" >
            <NuxtLink to="/admin/dashboard/applicants" class="bg-accent/30 rounded-md h-28 w-full flex flex-col justify-between p-4">
                <div class="text-xl font-bold">Applicant(s)</div>                
                <div class="text-lg">
                    {{ applicants.length }}
                </div>
            </NuxtLink>
            <div class="bg-secondary/50 rounded-md h-28 w-full flex flex-col justify-between p-4">
                <div class="text-xl font-bold">Admins</div>                
                <div class="text-lg">2</div>
            </div>
            <div class="bg-primary/40 rounded-md h-28 w-full flex flex-col justify-between p-4">
                <div class="text-xl font-bold">Completed</div>                
                <div class="text-lg">-</div>
            </div>
            <div class="bg-warning/40 rounded-md h-28 w-full flex flex-col justify-between p-4">
                <div class="text-xl font-bold">Incomplete</div>                
                <div class="text-lg">-</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAdminApplicantsStore } from '@/stores/adminApplicants';

const { checkAuth } = useAuth();

const store = useAdminApplicantsStore();

const { applicants, loading, error } = storeToRefs(store);

onMounted(async () => {
    await checkAuth();
    store.fetchApplicants();
})
</script>