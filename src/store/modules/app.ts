/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-24 13:36:19
 */


const types = {
    UPDATE_NAME: 'UPDATE_NAME'
  }

  const defaultStore = {
    app: '1tom'
  }
/**
 * reducer 纯函数 接收一个state,返回一个新的state
 * @param {Object} state
 * @param {Object} action [type] 必选参数
 * @return newState
 * */
const  app = (state = defaultStore, action:any) => {
    const { type, payload } = action
    let res = Object.assign({}, defaultStore)
    switch (type) {
      case types.UPDATE_NAME:
        res.app = payload.name
        break
      default:
        return res
    }
    return res
  }


  export default app
