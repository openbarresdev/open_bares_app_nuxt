<template>
  <div>
    <div class="space-y-6 px-1.5 py-6 w-full">
      <div class="inline-flex items-center gap-2 w-full">
        <div class="lg:text-base max-lg:text-sm w-1/2">
          Start date
        </div>
        <CommonDateInput 
          class="lg:w-1/2 w-full"
          v-model="selectedStartDate"
          label="Start Date"
          placeholder="Select your Start Date"
          :options="{
            maxDate: new Date(),
            dateFormat: 'd-m-Y'
          }"
          :hasError="!!startDateError"
          :errorMessage="startDateError"
        />
      </div>

      <div class="inline-flex items-center gap-2 w-full">
        <div class="lg:text-base max-lg:text-sm w-1/2">
          End date
        </div>
        <CommonDateInput 
          class="lg:w-1/2 w-full"
          v-model="selectedEndDate"
          label="End Date"
          placeholder="Select your End Date"
          :options="{
            maxDate: new Date(),
            dateFormat: 'd-m-Y'
          }"
          :hasError="!!endDateError"
          :errorMessage="endDateError"
        />
      </div>

      <div class="inline-flex items-center gap-2 w-full">
        <div class="lg:text-base max-lg:text-sm w-1/2">
          Duration
        </div>
        <CommonSelectVariant 
          class="lg:w-1/2 w-full"
          label="Duration"
          :options="years"
          v-model:model-value="selectedDuration"
           :hasError="!!durationError"
          :errorMessage="durationError"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { phaseSchema } from "~/validation/formValidationSchema";
import { years } from "/assets/data/data"
import { useForm, useField } from 'vee-validate'

const { handleSubmit, errors, setValues } = useForm({
    validationSchema: phaseSchema,
});

const { value: selectedStartDate, errorMessage: startDateError } = useField('selectedStartDate')
const { value: selectedEndDate, errorMessage: endDateError } = useField('selectedEndDate')
const { value: selectedDuration, errorMessage: durationError }  = useField('selectedDuration')

const emit = defineEmits(['update:phaseData', 'reset'])

// Émettre les données quand elles changent
watch([selectedStartDate, selectedEndDate, selectedDuration], () => {
  const phaseData = {
    startDate: selectedStartDate.value,
    endDate: selectedEndDate.value,
    duration: selectedDuration.value
    }
//   console.log(phaseData);
  
    emit('update:phaseData', phaseData)

    // Si l'objet errors est vide, c'est que c'est valide
    const isValid = Object.keys(errors.value).length === 0 && selectedStartDate.value && selectedEndDate.value && selectedDuration.value;
    emit('update:isValid', !!isValid)
}, { deep: true }) 
  

// Méthode pour obtenir les données du formulaire
const getData = () => {
  return {
    startDate: selectedStartDate.value,
    endDate: selectedEndDate.value,
    duration: selectedDuration.value
  }
}

// Méthode pour réinitialiser le formulaire
const reset = () => {
  selectedStartDate.value = ''
  selectedEndDate.value = ''
  selectedDuration.value = ''

  emit('resetFunc',)
    
}

// Exposer les méthodes au parent
defineExpose({
//   validate,
  getData,
  reset,
//   isValid
})
</script>