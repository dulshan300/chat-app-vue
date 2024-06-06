<template>
    <div class="flex flex-col h-full bg-white relative">
        <!-- loader -->
        <Transition>
            <Loader v-if="loading" />

        </Transition>

        <!-- header -->
        <div class="h-16 px-4 flex items-center bg-gray-50">
            <h3 class="font-bold text-chat-gray text-xl"> {{ room.name }}</h3>
        </div>
        <!-- msg -->
        <div class="flex-1 px-4 py-5">
            <div class="conversation-start">
                <span>Monday, 1:27 PM</span>
            </div>
            <div class="bubble you">
                <div class="user-img" style="background-image: url('https://fakeimg.pl/48x48/e6e6e6/909090?text=U')">
                </div>
                So, how's your new phone?
            </div>
            <div class="bubble you">
                <div class="user-img" style="background-image: url('https://fakeimg.pl/48x48/e6e6e6/909090?text=U')">
                </div>
                You finally have a smartphone :D
            </div>
            <div class="bubble me">
                <div class="user-img" style="background-image: url('https://fakeimg.pl/48x48/e6e6e6/909090?text=U')">
                </div>
                Drake?
            </div>
            <div class="bubble me">
                <div class="user-img" style="background-image: url('https://fakeimg.pl/48x48/e6e6e6/909090?text=U')">
                </div>
                Why aren't you answering?
            </div>
            <div class="bubble you">
                <div class="user-img" style="background-image: url('https://fakeimg.pl/48x48/e6e6e6/909090?text=U')">
                </div>
                howdoyoudoaspace
            </div>
        </div>
        <!-- footer -->
        <div class="h-16 px-4 flex items-center bg-gray-50">

            <div class="texting flex w-full gap-2">


                <button class="text-chat-gray hover:text-chat-blue">
                    <RiAttachmentLine />
                </button>

                <input type="text" class="form-input flex-1">

                <button class="text-chat-gray hover:text-chat-blue">
                    <RiEmotionHappyLine />
                </button>

                <button class="text-chat-gray hover:text-chat-blue">
                    <RiSendPlaneLine />
                </button>

            </div>

        </div>
    </div>
</template>

<script setup>

import { RiAttachmentLine, RiEmotionHappyLine, RiSendPlaneLine } from '@remixicon/vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '../store/AuthStore.js';
import api from '../utill/axios.js';
import Loader from '../components/common/loader.vue';

const route = useRoute();
const authStore = useAuthStore()

// load chats
const loading = ref(true);

const room = ref({});
const chats = ref([]);

const loadChats = () => {

    // room details & user verifications
    api.get(`/chat/rooms/${route.params.id}`)
        .then(res => {

            room.value = res.data.data;

            // chats
            chats.value = res.data.chats

            loading.value = false;
        })

}

// before mount, its needs to verify that the user is allowd to view this room.

onMounted(() => {
    loadChats()
    console.log(route.params.id);
})

</script>

<style lang="scss" scoped>
.conversation-start {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 12px;
    color: #999;
}

.bubble {
    font-size: 16px;
    position: relative;
    display: inline-flex;
    align-items: center;
    clear: both;
    margin-bottom: 20px;
    padding: 13px 14px;
    vertical-align: top;
    border-radius: 5px;

    .user-img {
        position: absolute;
        display: inline-flex;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
    }

    &:before {
        position: absolute;
        top: 19px;
        display: block;
        width: 8px;
        height: 6px;
        content: '\00a0';
        transform: rotate(29deg) skew(-35deg);
    }

    &.you {
        float: left;
        color: var(--white);
        background-color: var(--blue);
        align-self: flex-start;
        animation-name: slideFromLeft;
        left: 60px;

        .user-img {
            left: -58px;
        }

        &:before {
            left: -3px;
            background-color: var(--blue);
        }
    }

    &.me {
        float: right;
        color: var(--dark);
        background-color: #eceff1;
        align-self: flex-end;
        animation-name: slideFromRight;

        right: 70px;

        .user-img {
            right: -70px;
        }

        &:before {
            right: -3px;
            background-color: #eceff1;
        }
    }
}

.conversation-start {
    position: relative;
    width: 100%;
    margin-bottom: 27px;
    text-align: center;

    span {
        font-size: 14px;
        display: inline-block;
        color: var(--grey);

        &:before,
        &:after {
            position: absolute;
            top: 10px;
            display: inline-block;
            width: 30%;
            height: 1px;
            content: '';
            background-color: var(--light);
        }

        &:before {
            left: 0;
        }

        &:after {
            right: 0;
        }
    }
}

.bubble {
    transition-timing-function: cubic-bezier(.4, -.04, 1, 1);

    @for $i from 1 through 10 {
        &:nth-of-type(#{$i}) {
            animation-duration: .15s * $i;
        }
    }
}
</style>