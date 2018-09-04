import React from 'react'
import memberCss from '../../css/custom.css'
import PersonalInfoMenu from './personInfo/personalInfoMenu'
import {withRouter, BrowserRouter as Router, Switch} from 'react-router-dom'
import {routes} from "../../router/router"
import {renderRoutes} from 'react-router-config'


const memberIndex = withRouter((props) => {
    let sub = routes.filter(route => route.routes && route.routes.length > 0 && route.key === 'member')[0];
    let subRoutes = sub.routes.filter(route => route.type === 'member');
    const {location} = props;
    console.log(props)
    return (
        <Router>
            <div>
                <PersonalInfoMenu pathname={location.pathname}/>
                <div className={memberCss.uMainbody}>
                    <Switch>
                        {renderRoutes(subRoutes)}
                    </Switch>
                </div>
            </div>
        </Router>
    )
});


export default memberIndex




