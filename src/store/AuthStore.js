import { useStorage } from '@vueuse/core';
import { defineStore } from "pinia";
import { useRouter } from 'vue-router';
import api from "../utill/axios";

export const useAuthStore = defineStore('auth', () => {

    const router = useRouter();    

    const auth = useStorage('auth', {
        token: null,
        user: null
    })

    const auth_header = () => {
        return {
            'Authorization': `Bearer ${auth.value.token}`
        }
    }



    const login = async (login_data) => {
        auth.value.token = login_data.token;
        auth.value.user = login_data.user;
        router.push({ name: 'home' })
    }

    const logout = async () => {

        api.post('/auth/logout', {}, { headers: auth_header() })
            .then(res => {
                console.log(res);

                auth.value.token = null;
                auth.value.user = null;

                router.push({ name: 'login' })
            })

    }

    const ping = async () => {
        try {
            const res = await api.post('/auth/ping', {}, { headers: auth_header() });
            return true;
        }
        catch (e) {
            console.log("Session expired");
            return false;
        }

    }

    return {
        auth, login, logout, ping
    }


})