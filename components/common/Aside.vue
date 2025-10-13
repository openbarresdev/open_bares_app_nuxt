<template>
  <div>
    <!-- Overlay (mobile only) -->
    <transition name="fade">
      <div v-if="isMobile && isAsideOpenRef" class="fixed inset-0 bg-base-300/60 z-40 lg:hidden" @click="emitClose()" />
    </transition>

    <!-- Sidebar -->
    <transition name="slide-fade">
      <aside :class="[
        'fixed inset-y-0 start-0 z-50 bg-white lg:rounded-xl shadow-lg transition-transform lg:translate-x-0 lg:shadow-none lg:w-76 max-lg:min-w-90 max-lg:p-1 lg:m-6',
        { '-translate-x-full': isMobile && !isAsideOpenRef }
      ]" aria-label="Sidebar">
        <div class="relative h-full flex flex-col">
          <!-- Close button: only on mobile -->
          <button v-if="isMobile" type="button"
            class="btn btn-text btn-circle btn-sm absolute end-2 top-2 lg:hidden bg-zinc-200/40 border-2 border-white w-10 h-10 rounded-xl"
            @click="emitClose()">
            <span class="icon-[tabler--x] size-6"></span>
          </button>

          <!-- Logo -->
          <CommonAppLogo :variant="'black'" :size="'32'" class="px-2 py-3.5" />

          <!-- Menu -->
          <div class="h-full overflow-y-auto">
            <ul class="accordion menu menu-sm lg:gap-2 overflow-y-auto p-">
              <li v-for="section in sections" :key="section.id" class="accordion-item py-">
                <button
                  class="accordion-toggle inline-flex items-center p-2 text-start text-sm font-normal w-full max-lg:h-13!"
                  :class="{ 'bg-primary text-white': openSection === section.id }" @click="handleSectionClick(section)">
                  <span :class="`${section.iconName} size-6`"></span>
                  <span class="grow">{{ section.title }}</span>

                  <span v-if="section.items && section.items.length"
                    class="size-6 shrink-0 transition-transform duration-300 icon-[tabler--chevron-right]"
                    :class="{ 'rotate-90': openSection === section.id }"></span>
                </button>

                <div v-if="section.items && section.items.length"
                  class="accordion-content mt-1 w-full overflow-hidden transition-[height] duration-300 bg-zinc-100"
                  v-show="openSection === section.id">
                  <ul class="space-y-1 p-2">
                    <li v-for="(item, index) in section.items" :key="index">
                      <a href="#" class="block px-2 max-lg:py-3.5 transition-colors duration-200"
                        :class="activeItemId === `${section.id}-${index}` ? 'bg-zinc-300' : 'hover:bg-gray-200'"
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
      </aside>
    </transition>
  </div>
</template>

<script setup>
import { toRefs, watch, onMounted, onUnmounted, ref } from "vue";
import { useAuth } from "~/composables/useAuth";

const props = defineProps({
  sections: { type: Array, required: false, default: () => [] },
  isAsideOpen: { type: Boolean, required: false, default: false },
});
const emit = defineEmits(["closeAside", "update:isAsideOpen"]);

const { isAsideOpen: isAsideOpenProp } = toRefs(props);

const isAsideOpenRef = ref(isAsideOpenProp.value);

watch(isAsideOpenProp, (val) => {
  isAsideOpenRef.value = val;
});

watch(isAsideOpenRef, (val) => {
  emit("update:isAsideOpen", val);
});

// -------------------------------------
const activeItemId = ref(null);
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
  activeItemId.value = `${section.id}-${index}`;
  const formattedItem = item.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");

  emitClose();
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
  await navigateTo(finalPath, { replace: true });
};

const isMobile = ref(true);

const handleResize = () => {
  isMobile.value = window.innerWidth < 1024;
  if (!isMobile.value) {
    document.body.classList.remove("overflow-hidden");
  }
};

watch(
  () => isAsideOpenRef.value,
  (open) => {
    if (isMobile.value) {
      document.body.classList.toggle("overflow-hidden", !!open);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
);

const emitClose = () => {
  isAsideOpenRef.value = false;
  emit("closeAside");
};

onMounted(() => {
  handleResize(); 
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  document.body.classList.remove("overflow-hidden"); 
});
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  transition: all 0.6s ease;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>