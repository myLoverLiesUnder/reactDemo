import React from 'react';
import {Form, Button, Input} from 'antd';
import stepCss from '../../../css/step.css'
import {userUpdate} from "../../../axios/api"
import {connect} from 'react-redux';
import {loginSuccess} from "../../../redux/actions/loginAction"

const FormItem = Form.Item;

const mapStateToProps = (state) => {
    return {
        userInfo: state.login.userInfo,
        errorMsg: state.login.errorMsg
    }
};

const currentUser = localStorage.getItem("currentUser") || "";

class nameChange extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let newNickname = this.props.form.getFieldValue('nickname');
                localStorage.setItem('currentUser', JSON.stringify({
                    ...JSON.parse(currentUser),
                    nickname: newNickname
                }));
                userUpdate({...JSON.parse(currentUser), nickname: newNickname});
                this.props.dispatch(loginSuccess({...JSON.parse(currentUser), nickname: newNickname}));
                this.props.history.push('/member/cp', 'cp');
            }
        })
    };


    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 12},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 12},
                sm: {span: 8},
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 12,
                    offset: 0,
                },
                sm: {
                    span: 8,
                    offset: 4,
                },
            },
        };

        const user = JSON.parse(localStorage.getItem("currentUser")) || "";

        return (
            <div className={stepCss.stepBody}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="当前昵称"
                    >
                        {user.nickname}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="新昵称"
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{required: true, message: '新昵称不能为空', whitespace: true}],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout} style={{paddingBottom: '22px'}}>
                        <Button type="primary" htmlType="submit">修改昵称</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Form.create()(nameChange));
