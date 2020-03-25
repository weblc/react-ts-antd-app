/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-24 13:36:19
 */


const types = {
    SET_USER: 'SET_USER',
    USER_LOGIN:'USER_LOGIN'
  }

  const defaultStore = {
    user:{
        userName: '',
        age:'',
        role:'',
        sex:''
    },

  }


const userRedux = (state = defaultStore,action:any)=>{
    const { type, payload } = action
    switch (type) {
        case types.USER_LOGIN:
        return {
            ...state,
        }
        case types.SET_USER:
            return {
                user:payload.user,
                ...state,
            };
          default:
            return state;

    }
}


// /**
//  * reducer 纯函数 接收一个state,返回一个新的state
//  * @param {Object} state
//  * @param {Object} action [type] 必选参数
//  * @return newState
//  * */
// const  getUser = (state = defaultStore, action:any) => {
//     const { type, payload } = action
//     let res = Object.assign({}, defaultStore)
//     switch (type) {
//       case types.UPDATE_NAME:
//         res.user = payload.name
//         break
//       default:
//         return res
//     }
//     return res
//   }


  export default userRedux
