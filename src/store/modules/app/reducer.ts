import * as types from "./types";

const defaultStore ={
    collapsed:false
}
const appRedux = (state = defaultStore, action: any) => {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case types.GET_APP:
            return {
              ...state
                
            };
        case types.SET_APP:
            return {
              ...state
                
            };
        default:
            return state;
    }
};



export default appRedux;