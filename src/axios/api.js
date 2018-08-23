import {fetch} from "./fetch"

const login = (data) => {
    return fetch({
        url: '/login',
        method: 'post',
        data: data
    })
};

const register = (data) => {
    return fetch({
        url: '/user/register',
        method: 'post',
        data: data
    })
};

const getLivesByKey = (key) => {
    if (key === 'all') {
        return fetch({
            url: '/lives',
            method: 'get',

        })
    } else {
        return fetch({
            url: '/lives/?key=' + key,
            method: 'get',

        })
    }
};

export {getLivesByKey, login, register}