import axios, {  AxiosError } from "axios";
import { message } from "antd";
import { ResponseData } from "@/types/app";
const instance = axios.create({
    baseURL: "/mock",
    timeout: 10000,
    // headers: { "X-Custom-Header": "foobar" }
});

instance.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
instance.interceptors.response.use(
    (response) => {
        if (!response.data) {
            return Promise.resolve(response);
        }
        return response.data
    },
    (error: AxiosError) => {

        message.error(error);
        return Promise.reject(error);
    }
);

export default instance;
