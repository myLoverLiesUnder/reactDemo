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
        let sub = routes.filter(route => route.routes && route.routes.length > 0 && route.key === 'member')[0];
        let index = sub.routes.reduce((index, route) => {
            return route.path === pathName ? index.concat(route.key) : index
        }, '');
        this.setState({activeKey: index})
    }

    componentWillReceiveProps(nextProps) {
        let history = nextProps.pathname;
        let sub = routes.filter(route => route.routes && route.routes.length > 0 && route.key === 'member')[0];
        let historyIndex = sub.routes.reduce((index, route) => {
            return route.path === history ? index.concat(route.key) : index
        }, '');
        this.setState({activeKey: historyIndex});
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
                        sub.routes.reduce((menuItem, route) => {
                            return route.type === 'member' ? menuItem.concat(<Menu.Item key={route.key}><Link
                                to={route.path}><Icon
                                type={route.iconType}/>{route.text}</Link></Menu.Item>) : menuItem
                        }, [])
                    }
                </Menu>

            </div>
        )
    }
}

personalInfoMenu.contextTypes = {
    router: PropTypes.object
};