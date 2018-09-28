import React from 'react';
import header from '../css/Header.css'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Layout, Menu, Dropdown, Icon, Card, Avatar} from 'antd'
import {routes} from '../router/router'
import logo from '../img/logo.png'
import LoginModal from "../component/loginModal"
import RegisterModal from "../component/registerModal"
import {connect} from 'react-redux'
import {loginOut} from "../redux/actions/loginAction"
import Alert from '../component/alert'
import {directory} from "../router/directory"

const {Header} = Layout;

const {Meta} = Card;

const mapStateToProps = (state) => {
    return {
        userInfo: state.login.userInfo,
        errorMsg: state.login.errorMsg
    }
};

const options = {
    pure: false
};


const currentUser = localStorage.getItem("currentUser") || "";


class HeaderComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeKey: '',
            directory: directory,
            loginModalVisible: false,
            registerModalVisible: false,
            alertVisible: false,
            alertMsg: {
                message: '',
                type: ''
            }
        };
    }

    clickItem = (item) => {
        this.setState({activeKey: item.key})
    };

    showLoginModal = () => {
        this.setState({loginModalVisible: true})
    };

    showRegisterModal = () => {
        this.setState({registerModalVisible: true})
    };

    handleLoginModalCancel = () => {
        this.setState({
            loginModalVisible: false
        });
    };

    handleRegisterModalCancel = () => {
        this.setState({
            registerModalVisible: false
        });
    };

    logout = () => {
        //登出后删除当前用户
        this.props.dispatch(loginOut());
        localStorage.removeItem('currentUser');
        this.setState({alertVisible: true});
        this.setState({
            alertMsg: {
                message: '登出成功',
                type: 'success'
            }
        });
        setTimeout(() => {
            this.setState({alertVisible: false})
        }, 2000);
        this.context.router.history.push('/home');
    };

    jumpToCp = () => {
        this.props.history.push('/member/cp', 'cp');
        this.setState({activeKey: ''})
    };

    jumpToFollow = () => {
        this.props.history.push('/member/follow', 'follow');
        this.setState({activeKey: ''})
    };

    jumpToPm = () => {
        this.props.history.push('/member/pm', 'pm');
        this.setState({activeKey: ''})
    };


    hoverEnter = (key) => {
        if (key === 'directory') {
            this.refs.sub.style.display = 'block';
        }
    };

    hoverLeave = (key) => {
        if (key === 'directory') {
            this.refs.sub.style.display = 'none';
        }
    };


    componentDidMount() {
        let pathName = this.props.pathname;
        let index = routes.reduce((index, route) => {
            return route.path === pathName ? index.concat(route.key) : index
        }, '');
        if (pathName === '/') {
            index = routes[0].key
        }
        this.setState({activeKey: index})

    }

    componentWillReceiveProps(nextprops) {
        let history = nextprops.pathname;
        let historyIndex = routes.reduce((index, route) => {
            return route.path === history ? index.concat(route.key) : index
        }, '');
        this.setState({activeKey: historyIndex})
    }

    render() {
        let user = this.props.userInfo;
        if (currentUser && !user.username) {
            user = JSON.parse(currentUser);
        }
        const menu = (
            <div>
                <Card title="我的资料" extra={<a onClick={this.logout}>登出</a>} style={{width: 300}}
                      actions={[<a onClick={this.jumpToCp}>个人中心</a>, <a onClick={this.jumpToFollow}>我的关注</a>,
                          <a onClick={this.jumpToPm}>站内信</a>]}>
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                        description=""
                        title={<a onClick={this.jumpToCp} style={{color: '#868686'}}>{user.nickname}</a>}
                    />
                </Card>
            </div>
        );


        return (
            <Header className={header.headerComponent}>
                <img src={logo} className={header.logo} alt="logo"/>
                {
                    user.username ? <div className={header.loginArea}>
                            <Dropdown overlay={menu}>
                                <a className={header.login}>{user.nickname}<Icon type="down"/></a>
                            </Dropdown>
                        </div>
                        : <div className={header.loginArea}>
                            <a className={header.login} onClick={this.showRegisterModal}>注册</a>
                            <div className={header.login}>|</div>
                            <a className={header.login} onClick={this.showLoginModal}>登陆</a>
                        </div>}
                <Menu
                    theme="light"
                    mode="horizontal"
                    selectedKeys={[this.state.activeKey]}
                    className={header.headerMenu}
                    onClick={this.clickItem}
                >
                    {
                        routes.reduce((array, route) => {
                            return route.type === 'main' ?
                                array.concat(<Menu.Item key={route.key}
                                                        onMouseEnter={() => this.hoverEnter(route.key)}
                                                        onMouseLeave={() => this.hoverLeave(route.key)}>
                                    <Link to={route.path}>{route.text}</Link>
                                </Menu.Item>) : array
                        }, [])
                    }
                </Menu>
                <div className={header.sub} ref="sub"
                     onMouseEnter={() => this.hoverEnter('directory')}
                     onMouseLeave={() => this.hoverLeave('directory')}>
                    <div className={header.list}>
                        <h3>热门分类</h3>
                        <ul>
                            {
                                this.state.directory.reduce((array, item) => {
                                    return item.id !== '#' ?
                                        array.concat(<li key={item.key}>
                                            <a href="">{item.text}</a>
                                        </li>) : array
                                }, [])
                            }
                        </ul>
                    </div>
                </div>
                <LoginModal visible={this.state.loginModalVisible} handleCancel={this.handleLoginModalCancel}/>
                <RegisterModal visible={this.state.registerModalVisible} handleCancel={this.handleRegisterModalCancel}/>
                {this.state.alertVisible ? <Alert message={this.state.alertMsg.message} type={this.state.alertMsg.type}
                                                  onClose={this.handleClose}/> :
                    null}
            </Header>
        )
    }
}

HeaderComponent.contextTypes = {
    router: PropTypes.object,
    userInfo: PropTypes.object,
    errorMsg: PropTypes.string
};

export default connect(mapStateToProps, '', '', options)(withRouter(HeaderComponent));
