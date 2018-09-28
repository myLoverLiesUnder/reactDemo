import App from '../App'
import Home from '../page/home'
import liveList from '../page/liveList/allList'
import myFollow from '../page/member/personInfo/myFollow'
import myInfo from '../page/member/personInfo/myInfo'
import myEmail from '../page/member/personInfo/myEmail'
import phoneChange from '../page/member/personInfo/phoneChange'
import passwordChange from '../page/member/personInfo/passwordChange'
import emailChange from '../page/member/personInfo/emailChange'
import nameChange from '../page/member/personInfo/nameChange'
import member from '../page/member/index'
import avatarUpload from '../page/member/personInfo/avatarUpload'
import bar from '../page/bar'


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
        component: bar
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
                component: myInfo,
                exact:true
            },
            {
                key: 'follow',
                path: '/member/follow',
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
                key: 'nameChange',
                path: '/member/cp/nameChange',
                text: '修改昵称',
                type: 'security',
                iconType: 'mobile',
                component: nameChange,
                exact:true
            },
            {
                key: 'phoneChange',
                path: '/member/cp/phoneChange',
                text: '修改手机',
                type: 'security',
                iconType: 'mobile',
                component: phoneChange,
                exact:true
            },
            {
                key: 'passwordChange',
                path: '/member/cp/passwordChange',
                text: '修改密码',
                type: 'security',
                iconType: 'lock',
                component: passwordChange,
                exact:true
            },
            {
                key: 'emailChange',
                path: '/member/cp/emailChange',
                text: '修改邮箱',
                type: 'security',
                iconType: 'mail',
                component: emailChange,
                exact:true
            },
            {
                key: 'avatarUpload',
                path: '/member/cp/avatarUpload',
                text: '头像上传',
                type: 'security',
                iconType: 'smile',
                component: avatarUpload,
                exact:true
            }
        ]
    }
];
export {routes}