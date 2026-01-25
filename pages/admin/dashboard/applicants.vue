<template>
  <div>
    <CommonPageHeading title="Applicants list" />
    <div
      class="w-full overflow-x-auto my-4 py-2 border-2 rounded-xl border-zinc-200"
    >
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

        <tbody>
          <tr
            v-for="user in applicants"
            :key="user.id"
            class="row-hover text-black cursor-pointer"
            @click="userDetils(user.id, user.project.id)"
          >
            <td>{{ user.project?.companyName || '—' }}</td>
            <td class="capitalize">{{ user.project?.industrialSector || '—' }}</td>
            <td>{{ user.project?.country || '—' }}</td>
            <td>{{ user.email }}</td>

            <td class="text-center">
              {{ user.project?.documents?.documents?.length ?? 0 }}
            </td>

            <td>
               <span
    class="badge badge-soft"
    :class="getProgress(user.id) === 100 ? 'badge-success' : 'badge-warning'"
  >
    {{ getProgress(user.id) }}%
  </span>
            </td>

            <td class="text-end">
              {{ formatDate(user.project?.createdAt || user.createdAt) }}
            </td>
          </tr>

          <tr v-if="!loading && applicants.length === 0">
            <td colspan="7" class="text-center py-6 text-zinc-500">
              No applicants found
            </td>
          </tr>
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

const { userId, projectId, isAuthenticated, checkAuth } = useAuth();
const store = useAdminApplicantsStore();
const { applicants, loading, error } = storeToRefs(store);

onMounted(async () => {
  await checkAuth();
    store.fetchApplicants();

    for (const user of store.applicants) {
    if (user.id && user.project?.id) {
      store.fetchApplicationSettings(user.id)
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

const userDetils = (userId, projectId) => {

    if (projectId && userId) {
        console.log('user id', userId);
        console.log('project id', projectId);
    }
    
}

</script>
