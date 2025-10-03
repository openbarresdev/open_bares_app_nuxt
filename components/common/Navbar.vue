<template>
    <div>
        <nav class="navbar rounded-box shadow-base-300/20 z-1 h-16 shadow-md max-lg:p-2 w-full">
            <button type="button" class="btn btn-soft btn-square me-2 lg:hidden w-full max-w-10" aria-haspopup="dialog"
                aria-expanded="false" aria-controls="layout-toggle" data-overlay="#layout-toggle">
                <span class="icon-[tabler--menu-2] size-5"></span>
            </button>
            
            <CommonAppLogo :variant="'black'" :size="'24'" class="lg:hidden text-xs! w-full flex justify-center -ml-10" :inNavbar="true"/>
        </nav>
    </div>
</template>

<script setup></script>