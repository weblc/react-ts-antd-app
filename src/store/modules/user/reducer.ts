/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-24 13:36:19
 */
import * as types from "./types";

const defaultStore = {
    name: "",
    age: "",
    role: [],
    sex: "",
};

const userRedux = (state = defaultStore, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_USER:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default userRedux;
