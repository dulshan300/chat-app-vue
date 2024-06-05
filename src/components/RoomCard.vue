<template>
    <RouterLink :to="{ name: 'chat.room', params: { id: chat.id } }"
        class="flex items-start px-4 py-4  border-b border-chat-gray-light/50 cursor-pointer hover:bg-chat-blue group hover:border-chat-blue"
        :class="{ 'bg-chat-blue text-white border-chat-blue': selected, 'bg-white': !selected }">
        <!-- user card -->
        <div class="rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center mr-3 text-gray-600 group-hover:text-white"
            :class="{ 'text-white': selected }">
            {{ initials(chat.name) }}</div>
        <div class="flex-1 flex flex-col gap-2">
            <h3 class="font-medium text-gray-700 group-hover:text-white" :class="{ 'text-white': selected }">{{
                chat.name
            }}</h3>
            <p class="text-xs text-gray-500 group-hover:text-white" :class="{ 'text-white': selected }">{{
                limitText(chat.last_message, 25) }}</p>
        </div>
        <div class="flex flex-col items-center gap-3 h-full">
            <div class="flex-1 flex">
                <span v-if="chat.new_messages_count > 0"
                    class="flex items-center justify-center text-xs font-bold text-white bg-red-500 max-w-5 min-w-5  h-5 rounded-full">{{
                        chat.new_messages_count }}</span>
            </div>
            <span class="text-xs text-gray-500 group-hover:text-white" :class="{ 'text-white': selected }">{{
                dayjs(chat.updated_at).fromNow(true) }}</span>
        </div>

    </RouterLink>
</template>

<script setup>

import dayjs from 'dayjs';

import { RouterLink, useRoute } from 'vue-router';
import { limitText } from '../utill/helper';

const initials = (name) => name.split(' ').map(n => n.slice(0, 1)).join('').toUpperCase();

const props = defineProps({
    chat: Object,
    selected: {
        type: Boolean,
        default: false
    }
})


</script>

<style lang="scss" scoped></style>