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
/**
 * 登陆
 * @param params
 */
export const userLogin = (params:user)=>{
    return xhr.post(`/user/login`,params)
}

/**
 *  获取用户信息
 * @param params
 */
export const getUserInfo = (params:string)=>{
    return xhr.post(`/user/getUserInfo`,params)
}

/**
 *  注册
 * @param params
 */
export const userRegister = (params:object)=>{
    return xhr.post(`/user/register`,params)
}

/**
 *  获取用户中心数据分析
 * @param params
 */
export const getAnalysisData = ()=>{
    return xhr.get(`/user/getAnalysisData`)
}
