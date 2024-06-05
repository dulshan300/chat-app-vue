<template>
    <RouterView />
</template>

<script setup>

import { useToast } from "vue-toastification";
import { useAuthStore } from '../store/AuthStore';
import pusher from '../utill/pusher';

const authStore = useAuthStore()
const toast = useToast();

const c_user_globle_name = `user-${authStore.auth.user.email}-globle`;
const c_user_globle = pusher.subscribe(c_user_globle_name);

const st = Date.now()

c_user_globle.bind('globle-notify', (message) => {
    toast[message.type](message.message);
});

</script>

<style lang="scss" scoped></style>