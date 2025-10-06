<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

// validation schema
const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6, 'Min 6 chars').required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password required'),
})

// create the form with schema
const { handleSubmit } = useForm({ validationSchema: schema })

// register fields individually
const { value: email, errorMessage: emailError, handleBlur: blurEmail } = useField('email')
const { value: password, errorMessage: passwordError, handleBlur: blurPassword } = useField('password')
const { value: confirmPassword, errorMessage: confirmPasswordError, handleBlur: blurConfirm } = useField('confirmPassword')

// Example handler — call an exported composable or just call $fetch directly
const signup = async (values) => {
  // You can use $fetch directly here since this is a component:
  try {
    const res = await $fetch('/api/auth/register', { method: 'POST', body: values })
    console.log('Signup response:', res)
  } catch (err) {
    console.error('Signup failed', err)
  }
}

// final submit that vee-validate will call (values will be filled)
const onSubmit = handleSubmit(async (values) => {
  console.log('onSubmit values:', values) // <-- should log the object with email/password
  await signup(values)
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <div>
      <label>Email</label>
      <input v-model="email" @blur="blurEmail" type="email" class="input" />
      <div v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</div>
    </div>

    <div>
      <label>Password</label>
      <input v-model="password" @blur="blurPassword" type="password" class="input" />
      <div v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</div>
    </div>

    <div>
      <label>Confirm Password</label>
      <input v-model="confirmPassword" @blur="blurConfirm" type="password" class="input" />
      <div v-if="confirmPasswordError" class="text-red-500 text-sm">{{ confirmPasswordError }}</div>
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>
