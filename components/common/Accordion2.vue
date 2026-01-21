<template>
  <div
    class="border rounded-xl overflow-hidden transition-all duration-300"
    :class="isOpen
      ? 'border-primary shadow-md'
      : 'border-base-300 bg-white'"
  >
    <!-- Header -->
    <button
      type="button"
      class="w-full flex items-center justify-between px-4 py-4 text-left  font-semibold transition-colors"
      :class="isOpen ? 'text-primary' : 'text-base-content'"
      @click="toggle"
    >
      <div class="flex flex-col gap-2">
       <div class="flex items-center justify-between gap-1">
         <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
          <span :id="`${id}-heading`" class="grow text-left">
            {{ title }}
          </span>
          <svg v-if="isValid" class="text-green-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"/></svg>
        </div>
        
        <div v-if="description" class="text-slate-600 font-medium text-sm">{{ description }}</div>
        
      </div>

      <svg class="rotate-0" :class="isOpen ? 'rotate-90' : ''" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
    
    </button>

    <!-- Content -->
    <transition
      name="accordion"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div
        v-show="isOpen"
        class="px-4 pb-4 text-sm text-base-content"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  defaultOpen: { type: Boolean, default: false },

  description: { type: String, required: false, default: "" },
  isValid: { type: Boolean, default: false },
})

const isOpen = ref(props.defaultOpen)

const open = () => (isOpen.value = true)
const close = () => (isOpen.value = false)
const toggle = () => (isOpen.value = !isOpen.value)

defineExpose({
  open,
  close,
  toggle,
})

/**
 * Smooth height animation
 */
const onEnter = (el) => {
  el.style.height = '0'
  el.style.overflow = 'hidden'
  el.style.height = el.scrollHeight + 'px'
}

const onLeave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
  requestAnimationFrame(() => {
    el.style.height = '0'
  })
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease, opacity 0.2s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}
</style>
