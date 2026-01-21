<template>
  <div class="accordion my-2">
    <div 
      class="accordion-item accordion-item-active:border accordion-item-active:rounded-box accordion-item-active:border-base-content/25"
      :class="{ 'active': isOpen }"
      :id="id"
    >
      
      <button
        type="button"
        class="accordion-toggle inline-flex items-center gap-x-2 text-start w-full text-base max-lg:text-sm px-2"
        :aria-controls="`${id}-collapse`"
        :aria-expanded="isOpen"
        :aria-labelledby="`${id}-heading`"
        @click="toggle"
      >
        <!-- <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span> -->
        <!-- <span class="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span> -->
        <div class="flex items-center justify-between gap-1">
          <span :id="`${id}-heading`" class="grow text-left text-base font-">
            {{ title }}
          </span>
          <svg v-if="isValid" class="text-green-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"/></svg>
        </div>
      </button>
      
      <div 
        :id="`${id}-collapse`"
        class="accordion-content w-full overflow-hidden transition-[height] duration-300 text-sm"
        :class="{ 'hidden': !isOpen }"
        :aria-labelledby="`${id}-heading`"
        role="region"
      >
        <span v-if="description" class="mx-8">{{ description }}</span>
        <div class="px-2 py-4">
          <slot :close="closeAccordion"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  id: { type: String, required: true },
  description: { type: String, required: false, default: "" },
  initialOpen: { type: Boolean, default: false },
  isValid: { type: Boolean, default: false },
})

const isOpen = ref(props.initialOpen)

const emit = defineEmits(['closed'])

const toggle = () => {
  isOpen.value = !isOpen.value
}

const closeAccordion = () => {
  isOpen.value = false
}

</script>
