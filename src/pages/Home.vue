<template>
    <div class="h-screen flex justify-center items-center">

        <div class="fixed  right-5 top-5 flex gap-5">
            <!-- number of online users -->
            <span class=" text-white bg-green-800 rounded-md h-7 px-2 flex justify-center items-center gap-3 shadow-md">
                <RiBaseStationLine /> 8
            </span>

            <!-- logout -->
            <button @click="authStore.logout"
                class=" text-white bg-red-800 rounded-md aspect-square w-7 flex justify-center items-center shadow-md hover:bg-red-900">
                <RiShutDownLine />
            </button>

        </div>

        <div class="max-w-3xl mx-auto flex flex-col gap-3">

            <!-- options -->
            <RouterLink to="/chat" class=" bg-white text-blue-600 px-5 py-5 rounded-sm border shadow-md border-blue-600 hover:bg-blue-600 hover:text-white">
                Chat</RouterLink>
            <button
                class=" bg-white text-blue-600 px-5 py-5 rounded-sm border shadow-md border-blue-600 hover:bg-blue-600 hover:text-white">Create
                a new Room</button>
            <button
                class=" bg-white text-blue-600 px-5 py-5 rounded-sm border shadow-md border-blue-600 hover:bg-blue-600 hover:text-white">Join
                to a Room</button>


        </div>

    </div>
</template>

<script setup>
import { RiBaseStationLine, RiShutDownLine } from '@remixicon/vue';
import { useAuthStore } from '../store/AuthStore';

const authStore = useAuthStore()




</script>

<style lang="scss" scoped></style>