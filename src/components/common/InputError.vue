<template>
    <div v-if="has_erros">
        <span class="text-red-500 text-xs">{{ errors[field] }}</span>        
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({    
    field: String,
    errors: Object
})

const has_erros =  computed(() => {
    const keys = Object.keys(props.errors);   
    return keys.includes(props.field);
    
})




</script>

<style lang="scss" scoped></style>