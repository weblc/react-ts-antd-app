/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-26 10:18:40
 */
import xhr from './config'



/**
 * 登陆
 * @param params
 */
export const getUserTaskList = (params:any)=>{

    return xhr.post(`/api/manager/taskList`,params)
}


