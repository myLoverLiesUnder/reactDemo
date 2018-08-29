import {Form, Icon, Input, Button, Modal} from 'antd';
import React from 'react';
import loginCss from '../css/custom.css'
import {userLogin} from "../redux/actions/loginAction"
import {connect} from 'react-redux';
import Alert from '../component/alert'


const FormItem = Form.Item;

const mapStateToProps = (state) => {
    return {
        userInfo: state.login.userInfo,
        errorMsg: state.login.errorMsg
    }
};


class LoginModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            alertVisible: false,
            loginModalVisible: true,
            registerModalVisible: false,
            alertMsg: {
                message: '',
                type: ''
            }
        };
    }

    alertClose = () => {
        this.setState({alertVisible: false});
    };


    modalSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let modal = {
                    username: this.props.form.getFieldValue('username'),
                    password: this.props.form.getFieldValue('password')
                };
                this.props.dispatch(userLogin(modal));
                setTimeout(() => {
                    if (this.props.userInfo.username) {
                        this.props.handleCancel();
                        this.setState({alertVisible: true});
                        this.setState({
                            alertMsg: {
                                message: '登陆成功',
                                type: 'success'
                            }
                        });
                        setTimeout(() => {
                            this.setState({alertVisible: false})
                        }, 2000)
                    } else {
                        this.setState({alertVisible: true});
                        this.setState({
                            alertMsg: {
                                message: this.props.errorMsg,
                                type: 'error'
                            }
                        });
                        setTimeout(() => {
                            this.setState({alertVisible: false})
                        }, 2000)
                    }
                }, 0)
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal visible={this.props.visible} onCancel={this.props.handleCancel} footer={null} title={"登录斗鱼"}
                       confirmLoading={this.props.confirmLoading}>
                    <Form onSubmit={this.modalSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '用户名不能为空!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '密码不能为空!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <a className={loginCss.loginFormForgot} href="">忘记密码?</a>
                            <Button type="primary" htmlType="submit" className={loginCss.loginFormButton}>
                                登陆
                            </Button>
                            没有帐号? <a>五秒注册!</a>
                        </FormItem>
                    </Form>
                </Modal>
                {this.state.alertVisible ? <Alert message={this.state.alertMsg.message} type={this.state.alertMsg.type}
                                                  onClose={this.alertClose}/> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Form.create()(LoginModal));




