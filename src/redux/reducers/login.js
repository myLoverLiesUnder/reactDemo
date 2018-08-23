import * as type from '../actions/loginAction'

let userInfo = localStorage.getItem("userInfo");
const initState = userInfo ? {
    userInfo: userInfo,
    errorMsg: ''
} : {
    userInfo: {},
    errorMsg: ''
};

export default function loginReducer(state = initState, action) {
    switch (action.type) {
        case type.UN_LOGIN:
            return {
                ...state,
                userInfo: {},
            };
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case type.LOGIN_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
            };
        default:
            return state;
    }
}