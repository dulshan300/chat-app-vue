<template>

    <div class="p-20 bg-sky-600 h-screen">

        <div class="h-full w-full bg-white flex shadow-md rounded-md overflow-hidden">

            <aside class="w-1/5 min-w-[350px] border-r shadow-md flex flex-col bg-gray-50">
                <!-- sidebar -->
                <!-- search component -->
                <div class="h-16 px-4 relative flex gap-5 items-center border-b">
                    <RouterLink to="/chat" class="text-xl font-bold">
                        <RiHome2Line class="text-gray-500/40 hover:text-sky-400 " />
                    </RouterLink>
                    <input type="text"
                        class="bg-transparent border border-gray-600/20 rounded-md p-2 w-full relative z-10"
                        placeholder="Search">
                    <RiSearchLine class="text-gray-500/40 absolute right-7 z-0 " />
                </div>

                <!-- online users -->
                <div class="flex-1 flex flex-col gap-2 overflow-y-auto p-4">
                    <!-- user list -->
                    <template v-for="chat in dummy_chat">

                        <RoomCard :selected="selected_room == chat.id" :chat="chat" />

                    </template>

                </div>

            </aside>

            <section class="flex-1 flex flex-col">
                <!-- chat -->
                <template v-if="!selected_room">

                    <div class="flex-1 flex flex-col items-center justify-center bg-slate-50 gap-4">

                        <h3 class="text-gray-500 text-xl font-bold">Select a room</h3>
                        <span class="text-gray-400 text-sm">Or</span>
                        <div class="flex items-center gap-5">
                            <button class="btn btn-blue">Join room</button>
                            <button @click="setIsOpen(true)" class="btn btn-blue">Create a new room</button>
                        </div>
                    </div>

                </template>

                <!-- if chat id -->
                <template v-else>
                    <RouterView></RouterView>
                </template>

            </section>


            <!-- model -->
            <Model :isOpen="isOpen" @close="setIsOpen(false)" title="Create a new room">

                <div class="">

                    <form class="form">

                        <div class="fg">
                            <label for="name" class="label">Name</label>
                            <input v-model="create_room.name" type="text" id="name" class="form-input">
                        </div>

                        <div class="fg">
                            <label class="custom-checkbox" for="mode">
                                <input v-model="create_room.is_private" type="checkbox" name="mode" id="mode">
                                Private Group
                            </label>
                        </div>

                        <Transition>
                            <div v-if="create_room.is_private" class="fg">
                                <label for="access_key" class="label">Access Key</label>
                                <input v-model="create_room.access_key" type="text" id="access_key" class="form-input">
                            </div>
                        </Transition>

                    </form>

                </div>

                <template v-slot:footer>

                    <button @click="setIsOpen(false)" class="btn btn-gray">Close</button>
                    <button @click="handle_room_create" class="btn btn-blue">Create</button>
                </template>


            </Model>


        </div>


    </div>





</template>

<script setup>

import { RiHome2Line, RiSearchLine } from "@remixicon/vue";
import { Transition, computed, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import RoomCard from "../components/RoomCard.vue";
import Model from "../components/common/model.vue";
import dummy_chat from '../data/chat.js';
import { useAuthStore } from "../store/AuthStore.js";

const authStore = useAuthStore()

const route = useRoute();

const selected_room = computed(() => {
    return route.params.id
})

const isOpen = ref(false);

function setIsOpen(value) {
    isOpen.value = value
}

// for create new room
const randomAccessKey = () => {
    return Math.random().toString(36).slice(2)
}

const create_room = ref({
    name: '',
    access_key: '',
    is_private: false
});

watch(() => create_room.value.is_private, () => {
    if (create_room.value.is_private) {
        create_room.value.access_key = randomAccessKey()
    } else {
        create_room.value.access_key = ''
    }
})

const handle_room_create = () => {
    console.log(create_room.value);
}




</script>

<style lang="scss" scoped></style>