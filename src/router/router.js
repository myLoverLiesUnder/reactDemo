import App from '../App'
import Home from '../page/home'
import liveList from '../page/liveList/allList'
import myFollow from '../page/member/personInfo/myFollow'
import myInfo from '../page/member/personInfo/myInfo'
import myEmail from '../page/member/personInfo/myEmail'
import phoneChange from '../page/member/personInfo/phoneChange'
import passwordChange from '../page/member/personInfo/passwordChange'
import emailChange from '../page/member/personInfo/emailChange'
import member from '../page/member/index'


const routes = [
    {
        key: 'Home',
        path: '/home',
        text: '首页',
        type: 'main',
        exact: true,
        component: Home
    },
    {
        key: 'Live',
        path: '/directory/all',
        text: '直播',
        type: 'main',
        component: liveList
    },
    {
        key: 'directory',
        path: '/directory',
        text: '分类',
        type: 'main',
        component: App
    },
    {
        key: 'bar',
        path: '/bar',
        text: '鱼吧',
        type: 'main',
        component: App
    },
    {
        key: 'member',
        path: '/member',
        text: '个人中心',
        type: 'loginSuccess',
        component: member,
        routes:[
            {
                key: 'cp',
                path: '/member/cp',
                text: '我的资料',
                type: 'member',
                iconType: 'solution',
                component: myInfo
            },
            {
                key: 'follow',
                path: '/room/follow',
                text: '我的关注',
                type: 'member',
                iconType: 'heart-o',
                component: myFollow
            },
            {
                key: 'pm',
                path: '/member/pm',
                text: '站内信',
                type: 'member',
                iconType: 'mail',
                component: myEmail
            },
            {
                key: 'phoneChange',
                path: '/member/security/phoneChange',
                text: '修改手机',
                type: 'security',
                iconType: 'mobile',
                component: phoneChange
            },
            {
                key: 'passwordChange',
                path: '/member/security/passwordChange',
                text: '修改密码',
                type: 'security',
                iconType: 'lock',
                component: passwordChange
            },
            {
                key: 'emailChange',
                path: '/member/security/emailChange',
                text: '修改邮箱',
                type: 'security',
                iconType: 'mail',
                component: emailChange
            }
        ]
    }
];
export {routes}