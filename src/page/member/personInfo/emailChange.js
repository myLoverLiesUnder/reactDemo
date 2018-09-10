import React from 'react';
import {Steps, Button, Icon, Input} from 'antd';
import stepCss from '../../../css/step.css'
import Alert from '../../../component/alert'
import {userUpdate} from "../../../axios/api"

const Step = Steps.Step;

const currentUser = localStorage.getItem("currentUser") || "";

let password = '';
let email = '';


const handelInput = (e,key) => {
    if(key==='password'){
        password = e.target.value;
    }
    if(key==='email'){
        email = e.target.value;
    }
};

const first = <Input onChange={(e) => handelInput(e,'password')}
                     key="password"
                     style={{width: '300px'}}
                     prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                     type="password"
                     placeholder="请输入密码"/>;

const second = <Input onChange={(e) => handelInput(e,'email')}
                      key="email"
                      style={{width: '300px'}}
                      prefix={<Icon type="email" style={{color: 'rgba(0,0,0,.25)'}}/>}
                      type="email"
                      placeholder="请输入邮箱"/>;

const last = <h3>修改成功</h3>;

const steps = [{
    title: '身份验证',
    content: first
}, {
    title: '绑定新邮箱',
    content: second
}, {
    title: '完成',
    content: last
}];

export default class phoneChange extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 0,
            alertVisible: false,
            alertMsg: {
                message: '',
                type: ''
            }
        }
    }

    next = () => {
        let regex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if (this.state.current === 0 && password && password === JSON.parse(currentUser).password) {
            const current = this.state.current + 1;
            this.setState({current});
            return
        }
        if (this.state.current === 1 && email && regex.test(email)) {
            const current = this.state.current + 1;
            this.setState({current});
            localStorage.setItem('currentUser', JSON.stringify({...JSON.parse(currentUser), email: email}));
            userUpdate({...JSON.parse(currentUser), email: email});
            return
        }
        else {
            this.setState({alertVisible: true});
            this.setState({
                alertMsg: {
                    message: '请输入正确信息',
                    type: 'error'
                }
            });
        }
    };

    alertClose = () => {
        this.setState({alertVisible: false});
    };


    render() {
        return (
            <div className={stepCss.stepBody}>
                <Steps className={stepCss.step} size="small" current={this.state.current}>
                    {steps.map(item => <Step key={item.title} title={item.title}/>)}
                </Steps>
                {this.state.alertVisible ? <Alert message={this.state.alertMsg.message} type={this.state.alertMsg.type}
                                                  onClose={this.alertClose}/> :
                    null}
                <div className={stepCss.stepContent}>
                    <div className={stepCss.stepControlGroup}>
                        {steps[this.state.current].content}
                    </div>
                    {
                        this.state.current < steps.length - 1
                        && <Button type="primary" onClick={this.next}>下一步</Button>
                    }
                </div>
            </div>
        )
    }
}