import Home from '../App'
import liveList from '../page/liveList/allList'
import myFollow from '../page/member/personInfo/myFollow'
import myInfo from '../page/member/personInfo/myInfo'
import myEmail from '../page/member/personInfo/myEmail'
import PersonalInfo from '../page/member/personalInfo'


const routes = [
    {
        key: 'Home',
        link: '/home',
        text: '首页',
        type: 'main',
        component: Home
    },
    {
        key: 'Live',
        link: '/directory/all',
        text: '直播',
        type: 'main',
        component: liveList
    },
    {
        key: 'directory',
        link: '/directory',
        text: '分类',
        type: 'main',
        component: null
    },
    {
        key: 'bar',
        link: '/bar',
        text: '鱼吧',
        type: 'main',
        component: null
    },
    {
        key: 'cp',
        link: '/member/cp',
        text: '我的资料',
        type: 'loginSuccess',
        iconType: 'solution',
        component: PersonalInfo
    },
    {
        key: 'follow',
        link: '/room/follow',
        text: '我的关注',
        type: 'loginSuccess',
        iconType: 'heart-o',
        component: PersonalInfo
    },
    {
        key: 'pm',
        link: '/member/pm',
        text: '站内信',
        type: 'loginSuccess',
        iconType: 'mail',
        component: PersonalInfo
    }
];
export {routes}