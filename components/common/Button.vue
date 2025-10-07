<template>
    <div>
        <div v-if="isLoading">
            <span class="loading loading-spinner text-accent"></span>
        </div>
        <div v-else>
            <Button>Button</Button>
        </div>
    </div>
</template>

<script setup></script>