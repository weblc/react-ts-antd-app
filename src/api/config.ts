import axios, {  AxiosError } from "axios";
import { message } from "antd";
import { getStorage } from "@/utils";
const instance = axios.create({
    baseURL: '/api/eat-cat-server',
    timeout: 10000,
    // headers: { "X-Custom-Header": "foobar" }
});

instance.interceptors.request.use(
    config => {
        const token = getStorage('token')
        config.headers.Authorization = `Bearer ${token}`
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
instance.interceptors.response.use(
    (response) => {
        console.log(response)
        if (!response.data) {
            return Promise.resolve(response);
        }
        return Promise.resolve(response.data);
    },
    (error: AxiosError) => {

        message.error(error);
        return Promise.reject(error);
    }
);

export default instance;
