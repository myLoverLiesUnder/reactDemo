import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Layout} from 'antd';
import HeaderComponent from './component/header'
import {Switch, BrowserRouter as Router} from 'react-router-dom'
import {routes} from "./router/router";
import {Provider} from 'react-redux';
import store from './redux/store';
import { renderRoutes } from 'react-router-config'


class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeKey: '',
        }
    }

    render() {
        const {Content, Footer} = Layout;
        return (
            <Router>
                <Layout className="layout">
                    <HeaderComponent/>
                    <Content style={{padding: '0 50px'}}>
                        <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                            <Switch>
                                {renderRoutes(routes)}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Router>
        )
    }
}


ReactDOM.render(<Provider store={store}><Index/></Provider>, document.getElementById('root'));
registerServiceWorker();
