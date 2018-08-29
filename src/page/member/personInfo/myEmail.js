import React from 'react';
import PersonalInfo from '../personalInfo'
import myEmailCss from '../../../css/custom.css'

export default class myFollow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div>
                <PersonalInfo/>
                <div className={myEmailCss.uMainbody}>
                    <h1>站内信</h1>
                </div>
            </div>
        )
    }
}