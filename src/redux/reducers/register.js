import * as type from '../actions/registerAction'

export default function registerReducer(state = {}, action) {
    switch (action.type) {
        case type.UN_REGISTER:
            return {
                ...state
            };
        case type.REGISTER_SUCCESS:
            return {
                ...state,
                newUser: action.newUser
            };
        case type.REGISTER_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg
            };
        default:
            return state;
    }
}