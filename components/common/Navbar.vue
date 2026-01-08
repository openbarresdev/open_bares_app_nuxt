<template>
    <div>
        <nav class="navbar lg:rounded-box shadow-base-300/20 z-1 h-16 shadow-md max-lg:px-4 max-lg:pt-4 w-full lg:justify-between">
            

            <div class="w-full flex items-center justify-start">
                <div class="flex items-center md:w-full">
                    <div class="lg:block hidden text-start font-semibold">
                    <div v-if="isAuthenticated">
                        <span v-if="isAdmin || isSuperAdmin">Admin Dashboard</span>
                        <span v-else>User Dashboard</span>
                    </div>
                </div>

                <!-- <button type="button" class="btn btn-soft btn-square me-2 lg:hidden w-full max-w-10" aria-haspopup="dialog"
                    aria-expanded="false" aria-controls="layout-toggle" data-overlay="#layout-toggle">
                    <span class="icon-[tabler--menu-2] size-5"></span>
                </button> -->
                <button type="button" class="btn btn-soft btn-square me-2 lg:hidden max-w-12" @click="$emit('toggleAside')">
                    <span class="icon-[tabler--menu-2] size-5"></span>
                </button>
                </div>

                <div class="flex items-center justify-center w-full">
                    <CommonAppLogo :variant="'black'" :size="'24'" class="lg:hidden text-xs! w-full flex justify-center -ml-10"
                        :inNavbar="true" />
                </div>

                <div class="flex items-center justify-end md:w-full gap-3">
                    <CommonLanguageSwitcher />
                </div>
            </div>
            
        </nav>

    </div>
</template> 

<script setup>

const {
    user,
    isAuthenticated,
    isUser,
    isAdmin,
    isSuperAdmin,
    isAtLeastAdmin,
    hasRole,
    checkAuth
} = useAuth();


onMounted(async () => {
    await checkAuth();
});

</script>

<style scoped></style>