import React from 'react';
import {getFollowsList} from "../../../axios/api"
import {Row, Col, Card, Icon} from 'antd'
import listCss from '../../../css/custom.css'


export default class myFollow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            follow: []
        }
    }

    componentDidMount() {
        getFollowsList().then((res) => {
            this.setState({follow: res.data})
        })
    }

    render() {
        return (
            <div>
                <Row gutter={16}>
                    {this.state.follow.map((item) =>
                        <Col key={item.roomid} span={12}>
                            <div className={listCss.box}>
                                <div className={listCss.fPic}>
                                    <img src={item.pic} alt="example"/>
                                </div>
                                <div className={listCss.fInfo}>
                                    <h1>{item.roomname}</h1>
                                    <p>{item.nickname}</p>
                                    <p style={{color:'#ff630e'}}>{item.gamename}</p>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </div>
        )
    }
}