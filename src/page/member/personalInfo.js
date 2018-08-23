import React from 'react';
import {Menu, Icon} from 'antd';
import '../../css/custom.css';
import {Link} from 'react-router-dom'
import {routes} from '../../route/router'


export default class personalInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    handleClick = (e) => {
        console.log('click ', e);
    };

    render() {
        return (
            <div className="live-wrap">
                <div className="u-header">
                    <h1>个人中心</h1>
                </div>
                <div className="u-main">
                    <Menu
                        onClick={this.handleClick}
                        style={{width: 168, float: 'left'}}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                    >
                        {
                            routes.filter((route) => route.type === 'loginSuccess')
                                .map((route) => <Menu.Item key={route.key}><Link to={route.path}><Icon
                                    type={route.iconType}/>{route.text}</Link></Menu.Item>)
                        }
                    </Menu>
                </div>
                <div className="u-mainbody">

                </div>
            </div>
        )
    }
}