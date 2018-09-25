import React from 'react'
import memberCss from '../../css/custom.css'
import PersonalInfoMenu from './personInfo/personalInfoMenu'
import BreadCrumbComponent from "../../component/breadcrumb"
import {withRouter, Switch} from 'react-router-dom'
import {routes} from "../../router/router"
import {renderRoutes} from 'react-router-config'

class memberIndex extends React.Component {
    render() {
        let sub = routes.filter(route => route.routes && route.routes.length > 0 && route.key === 'member')[0];
        const {location} = this.props;
        return (
            <div>
                <PersonalInfoMenu pathname={location.pathname}/>
                <div className={memberCss.uMainbody}>
                    {location.pathname === '/member/cp' ? <BreadCrumbComponent subRoutes={sub.routes}/> : ''}
                    <Switch>
                        {renderRoutes(sub.routes)}
                    </Switch>
                </div>
            </div>
        )
    }
}


export default withRouter(memberIndex)





