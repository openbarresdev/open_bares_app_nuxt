<template>
    <div>
        
    </div>
</template>

<script setup>
const props = defineProps({
    buttonText: {type: String, required: false},
    buttonLink: {type: String, required: false},
    buttonStyle: {type: String, required: false, default:'styleThree'},
    type: {type: String, required: false, default:'button'},
    disabled: {type: Boolean, required: false},
});

</script>