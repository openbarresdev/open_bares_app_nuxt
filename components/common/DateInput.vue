<template>
  <div class="input-floating" :class="wrapperClass">
    <input
      ref="flatpickrRef"
      type="text"
      :placeholder="placeholder"
      class="input input-xl pr-10 bg-gray-100 border-none rounded-xl placeholder:text-sm! text-[1rem]!"
      :id="inputId"
      :name="name"
      :disabled="disabled"
    />
    <label class="input-floating-label lg:text-[1rem] text-base!" :for="inputId">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import flatpickr from 'flatpickr';

const props = defineProps({
  wrapperClass: { type: String, default: 'max-w-sm' },
  placeholder: { type: String, default: 'YYYY-MM-DD' },
  inputId: { type: String, default: 'flatpickr-input' },
  name: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: 'Date' },
  modelValue: { type: [String, Date], default: '' },
  options: {
    type: Object,
    default: () => ({
      monthSelectorType: 'static',
      dateFormat: 'Y-m-d',
      allowInput: true,
      clickOpens: true,
    })
  }
});

const emit = defineEmits(['update:modelValue', 'change', 'open', 'close']);

const flatpickrRef = ref();
const flatpickrInstance = ref();

onMounted(() => {
  if (flatpickrRef.value) {
    const mergedOptions = {
      ...props.options,
      defaultDate: props.modelValue,
      onChange: (selectedDates, dateStr, instance) => {
        const value = selectedDates.length > 0 ? selectedDates[0] : null;
        emit('update:modelValue', value);
        emit('change', value, dateStr, instance);
      },
      onOpen: (selectedDates, dateStr, instance) => {
        emit('open', selectedDates, dateStr, instance);
      },
      onClose: (selectedDates, dateStr, instance) => {
        emit('close', selectedDates, dateStr, instance);
      }
    };

    flatpickrInstance.value = flatpickr(flatpickrRef.value, mergedOptions);
  }
});

watch(() => props.modelValue, (newValue) => {
  if (flatpickrInstance.value && newValue !== flatpickrInstance.value.input.value) {
    flatpickrInstance.value.setDate(newValue);
  }
});

onUnmounted(() => {
  if (flatpickrInstance.value) {
    flatpickrInstance.value.destroy();
  }
});
</script>

<style scoped>
.flatpickr-input[readonly]{
    font-size: 1rem !important;
    size: 1rem;
}
</style>