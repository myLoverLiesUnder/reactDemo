import React from 'react';
import {Menu, Icon} from 'antd';
import psCss from '../../../css/custom.css';
import {Link} from 'react-router-dom'
import {routes} from '../../../router/router'
import PropTypes from 'prop-types'


export default class personalInfoMenu extends React.Component {
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
        let pathName = this.props.pathname;
        let index = '';
        let sub = routes.filter(route => route.routes && route.routes.length > 0 && route.key === 'member')[0];
        sub.routes.filter((route) => route.path === pathName)
            .map((route) => index = route.key);
        this.setState({activeKey: index})
    }


    render() {
        let sub = routes.filter(route => route.routes && route.routes.length > 0 && route.key === 'member')[0];
        return (
            <div className={psCss.liveWrap}>
                <div className={psCss.uHeader}>
                    <h1>个人中心</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    style={{width: 168, float: 'left', border: 'transparent'}}
                    selectedKeys={[this.state.activeKey]}
                >
                    {
                        sub.routes.filter((route) => route.type === 'member')
                            .map((route) => <Menu.Item key={route.key}><Link to={route.path}><Icon
                                type={route.iconType}/>{route.text}</Link></Menu.Item>)
                    }
                </Menu>

            </div>
        )
    }
}

personalInfoMenu.contextTypes = {
    router: PropTypes.object
};