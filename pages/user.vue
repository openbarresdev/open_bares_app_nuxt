<template>
    <div>
        <div
            class="bg-base-200 relative flex min-h-screen flex-col before:fixed before:h-105 before:w-full before:bg-neutral-950">
            
            <!-- ---------- MAIN SIDEBAR ---------- -->
            <CommonAside :sections="userMenu"/>
            
            <!-- ---------- END MAIN SIDEBAR ---------- -->
            <div class="z-1 flex flex-col justify-between space-y-6 lg:p-6 p-3 lg:ms-81">
                <!-- ---------- HEADER ---------- -->
                <CommonNavbar />
                <!-- ---------- END HEADER ---------- -->

                <!-- ---------- MAIN CONTENT ---------- -->
                <main class="flex-1">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div class="card h-200 w-full md:col-span-2">
                            <div class="card-body max-lg:p-2">
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
import { userMenu } from "/assets/data/data";

</script>

<style scoped></style>