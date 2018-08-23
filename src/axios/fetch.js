import axios from 'axios'

let users = JSON.parse(localStorage.getItem('users')) || [];

const ajaxUrl = process.env.NODE_ENV === 'development'
    ? ''
    : process.env.NODE_ENV === 'production'
        ? ''
        : '';

export function fetch(options) {
    return new Promise((resolve, reject) => {
            const instance = axios.create({
                headers: {
                    'Content-Type': 'application/json'
                },
                baseURL: ajaxUrl,
                timeout: 30 * 1000 // 30秒超时
            });
            //请求为登陆
            if (options.url === "/login" && options.method === "post") {
                let param = options.data;
                //判断是否匹配用户信息
                let filteredUser = users.filter(user => {
                    return user.username === param.username && user.password === param.password
                });
                //匹配后返回用户信息
                if (filteredUser.length) {
                    let user = filteredUser[0];
                    let responseJson = {
                        id: user.id,
                        username: user.username,
                        nickname: user.nickname,
                    };
                    resolve(responseJson);
                }
                else {
                    reject("用户名或密码错误");
                }
                return
            }
            //请求为注册
            if (options.url === '/user/register' && options.method === "post") {
                let newUser = options.data;
                //判断用户是否已经注册过
                let filterUser = users.filter(user => {
                    return user.username === newUser.username
                });
                if (filterUser.length) {
                    reject('用户 "' + newUser.username + '" 已被注册');
                    alert('用户 "' + newUser.username + '" 已被注册');
                    return
                }
                //新建用户id取最大+1，重新存入localStorage
                newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                resolve(newUser);
                return
            }
            instance(options)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })

        }
    )
}

axios.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    });

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // TODO 跳转登录页面
                    break;
                default:
                    break
            }
        }
        return Promise.reject(error.response.data)
    });
