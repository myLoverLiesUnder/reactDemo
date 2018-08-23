import React from 'react';
import {Alert } from 'antd';
import '../css/Alert.css'


const alert = (props) => {
    return (
        <div className="alertBody">
            <Alert message={props.message} type={props.type} showIcon　closable onClose={props.onClose} />
        </div>
    )
};

export default alert

