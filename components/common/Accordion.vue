<!-- components/Accordion.vue -->
<template>
  <div class="accordion my-2">
    <div 
      class="accordion-item accordion-item-active:border accordion-item-active:rounded-box accordion-item-active:border-base-content/25"
      :class="{ 'active': isOpen }"
      :id="id"
    >
      <button 
        class="accordion-toggle inline-flex items-center gap-x-2 text-start w-full text-base max-lg:text-sm px-2"
        :aria-controls="`${id}-collapse`"
        :aria-expanded="isOpen"
        :aria-labelledby="`${id}-heading`"
        @click="toggle"
      >
        <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
        <span class="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
        <span :id="`${id}-heading`" class="grow text-left text-base font-bold">{{ title }}</span>
      </button>
      
      <div 
        :id="`${id}-collapse`"
        class="accordion-content w-full overflow-hidden transition-[height] duration-300 text-sm"
        :class="{ 'hidden': !isOpen }"
        :aria-labelledby="`${id}-heading`"
        role="region"
      >
        <div class="px-2 py-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  initialOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.initialOpen)

const toggle = () => {
  isOpen.value = !isOpen.value
}

// Exposer l'état pour le parent
defineExpose({
  open: () => isOpen.value = true,
  close: () => isOpen.value = false,
  toggle: () => isOpen.value = !isOpen.value
})
</script>