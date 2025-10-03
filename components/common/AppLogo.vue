<template>
    <div>
        <div class="flex items-center gap-2" :class="inNavbar ? 'text-lg' : 'text-2xl'">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-[#FF6700]" :width="size" :height="size" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m12 2l-.516-.544zm.517-.544l.001.002l.005.004l.018.018l.07.067l.26.254a53 53 0 0 1 3.71 4.068c1.014 1.24 2.043 2.64 2.823 4.024c.768 1.364 1.346 2.805 1.346 4.107a8.75 8.75 0 1 1-17.5 0c0-1.302.578-2.743 1.346-4.107c.78-1.384 1.81-2.783 2.823-4.024a53 53 0 0 1 3.97-4.322l.07-.067l.018-.018l.007-.006l.516-.49zM12 2l.517-.544zm.75 8a.75.75 0 0 0-1.5 0v2.194l-1.872-1.092a.75.75 0 1 0-.756 1.296l1.89 1.102l-1.89 1.102a.75.75 0 1 0 .756 1.296l1.872-1.092V17a.75.75 0 0 0 1.5 0v-2.194l1.872 1.092a.75.75 0 0 0 .756-1.296l-1.89-1.102l1.89-1.102a.75.75 0 1 0-.756-1.296l-1.872 1.092z" clip-rule="evenodd"/></svg>
            <h2 class="text-base-content Capitalize font-bold" :class="variant === 'white' ? 'text-white' : 'text-black'">Open Barres</h2>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    variant: { type: String, required: true },
    size: { type: String, required: true },
    inNavbar: { type: Boolean, required: false, default: false },
})
</script>