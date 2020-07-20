/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-25 16:07:36
 */
import * as actionTypes from "./types";
import { message } from "antd";
import api from "@/api";
import { setStorage } from "@/utils";
import { set_token } from "../app/action";

const set_user = (payload: any) => {
    return {
        type: actionTypes.SET_USER,
        payload,
    };
};

const user_login = (data: any) => {
    return (dispatch: any) => {
        return new Promise(resolve => {
            api.user.userLogin(data).then(({ data, success, message: msg }) => {
                if (success) {
                    setStorage("token", data.token);
                    dispatch(set_user(data.user));
                    dispatch(set_token(data.token))
                    resolve(data);
                } else {
                    message.error(msg);
                }
            });
        });
    };
};

export { set_user, user_login };
