import axios, {  AxiosError } from "axios";
import { message } from "antd";

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
        if(response.data.success){
            message.success(response.data.message)
            return response.data
        }
        
    },
    (error: AxiosError) => {

        message.error(error);
        return Promise.reject(error);
    }
);

export default instance;
