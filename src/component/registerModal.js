import {Form, Input, Button, Modal} from 'antd';
import React from 'react';
import {userRegister} from "../redux/actions/registerAction"
import {connect} from 'react-redux';
import Alert from '../component/alert'

const FormItem = Form.Item;

const mapStateToProps = (state) => {
    return {
        newUser: state.register.newUser,
        errorMsg: state.register.errorMsg
    }
};

class registerModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            alertVisible: false,
            alertMsg : {
                message:'',
                type:''
            }
        };
    }

    modalSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let modal = {
                    username: this.props.form.getFieldValue('newUsername'),
                    password: this.props.form.getFieldValue('newPassword'),
                    nickname: this.props.form.getFieldValue('nickname')
                };
                this.props.dispatch(userRegister(modal));
                setTimeout(() => {
                    if (this.props.newUser.username) {
                        this.props.handleCancel()
                        this.setState({alertVisible:true});
                        this.setState({alertMsg:{
                            message:'注册成功',
                            type:'success'
                        }});
                        setTimeout(()=>{this.setState({alertVisible:false})},2000)
                    } else {
                        console.log(this.props.errorMsg);
                        this.setState({alertVisible:true});
                        this.setState({alertMsg:{
                            message:this.props.errorMsg,
                            type:'error'
                        }});
                        setTimeout(()=>{this.setState({alertVisible:false})},2000)
                    }
                }, 0)
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal visible={this.props.visible} onCancel={this.props.handleCancel} footer={null} title={"注册"}
                       confirmLoading={this.props.confirmLoading}>
                    <Form onSubmit={this.modalSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('newUsername', {
                                rules: [{required: true, message: '用户名不能为空!'}],
                            })(
                                <Input placeholder="请输入用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('newPassword', {
                                rules: [{required: true, message: '密码不能为空!'}],
                            })(
                                <Input placeholder="密请输入密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('nickname', {
                                rules: [{required: true, message: '昵称不能为空'}],
                            })(
                                <Input placeholder="请输入昵称"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                            已有帐号? <a href="">立即登录!</a>
                        </FormItem>
                    </Form>
                </Modal>
                {this.state.alertVisible ? <Alert message={this.state.alertMsg.message} type={this.state.alertMsg.type} onClose={this.handleClose}/> :
                    null}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Form.create()(registerModal));