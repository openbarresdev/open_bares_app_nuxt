<template>
  <div class="tooltip" :class="[`[--placement:${placement}]`, `[--trigger:${trigger}]`]">
    <div class="tooltip-toggle">
      <button :class="buttonClass" aria-label="Popover Button" class="flex items-center gap-1">
        <span v-if="buttonText">{{ buttonText }}</span>
        <span :class="iconClass"></span>
      </button>
      <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
        <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
          <slot name="content">
            <span v-if="title" class="text-base-content text-base font-semibold">{{ title }}</span>
            <p v-if="description" class="text-base-content/80 lg:text-sm text-base pt-2">
              {{ description }}
            </p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps( {
  title: { type: String },
  description: { type: String },
  buttonText: { type: String },
  placement: { type: String,  default: 'bottom' },
  trigger: { type: String, default: 'click' },
  buttonClass: { type: String, default: '' },
  iconClass: { type: String, default: 'icon-[tabler--info-circle] size-5 text-secondary/70' },
})

// withDefaults(defineProps<Props>(), {
//   placement: 'bottom',
//   trigger: 'click',
//   buttonClass: 'text-secondary!',
//   iconClass: 'icon-[tabler--info-circle]'
// })
</script>