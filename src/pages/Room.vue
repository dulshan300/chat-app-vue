<template>
    <div>
        Room {{ route.params.id }}
    </div>
</template>

<script setup>

import { useRoute } from 'vue-router';

import { useAuthStore } from '../store/AuthStore.js';

const route = useRoute();
const authStore = useAuthStore()

</script>

<style lang="scss" scoped>

</style>