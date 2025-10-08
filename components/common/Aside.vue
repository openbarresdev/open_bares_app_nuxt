<template>
    <div>
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
                        <ul class="accordion menu menu-sm lg:gap-2 gap-3 overflow-y-auto p-3">

                            <li> <a href="#" class="px-2">
                                    <!-- <span class="icon-[tabler--smart-home] size-4.5"></span> -->
                                    <span class="grow">1. Setup up profile</span> </a> </li>

                            <li v-for="section in sections" :key="section.id" class="accordion-item">
                                <!-- Titre du panneau -->
                                <button
                                    class="accordion-toggle inline-flex items-center p-2 text-start text-sm font-normal w-full"
                                    :class="{ 'bg-neutral/10': openSection === section.id }"
                                    @click="toggleSection(section.id)">

                                    <!-- <span :class="`icon-[tabler--${section.iconName}] size-4.5`"></span> -->

                                    <span class="grow">{{ section.title }}</span>

                                    <span
                                        class="size-4.5 shrink-0 transition-transform duration-300 icon-[tabler--chevron-right]"
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
    </div>
</template>

<script setup>
const props = defineProps({
    sections: { type: Array, required: false },
})

const openSection = ref(null)
const toggleSection = (section) => {
    openSection.value = openSection.value === section ? null : section
    // navigateTo('/admin/dashboard/users')
}

</script>