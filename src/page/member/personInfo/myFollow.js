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
                <PersonalInfo/>
                <h1>我的关注</h1>
            </div>
        )
    }
}