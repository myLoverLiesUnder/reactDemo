import React from 'react';
import {getFollowsList} from "../../../axios/api"
import {Row, Col} from 'antd'
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

    hoverEnter = (index) => {
        this.refs[index].style.display = 'block'
    };

    hoverLeave = (index) => {
        this.refs[index].style.display = 'none'
    };

    cancelFollow = (index) => {
        let followList = this.state.follow;
        followList.splice(index,1);
        this.setState({
            follow: followList
        })
    };

    render() {
        return (
            <div>
                <Row gutter={16}>
                    {this.state.follow.map((item, index) =>
                        <Col key={item.roomid} span={12}>
                            <div className={listCss.box}
                                 onMouseEnter={() => this.hoverEnter(index)}
                                 onMouseLeave={() => this.hoverLeave(index)}>
                                <div className={listCss.fPic}>
                                    <img src={item.pic} alt="example"/>
                                </div>
                                <div className={listCss.fInfo}>
                                    <h1>{item.roomname}</h1>
                                    <p>{item.nickname}</p>
                                    <p style={{color: '#ff630e'}}>{item.gamename}</p>
                                    <p className={listCss.cancelFocus}>
                                        <a ref={index} href="" onClick={(e) => {
                                            e.preventDefault();
                                            this.cancelFollow(index)
                                        }}>取消关注</a>
                                    </p>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </div>
        )
    }
}