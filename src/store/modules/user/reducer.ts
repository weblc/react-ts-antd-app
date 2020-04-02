/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-24 13:36:19
 */
import * as types from "./types";

const defaultStore = {
    baseInfo: {
        userName: "",
        age: "",
        role: "",
        sex: "",
        token:''
    }
};

const userRedux = (state = defaultStore, action: any) => {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case types.USER_LOGIN:
            return {
                ...state
            };
        case types.SET_USER:
            return {
                ...state,
                baseInfo:payload

            };
        default:
            return state;
    }
};



export default userRedux;
