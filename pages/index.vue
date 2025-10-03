<template>
    <div>
        <div
            class="bg-base-200 relative flex min-h-screen flex-col before:fixed before:h-105 before:w-full before:bg-neutral-950">
            <!-- ---------- MAIN SIDEBAR ---------- -->

            <aside id="layout-toggle"
                class="overlay overlay-open:translate-x-0 drawer drawer-start lg:rounded-box inset-y-0 start-0 hidden h-full [--auto-close:lg] sm:w-75 lg:my-auto lg:block lg:max-h-[calc(100dvh-48px)] lg:translate-x-6 rtl:lg:-translate-x-6"
                aria-label="Sidebar" tabindex="-1">
                <div class="drawer-body h-full p-0">
                    <div class="flex h-full max-h-full flex-col">
                        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3 lg:hidden"
                            aria-label="Close" data-overlay="#layout-toggle">
                            <span class="icon-[tabler--x] size-4.5"></span>
                        </button>

                        <CommonAppLogo :variant="'black'" :size="'32'" class="px-4 py-3.5" />

                        <div class="h-full overflow-y-auto">
                            <ul class="accordion menu menu-sm gap-1 overflow-y-auto p-3">
                                
                                <li> <a href="#" class="px-2"> <span class="icon-[tabler--smart-home] size-4.5"></span>
                                        <span class="grow">Dashboard</span> </a> </li>

                                <li v-for="section in sections" :key="section.id" class="accordion-item">
                                    <!-- Titre du panneau -->
                                   <button class="accordion-toggle inline-flex items-center p-2 text-start text-sm font-normal w-full"
                                            :class="{ 'bg-neutral/10': openSection === section.id }"
                                            @click="toggleSection(section.id)"
                                        >

                                        <!-- <span :class="`icon-[tabler--${section.iconName}] size-4.5`"></span> -->

                                        <span class="grow">{{ section.title }}</span>

                                        <span class="size-4.5 shrink-0 transition-transform duration-300 icon-[tabler--chevron-right]"
                                            :class="{ 'rotate-90': openSection === section.id }">
                                        </span>
                                    </button>

                                    <!-- Contenu -->
                                    <div class="accordion-content mt-1 w-full overflow-hidden transition-[height] duration-300"
                                        v-show="openSection === section.id">
                                        <ul class="space-y-1 p-2">
                                            <li v-for="item in section.items" :key="item">
                                                <a href="#" class="px-2">{{ item }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </aside>
            <!-- ---------- END MAIN SIDEBAR ---------- -->

            <div class="z-1 flex flex-col justify-between space-y-6 lg:p-6 p-3 lg:ms-81">
                <!-- ---------- HEADER ---------- -->
                <CommonNavbar />
                <!-- ---------- END HEADER ---------- -->

                <!-- ---------- MAIN CONTENT ---------- -->
                <!-- <main class="flex-1">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div class="card h-200 w-full">
                            <div class="card-body border-base-content/20 rounded-box skeleton-striped m-6 border"></div>
                        </div>
                        <div class="card h-200 w-full">
                            <div class="card-body border-base-content/20 rounded-box skeleton-striped m-6 border"></div>
                        </div>
                        <div class="card h-200 w-full md:col-span-2">
                            <div class="card-body border-base-content/20 rounded-box skeleton-striped m-6 border"></div>
                        </div>
                    </div>
                </main> -->
                <!-- ---------- END MAIN CONTENT ---------- -->

                <!-- ---------- FOOTER CONTENT ---------- -->
                <!-- <footer class="bg-base-100 rounded-box shadow-base-300/20 h-16 shadow-md"></footer> -->
            <!-- ---------- END FOOTER CONTENT ---------- -->
        </div>
    </div>
</div></template>

<script setup>
import { sections } from "/assets/data/data";

const openSection = ref(null)
const toggleSection = (section) => {
    openSection.value = openSection.value === section ? null : section
}


</script>

<style scoped></style>