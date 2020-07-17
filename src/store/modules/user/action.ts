/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-25 16:07:36
 */
import * as actionTypes from "./types"

import api from '@/api'
import {setStorage} from '@/utils'
 const set_user =( payload:any) => {
    return {
      type: actionTypes.SET_USER,
      payload,
    }
  }


 const user_login = ( data:any)  => {
    return (dispatch:any) => {
        return new Promise((resolve)=>{
            api.user.userLogin(data).then((res)=>{
                setStorage('token',res.data.token)
                dispatch(set_user(res.data.user))
                resolve(res.data)
            })
        })
    }
  }

  export {
    set_user,
    user_login
  }
