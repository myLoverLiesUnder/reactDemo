import React from 'react';
import {Menu, Icon} from 'antd';
import psCss from '../../css/custom.css';
import {Link} from 'react-router-dom'
import {routes} from '../../router/router'
import PropTypes from 'prop-types'


export default class personalInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeKey: ''
        }
    }

    handleClick = (item) => {
        this.setState({activeKey: item.key})
    };

    componentDidMount() {
        let pathName = this.context.router.route.location.pathname;
        let index = '';
        routes.filter((route) => route.path === pathName)
            .map((route) => index = route.key);
        this.setState({activeKey: index})
    }

    render() {
        return (
            <div className={psCss.liveWrap}>
                <div className={psCss.uHeader}>
                    <h1>个人中心</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    style={{width: 168, float: 'left',border:'transparent'}}
                    selectedKeys={[this.state.activeKey]}
                >
                    {
                        routes.filter((route) => route.type === 'loginSuccess')
                            .map((route) => <Menu.Item key={route.key}><Link to={route.path}><Icon
                                type={route.iconType}/>{route.text}</Link></Menu.Item>)
                    }
                </Menu>

            </div>
        )
    }
}

personalInfo.contextTypes = {
    router: PropTypes.object
};