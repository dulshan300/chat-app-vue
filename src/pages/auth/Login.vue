<template>
    <div class="bg-white w-full shadow-sm p-5 flex flex-col items-center">
        <h1 class="text-3xl font-bold mb-5 text-blue-500">Login</h1>

        <div class="w-full">
            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="email" class="block mb-1 text-gray-500">Email</label>
                    <input v-model="form_data.email" type="email" id="email"
                        class="w-full p-2 border border-gray-300 rounded">
                </div>
                <div class="mb-3">
                    <label for="password" class="block mb-1 text-gray-500">Password</label>
                    <input v-model="form_data.password" type="password" id="password"
                        class="w-full p-2 border border-gray-300 rounded">
                </div>
                <div class="mb-3">
                    <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded">Login</button>
                </div>
            </form>
        </div>

        <!-- register -->
        <p class="mt-5">Don't have an account? <RouterLink to="/auth/register" class="text-blue-500">Register</RouterLink></p>

        <div v-if="errors">
            <ul>
                <li class="text-red-600" v-for="(error, index) in errors" :key="index">
                    {{ error[0] }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../../utill/axios';
import { useAuthStore } from '../../store/AuthStore';

const authStore = useAuthStore()

const form_data = ref({
    email: '',
    password: ''
})

const errors = ref({})

const handleSubmit = () => {
    errors.value = {};  

    api.post('/auth/login', form_data.value)
        .then(res => {
            console.log(res)
            authStore.login(res.data)
        })
        .catch(error => {
            if (error.response) {
                errors.value = error.response.data.errors
            }
        })
}



</script>

<style lang="scss" scoped></style>