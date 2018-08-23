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
                <h1>站内信</h1>
            </div>
        )
    }
}