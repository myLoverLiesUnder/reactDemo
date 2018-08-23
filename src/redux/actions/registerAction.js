import {register} from "../../axios/api"

export const UN_REGISTER = "UN_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

function unRegister() {
    return {
        type: UN_REGISTER,
    }
}

function registerSuccess(newUser) {
    return {
        type: REGISTER_SUCCESS,
        newUser: newUser
    }
}

function registerFail(error) {
    return {
        type: REGISTER_FAIL,
        errorMsg: error
    }
}

export function userRegister(data) {
    return function (dispatch) {
        dispatch(unRegister());
        return register(data)
            .then((response => {
                dispatch(registerSuccess(response));
            }))
            .catch((error) => {
                dispatch(registerFail(error));
            })
    }
}