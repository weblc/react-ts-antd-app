import axios from "axios";

const instance = axios.create({
    baseURL: "",
    timeout: 10000,
    // headers: { "X-Custom-Header": "foobar" }
});

instance.interceptors.request.use(
    config=>{
        return config;
    },
    err =>{
        console.log('网络错误')
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    data => {
      return data;
    },
    err => {
      if (err.response.status === 504 || err.response.status === 404) {
        console.log("服务器被吃了⊙﹏⊙∥");
      } else if (err.response.status === 401) {
        console.log("登录信息失效⊙﹏⊙∥");
      } else if (err.response.status === 500) {
        console.log("服务器开小差了⊙﹏⊙∥");
      }
      return Promise.reject(err);
    }
  );

export default instance;
