<template>
    <div>
        <LazyCommonCenteredModal/>

        <div class="bg-base-200 relative flex min-h-screen flex-col before:fixed before:h-105 before:w-full before:bg-neutral-950 lg:z-40">
            
            <!-- ---------- MAIN SIDEBAR ---------- -->
            <CommonAside :sections="adminMenu"  @close-aside="closeAside" :is-aside-open="isOpen"/>
            
            <!-- ---------- END MAIN SIDEBAR ---------- -->
            <div class="z-1 flex flex-col justify-between lg:space-y-6 space-y-4 lg:p-6 p-3 lg:ms-81">
                <!-- ---------- HEADER ---------- -->
                <CommonNavbar @toggle-aside="activateAside"/>
                <!-- ---------- END HEADER ---------- -->

                <!-- ---------- MAIN CONTENT ---------- -->
                <main class="flex-1">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div class="card min-h-200 w-full md:col-span-2">
                            <div class="card-body max-lg:p-2 py-2">
                                <CommonBreadCumb />
                                <NuxtPage/>
                            </div>
                        </div>
                    </div>
                </main>
                <!-- ---------- END MAIN CONTENT ---------- -->

                <!-- ---------- FOOTER CONTENT ---------- -->
                <CommonFooter />
            <!-- ---------- END FOOTER CONTENT ---------- -->
        </div>
    </div>
</div></template>

<script setup>
import { adminMenu } from "/assets/data/data";
import { useAside } from "~/composables/useAside";

const isAsideOpen = ref(false);

const { activateAside, closeAside, isOpen } = useAside(isAsideOpen);

</script>

<style scoped></style>