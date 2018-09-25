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

const userUpdate = (data) => {
    return fetch({
        url: '/user/update',
        method: 'post',
        data: data
    })
};

const getHomeList = () => {
    return fetch({
        url: '/homeList',
        method: 'get',
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

const getFollowsList = () => {
    return fetch({
        url: '/myFollows',
        method: 'get',
    })
};

export {getLivesByKey, login, register, getHomeList, userUpdate, getFollowsList}