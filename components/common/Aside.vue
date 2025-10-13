<template>
  <div>
    <transition name="slide-fade">
      <aside v-show="isAsideOpen" id="layout-toggle"
        class="fixed inset-y-0 start-0 z-50 bg-white shadow-lg sm:w-72 lg:rounded-box lg:translate-x-6 rtl:lg:-translate-x-6 lg:w-76 max-lg:min-w-90 max-lg:p-1 lg:my-6"
        aria-label="Sidebar">
        <div class="relative h-full flex flex-col p-">
          <button type="button"
            class="btn btn-text btn-circle btn-sm absolute end-2 top-2 lg:hidden bg-zinc-200/40 border-2 border-white w-10 h-10 rounded-xl"
            @click="$emit('closeAside')">
            <span class="icon-[tabler--x] size-6"></span>
          </button>

          <CommonAppLogo :variant="'black'" :size="'32'" class="px-2 py-3.5" />

          <div class="h-full overflow-y-auto">
            <ul class="accordion menu menu-sm lg:gap-2 overflow-y-auto p-">

              <li v-for="section in sections" :key="section.id" class="accordion-item py-">
                <!-- Titre du panneau -->
                <button
                  class="accordion-toggle inline-flex items-center p-2 text-start text-sm font-normal w-full max-lg:h-13!"
                  :class="{
                    'bg-primary text-white': openSection === section.id,
                  }" @click="handleSectionClick(section)">
                  <span :class="`${section.iconName} size-6`"></span>
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
                      <a href="#" class="block px-2 max-lg:py-3.5 transition-colors duration-200" :class="activeItemId === `${section.id}-${index}`
                        ? 'bg-zinc-300'
                        : 'hover:bg-gray-200'" @click.prevent="handleItemClick(section, item, index)">
                        {{ item }}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <!-- </div> -->
    </transition>
  </div>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";

const emit = defineEmits('closeAside');
 
const activeItemId = ref(null)

const props = defineProps({
  sections: { type: Array, required: false },
  isAsideOpen: { type: Boolean, required: false, defautl:'true' },
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

  emit('closeAside');
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

  // console.log("Navigating to:", finalPath, "| Role:", role);
  await navigateTo(finalPath, { replace: true });
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 100%;
}
</style>