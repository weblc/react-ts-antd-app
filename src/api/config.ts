import axios,{AxiosResponse,AxiosError } from "axios";
import { message  } from 'antd';
const instance = axios.create({
    baseURL: "/mock",
    timeout: 10000,
    // headers: { "X-Custom-Header": "foobar" }
});

export interface ResponseData {
    code: number,
    data: any,
    msg: string,
    success: boolean
  }

instance.interceptors.request.use(
    config=>{

        return config;
    },
    err =>{
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data;
    },
    (err:AxiosError) => {
      message.error(err)
      return Promise.reject(err);
    }
  );

export default instance;
