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
                                        'bg-primary! text-white!': openSection === section.id,
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
                                            <a href="#" class="block px-2"
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
const props = defineProps({
    sections: { type: Array, required: false },
})

const openSection = ref(null);
// const router = useRouter();
const route = useRoute();

const toggleSection = (id) => {
  openSection.value = openSection.value === id ? null : id;
};

const handleSectionClick = (section) => {
  if (!section.items || section.items.length === 0) {
    navigateRelative(section.link);
  } else {
    toggleSection(section.id);
  }
};

const navigateRelative = (path) => {
  const currentPath = route.path.replace(/\/$/, ""); 
  const nextPath = path.startsWith("/") ? path : `/${path}`;
  navigateTo(`${currentPath}${nextPath}`);
};


const handleItemClick = (section, item, index) => {
  const formattedItem = item
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

//   const relativePath = `${section.link}/${index}`;
  const relativePath = `${section.link}/${formattedItem}`;
  navigateRelative(relativePath);
};

console.log(route.path);
</script>