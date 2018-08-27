import React from 'react';
import DirectoryTab from '../../component/directoryTab'
import {directory} from "../../router/directory"
import {getLivesByKey} from "../../axios/api"
import {Row, Col, Card, Icon} from 'antd'

import '../../css/custom.css'


export default class liveList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '全部直播',
            key: 'all',
            directory: directory,
            array: []
        }
    }

    componentDidMount() {
        getLivesByKey(this.state.key).then((res) => {
            this.setState({array: res.data})
        })
    }

    onChange = (key) => {
        directory.filter((item) => item.key === key)
            .map((item) => this.setState({title: item.text, key: item.key}));
        getLivesByKey(key).then((res) => {
            this.setState({array: res.data})
        })
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <DirectoryTab onChange={this.onChange} directory={this.state.directory}/>
                <Row gutter={16}>
                    {this.state.array.map((item) =>
                        <Col key={item.roomid} span={6}>
                            <Card
                                hoverable
                                style={{width: 240}}
                                cover={<img alt="example" src={item.pic}/>}
                            >
                                <div className="cardTitle">
                                    <h3 className="ellipsis">{item.roomname}</h3>
                                    <span className="tag">{item.gamename}</span>
                                </div>
                                <p style={{fontSize: '12px'}}><Icon type="user"/> {item.nickname}</p>
                            </Card>
                        </Col>)
                    }
                </Row>
            </div>
        )
    }
}