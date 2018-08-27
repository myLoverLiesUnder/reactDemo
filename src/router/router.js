import App from '../App'
import Home from '../page/home'
import liveList from '../page/liveList/allList'
import myFollow from '../page/member/personInfo/myFollow'
import myInfo from '../page/member/personInfo/myInfo'
import myEmail from '../page/member/personInfo/myEmail'


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
        key: 'cp',
        path: '/member/cp',
        text: '我的资料',
        type: 'loginSuccess',
        iconType: 'solution',
        component: myInfo
    },
    {
        key: 'follow',
        path: '/room/follow',
        text: '我的关注',
        type: 'loginSuccess',
        iconType: 'heart-o',
        component: myFollow
    },
    {
        key: 'pm',
        path: '/member/pm',
        text: '站内信',
        type: 'loginSuccess',
        iconType: 'mail',
        component: myEmail
    }
];
export {routes}