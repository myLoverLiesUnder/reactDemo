import {login} from "../../axios/api"

export const UN_LOGIN = "UN_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function loginOut() {
    return {
        type: UN_LOGIN
    }
}

function loginSuccess(userInfo) {
    return {
        type: LOGIN_SUCCESS,
        userInfo: userInfo
    }
}

function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        errorMsg: error
    }
}

export function userLogin(data) {
    return function (dispatch) {
        dispatch(loginOut());
        return login(data)
            .then((user => {
                localStorage.setItem("currentUser", JSON.stringify(user));
                dispatch(loginSuccess(user));
            }))
            .catch((error) => {
                dispatch(loginFail(error));
            })
    }
}