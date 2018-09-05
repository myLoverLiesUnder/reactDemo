import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Breadcrumb} from 'antd';

const BreadcrumbComponent = withRouter((props) => {
    const {location} = props;
    const {subRoutes} = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);

    const breadcrumbItem = subRoutes.map(item => {
        for (let i = 2; i < pathSnippets.length + 1; i++) {
            const url = "/" + pathSnippets.slice(0, i).join("/");
            if (url === item.path) {
                return <Breadcrumb.Item key={url}>
                    <Link to={url}>{item.text}</Link>
                </Breadcrumb.Item>
            }
        }
        return null
    });

    return (
        <div>
            <Breadcrumb>
                {breadcrumbItem}
            </Breadcrumb>
        </div>
    )
});

export default BreadcrumbComponent