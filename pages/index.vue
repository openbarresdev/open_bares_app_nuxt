<template>
    <div>
        Index
    </div>
</template>

<script setup>
onMounted(async() => {
    await navigateTo('/user/dashboard');
})

</script>

<style scoped></style>