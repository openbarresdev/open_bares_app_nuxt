import { defineStore } from "pinia";

export const useAdminApplicantsStore = defineStore("adminApplicants", {
  state: () => ({
    applicants: [],
    loading: false,
    error: null,
    applicationSettingsMap: {},
  }),

  actions: {
    async fetchApplicants() {
      this.loading = true;
      this.error = null;

      try {
        const { data, error } = await useFetch("/api/admin/users");

        if (error.value) {
          throw new Error(error.value.message);
        }

        this.applicants = data.value?.data || [];

        console.log("applicants", this.applicants);
      } catch (err) {
        this.error = err.message || "Failed to load applicants";
      } finally {
        this.loading = false;
      }
    },

     async fetchApplicationSettings(userId) {
      if (this.applicationSettingsMap[userId]) return

       const { data } = await useFetch(`/api/admin/users/${userId}`)
       
      if (data.value?.data?.applicationSettings) {
        this.applicationSettingsMap[userId] =
          data.value.data.applicationSettings
      }
    },
  },
});