import loginReducer from './reducers/login'
import registerReducer from './reducers/register'

export default function combineReducers(state = {}, action) {
    return {
        login: loginReducer(state.userInfo, action),
        register: registerReducer(state.newUser, action)
    }
}