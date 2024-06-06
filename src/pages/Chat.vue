<template>

    <div class=" bg-sky-900 h-screen flex justify-center items-center">

        <div class="h-5/6 w-5/6 bg-white flex shadow-md rounded-md overflow-hidden">

            <aside class="w-1/5 min-w-[350px] border-r  flex flex-col bg-gray-50">
                <!-- sidebar -->
                <!-- search component -->
                <div class="h-16 px-4 relative flex gap-5 items-center border-b">
                    <RouterLink to="/chat" class="text-xl font-bold">
                        <RiHome2Line class="text-chat-gray-light hover:text-chat-blue " />
                    </RouterLink>
                    <input type="text"
                        class="bg-transparent border border-chat-gray-light rounded-md p-2 w-full relative z-10 form-input"
                        placeholder="Search">
                    <RiSearchLine class="text-chat-gray-light absolute right-7 z-0 " />
                </div>

                <!-- online users -->
                <div class="chat-list flex-1 flex flex-col overflow-y-auto ">
                    <!-- user list -->
                    <template v-for="chat in chat_rooms">

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
                    <RouterView :key="route.params.id"></RouterView>
                </template>

            </section>


            <!-- model -->
            <Model :isOpen="isOpen" @close="() => { setIsOpen(false) }" title="Create a new room">

                <div class="">

                    <form @submit.prevent="handle_room_create" class="form">

                        <div class="fg">
                            <label for="name" class="label">Name</label>
                            <input v-model="create_room.name" type="text" id="name" class="form-input">
                            <InputError :errors="input_errors" field="name" />
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
                                <InputError :errors="input_errors" field="access_key" />
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
import { Transition, computed, onBeforeMount, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import RoomCard from "../components/RoomCard.vue";
import InputError from "../components/common/InputError.vue";
import Model from "../components/common/model.vue";

import { useAuthStore } from "../store/AuthStore.js";
import api from "../utill/axios.js";
import { processAxiosError } from "../utill/helper";


const { auth } = useAuthStore()

api.setAuthHeader(auth.token);

const route = useRoute();



const chat_rooms = ref([]);

const load_chat_rooms = () => {
    api.get('/chat/rooms')
        .then(res => {
            chat_rooms.value = (res.data.data);
        })
}

onBeforeMount(() => {
    // get all the chat roots
    load_chat_rooms();
})


const input_errors = ref({});

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
    input_errors.value = {};

    api.post('/chat/rooms', create_room.value)
        .then(res => {
            create_room.value.name = "";
            create_room.value.access_key = randomAccessKey()
            load_chat_rooms();
        })
        .catch(error => {

            const _errors = processAxiosError(error)
            input_errors.value = _errors

        })
}




</script>

<style lang="scss" scoped>
.chat-list {
    height: 60vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 4px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(#00b0ff, 0.5);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
}
</style>