<template>
    <div>
        <nav class="navbar rounded-box shadow-base-300/20 z-1 h-16 shadow-md max-lg:p-2 w-full lg:justify-end">
            <button type="button" class="btn btn-soft btn-square me-2 lg:hidden w-full max-w-10" aria-haspopup="dialog"
                aria-expanded="false" aria-controls="layout-toggle" data-overlay="#layout-toggle">
                <span class="icon-[tabler--menu-2] size-5"></span>
            </button>

            <CommonAppLogo :variant="'black'" :size="'24'" class="lg:hidden text-xs! w-full flex justify-center -ml-10"
                :inNavbar="true" />

            <div @click="logout" class="text-sm flex infline-flex gap-1 items-center cursor-pointer hover:text-secondary transition-all text-end">
                <span class="lg:block hidden">Logout</span>
                <span class="icon-[solar--power-bold-duotone] size-8"></span>
            </div>
        </nav>
    </div>
</template> 

<script setup>
const logout = () => {
    useCookie('auth_token').value = null
    setTimeout(() => {
        navigateTo("/login")
    }, 2000);
}
</script>

<style scoped></style>