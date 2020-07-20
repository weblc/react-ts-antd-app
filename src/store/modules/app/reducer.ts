import * as types from "./types";

const defaultStore = {
    collapsed: false,
    token: "",
};
const appRedux = (state = defaultStore, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_APP:
            return {
                ...state,
            };
        case types.SET_APP:
            return {
                ...state,
                ...payload,
            };
        case types.SET_TOKEN:
            return {
                ...state,
                token: payload,
            };
        default:
            return state;
    }
};

export default appRedux;
