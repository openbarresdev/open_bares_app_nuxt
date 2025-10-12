<template>
    <div>

        
       
        <nav class="navbar rounded-box shadow-base-300/20 z-1 h-16 shadow-md max-lg:p-2 w-full lg:justify-between">
            <div class="lg:block hidden text-start font-semibold">
                <div v-if="isAuthenticated">
                    <span v-if="isAdmin || isSuperAdmin">Admin Dashboard</span>
                    <span v-else>User Dashboard</span>
                </div>
            </div>
            
            <button type="button" class="btn btn-soft btn-square me-2 lg:hidden w-full max-w-10" aria-haspopup="dialog"
                aria-expanded="false" aria-controls="layout-toggle" data-overlay="#layout-toggle">
                <span class="icon-[tabler--menu-2] size-5"></span>
            </button>

            <CommonAppLogo :variant="'black'" :size="'24'" class="lg:hidden text-xs! w-full flex justify-center -ml-10"
                :inNavbar="true" />
            <div @click="logoutUser" 
                class="text-sm flex infline-flex gap-1 items-center cursor-pointer hover:text-secondary transition-all text-end"
                data-overlay="#middle-center-modal"
                ria-haspopup="dialog" aria-expanded="false">
                <span class="lg:block hidden">Logout</span>
                <span class="icon-[solar--power-bold-duotone] size-8"></span>
            </div>
        </nav>

    </div>
</template> 

<script setup>
import { useHSModal } from '~/composables/useHSModal'

const { openModal } = useHSModal('#middle-center-modal')

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

const logoutUser = async () => {
     openModal()
}
</script>

<style scoped></style>