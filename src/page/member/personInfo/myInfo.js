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
                <div className="u-mainbody">
                    <h1>我的资料</h1>
                </div>
            </div>
        )
    }
}