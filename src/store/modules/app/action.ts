/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-25 16:07:36
 */
import * as actionTypes from "./types"


 const toggle_collapsed =( payload:any) => {
    return {
      type: actionTypes.SET_APP,
      payload,
    }
  }




  export {
    toggle_collapsed,
  }
