import { AxiosError } from "axios";
import { useAuthStore } from "../store/AuthStore";

export const limitText = (text, limit = 40) => {
    if (text.length > limit) {
        return text.slice(0, limit) + ' ...';
    } else {
        return text
    }
}

export const auth_header = () => {
    const auth = useAuthStore();
    return {
        'Authorization': `Bearer ${auth.auth.token}`
    }
}

export const processAxiosError = (errors) => {


    if (errors instanceof AxiosError) {

        if (errors.response.status === 422) {

            const ae = errors.response.data.errors;
            let error = {};

            for (const [key, value] of Object.entries(ae)) {
                error[key] = value[0];
            }

            return error;

        }



    }

    return {};


}