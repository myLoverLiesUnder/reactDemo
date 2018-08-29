import React from 'react';
import {Alert} from 'antd';
import alertCss from '../css/Alert.css'


const alert = (props) => {
    return (
        <div className={alertCss.alertBody}>
            <Alert message={props.message} type={props.type} showIcon closable onClose={props.onClose}/>
        </div>
    )
};

export default alert

