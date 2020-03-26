/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-26 10:18:40
 */
import xhr from './config'


interface user {
    user:string,
    password:string
}
export const userLogin = (params:user)=>{
    return xhr.post(`/api/user/login`,params)
}
