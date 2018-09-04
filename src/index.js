import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Layout} from 'antd';
import HeaderComponent from './component/header'
import {Switch, BrowserRouter as Router, withRouter} from 'react-router-dom'
import {routes} from "./router/router";
import {Provider} from 'react-redux';
import store from './redux/store';
import {renderRoutes} from 'react-router-config'


const Index = withRouter((props) => {
    const {location} = props;
    const {Content, Footer} = Layout;
    return (
        <Layout className="layout">
            <HeaderComponent pathname={location.pathname}/>
            <Content style={{padding: '0 50px'}}>
                <div style={{
                    background: '#fff',
                    padding: 24,
                    minHeight: 280,
                    height: 'auto',
                    overflow: 'hidden'
                }}>
                    <Switch>
                        {renderRoutes(routes)}
                    </Switch>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Ant Design ©2016 Created by Ant UED
            </Footer>
        </Layout>
    )
});


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Index/>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
