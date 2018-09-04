import React from 'react';
import myInfoCss from '../../../css/custom.css'
import {Icon, Progress} from 'antd'
import PropTypes from 'prop-types'

const currentUser = localStorage.getItem("currentUser") || "";

export default class myInfo extends React.Component {

    jumpToPhoneChange = () => {
        this.context.router.history.push('/member/security/phoneChange', 'phoneChange');
    };

    jumpToPasswordChange = () => {
        this.context.router.history.push('/member/security/passwordChange', 'passwordChange');
    };

    jumpToEmailChange = () => {
        this.context.router.history.push('/member/security/emailChange', 'emailChange');
    };

    render() {
        let user = '';
        if (currentUser) {
            user = JSON.parse(currentUser);
        }
        return (
            <div>

                <div className={myInfoCss.myInfoHeader}>
                        <span>
                            <Icon type='solution'/>
                        </span>
                    <p>我的资料</p>
                </div>
                <div className={myInfoCss.myInfoMain}>
                    <div className={myInfoCss.userInfo}>
                        <div className={myInfoCss.userImg}>
                            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="example"/>
                        </div>
                        <div className={myInfoCss.infoLeft}>
                            <div className={myInfoCss.detailInfo}>
                                <div className={myInfoCss.username}>
                                    <h2>
                                        {user.nickname}
                                    </h2>
                                </div>
                                <a className={myInfoCss.updateUsername} title="修改昵称">
                                    <Icon type="edit"/>
                                </a>
                            </div>
                            <div className={myInfoCss.rank}>
                                <span className={myInfoCss.rank_title}>用户等级</span>
                                <span className={myInfoCss.user_lever}>9级</span>
                                <div className={myInfoCss.bar}>
                                    <Progress percent={34.9}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myInfoCss.mobile_email}>
                        <div className={myInfoCss.mobile_email_title}>
                            <p>账号设置</p>
                        </div>
                        <ul className={myInfoCss.user_check_list}>
                            <li className={myInfoCss.user_check_detail_left}>
                                <div className={myInfoCss.user_check_img}>
                                    <Icon type="mobile"/>
                                </div>
                                <div className={myInfoCss.user_check_message}>
                                    <p>15524590063</p>
                                    <p>您可以享受手机相关的安全及提醒服务</p>
                                </div>
                                <a className={myInfoCss.user_check_link} onClick={this.jumpToPhoneChange}>
                                    修改手机
                                </a>
                            </li>
                            <li className={myInfoCss.user_check_detail}>
                                <div className={myInfoCss.user_check_img}>
                                    <Icon type="lock"/>
                                </div>
                                <div className={myInfoCss.user_check_message}>
                                    <p>密码强度（中）</p>
                                    <p>目前您的密码强度中，请修改提升强度</p>
                                </div>
                                <a className={myInfoCss.user_check_link} onClick={this.jumpToPasswordChange}>
                                    修改密码
                                </a>
                            </li>
                            <li className={myInfoCss.user_check_detail_left}>
                                <div className={myInfoCss.user_check_img}>
                                    <Icon type="mail"/>
                                </div>
                                <div className={myInfoCss.user_check_message}>
                                    <p>100318****@qq.com</p>
                                    <p>您可以使用邮箱来保障您的帐号安全</p>
                                </div>
                                <a className={myInfoCss.user_check_link} onClick={this.jumpToEmailChange}>
                                    修改邮箱
                                </a>
                            </li>
                            <li className={myInfoCss.user_check_detail}>
                                <div className={myInfoCss.user_check_img}>
                                    <Icon type="woman"/>
                                </div>
                                <div className={myInfoCss.user_check_message}>
                                    <p>尚未实名认证</p>
                                    <p>认证后可申请直播间，女性可领取小姐姐特权</p>
                                </div>
                                <a className={myInfoCss.user_check_link} href="">
                                    立即认证
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

myInfo.contextTypes = {
    router: PropTypes.object
};