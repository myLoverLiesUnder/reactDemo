import React from 'react';
import {getHomeList} from "../axios/api"

export default class home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            homeList: [],
            coverPic: ''
        }
    }

    componentDidMount() {
        getHomeList().then((res) => {
            if (res.statusText === 'OK') {
                this.setState({homeList: res.data});
                this.setState({coverPic: res.data[0].pic});
            }
        })
    }

    clickPic = (url) => {
        this.setState({coverPic: url})

    };

    render() {
        return (
            <div className="channel">
                <div className="video-area">
                    <img alt="example" style={{'width': '100%', 'height': '100%'}} src={this.state.coverPic}/>
                </div>
                <div className="items">
                    <ul style={{'listStyle': 'none'}}>
                        {this.state.homeList.map(item =>
                            <li key={item.roomid}>
                                <div className="pic">
                                    <img onClick={() => {
                                        this.clickPic(item.pic)
                                    }} alt="example" src={item.pic}/>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}