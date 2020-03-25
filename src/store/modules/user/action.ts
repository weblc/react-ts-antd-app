/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-25 16:07:36
 */
import * as actionTypes from "./types"



 const set_use =( data:any) => {
    return {
      type: actionTypes.SET_USER,
      data,
    }
  }

 const user_login = ( data:any)  => {
    return (dispatch:any) => {
      setTimeout(() => {
          console.log(23)
        dispatch(set_use(data))
      }, 3000)
    }
  }

  export {
    set_use,
    user_login
  }
