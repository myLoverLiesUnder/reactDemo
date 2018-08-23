import React from 'react';
import PersonalInfo from '../personalInfo'

export default class myFollow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>我的资料</h1>
                <PersonalInfo/>
            </div>
        )
    }
}