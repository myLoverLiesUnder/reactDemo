import React from 'react';
import myInfoCss from '../../../css/custom.css'
import {Icon, Progress} from 'antd'
import PropTypes from 'prop-types'

export default class myInfo extends React.Component {

    jumpToNameChange = () => {
        this.props.history.push('/member/cp/nameChange', 'nameChange');
    };


    jumpToPhoneChange = () => {
        this.props.history.push('/member/cp/phoneChange', 'phoneChange');
    };

    jumpToPasswordChange = () => {
        this.props.history.push('/member/cp/passwordChange', 'passwordChange');
    };

    jumpToEmailChange = () => {
        this.props.history.push('/member/cp/emailChange', 'emailChange');
    };

    hoverEnter = () => {
        this.refs.upload.style.display = "block"
    };

    hoverLeave = () => {
        this.refs.upload.style.display = "none"
    };

    clickPic = () => {
        this.props.history.push('/member/cp/avatarUpload', 'avatarUpload');
    };

    render() {
        const user = JSON.parse(localStorage.getItem("currentUser")) || "";
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
                            <a href=""
                               onMouseEnter={this.hoverEnter}
                               onMouseLeave={this.hoverLeave}>
                                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                     alt="example"/>
                            </a>
                        </div>
                        <a href="" onClick={e => {
                            e.preventDefault();
                            this.clickPic()
                        }}>
                            <div ref="upload" onMouseEnter={this.hoverEnter}
                                 onMouseLeave={this.hoverLeave} className={myInfoCss.uploadImg}>
                                <div className={myInfoCss.upload}>
                                    <Icon type="form" theme="outlined"/>
                                    <p>修改头像</p>
                                </div>
                            </div>
                        </a>
                        <div className={myInfoCss.infoLeft}>
                            <div className={myInfoCss.detailInfo}>
                                <div className={myInfoCss.username}>
                                    <h2>
                                        {user.nickname}
                                    </h2>
                                </div>
                                <a className={myInfoCss.updateUsername} title="修改昵称"
                                   onClick={e => {
                                       e.preventDefault();
                                       this.jumpToNameChange()
                                   }}>
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
                                    <p>{user.mobile}</p>
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
                                    <p>{user.email}</p>
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