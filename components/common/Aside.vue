<template>
    <div>
        <aside id="layout-toggle"
            class="overlay overlay-open:translate-x-0 drawer drawer-start lg:rounded-box inset-y-0 start-0 hidden h-full [--auto-close:lg] sm:w-75 lg:my-auto lg:block lg:max-h-[calc(100dvh-48px)] lg:translate-x-6 rtl:lg:-translate-x-6"
            aria-label="Sidebar" tabindex="-1">
            <div class="drawer-body h-full p-0">
                <div class="flex h-full max-h-full flex-col">
                    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3 lg:hidden"
                        aria-label="Close" data-overlay="#layout-toggle">
                        <span class="icon-[tabler--x] size-6"></span>
                    </button>

                    <CommonAppLogo :variant="'black'" :size="'32'" class="px-4 py-3.5" />

                    <div class="h-full overflow-y-auto">
                        <ul class="accordion menu menu-sm lg:gap-2 overflow-y-auto p-3">

                            <li v-for="section in sections" :key="section.id" class="accordion-item py-">
                                <!-- Titre du panneau -->
                                <button
                                    class="accordion-toggle inline-flex items-center p-2 text-start text-sm font-normal w-full max-lg:h-13!"
                                    :class="{
                                        'bg-primary text-white': openSection === section.id,
                                    }" @click="handleSectionClick(section)">
                                    <span :class="`icon-[tabler--${section.iconName}] size-6`"></span>
                                    <span class="grow">{{ section.title }}</span>

                                    <span v-if="section.items.length"
                                        class="size-6 shrink-0 transition-transform duration-300 icon-[tabler--chevron-right]"
                                        :class="{ 'rotate-90': openSection === section.id }"></span>
                                </button>

                                <!-- Sous-éléments -->
                                <div v-if="section.items.length"
                                    class="accordion-content mt-1 w-full overflow-hidden transition-[height] duration-300 bg-zinc-100"
                                    v-show="openSection === section.id">
                                    <ul class="space-y-1 p-2">
                                        <li v-for="(item, index) in section.items" :key="index">
                                            <a href="#" class="block px-2 max-lg:py-3.5 transition-colors duration-200" 
                                                  :class="activeItemId === `${section.id}-${index}` 
                                                  ? 'bg-zinc-300' 
                                                  : 'hover:bg-gray-200'"
                                                @click.prevent="handleItemClick(section, item, index)">
                                                {{ item }}
                                            </a>
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
import { useAuth } from "~/composables/useAuth";

const activeItemId = ref(null)

const props = defineProps({
  sections: { type: Array, required: false },
});

const openSection = ref(null);
const { checkAuth } = useAuth(); 

const toggleSection = (id) => {
  openSection.value = openSection.value === id ? null : id;
};

const handleSectionClick = async (section) => {
  if (!section.items || section.items.length === 0) {
    await navigateWithRole(section.link);
  } else {
    toggleSection(section.id);
  }
};

const handleItemClick = async (section, item, index) => {
  activeItemId.value = `${section.id}-${index}`
  const formattedItem = item
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

  // await navigateWithRole(`${section.link}/${index}`);
  await navigateWithRole(`${section.link}/${formattedItem}`);
};

const navigateWithRole = async (path) => {
  const authUser = await checkAuth();

  if (!authUser) {
    console.warn("User not authenticated — redirecting to login");
    return navigateTo("/login");
  }

  const role = authUser.role;
  let base = "/";

  if (role === "ADMIN" || role === "SUPER_ADMIN") base = "/admin/dashboard";
  else if (role === "USER") base = "/user/dashboard";

  const finalPath = `${base}/${path}`.replace(/\/+/g, "/");

  console.log("Navigating to:", finalPath, "| Role:", role);
  await navigateTo(finalPath, { replace: true });
};
</script>