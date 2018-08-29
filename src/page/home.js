import React from 'react';
import {getHomeList} from "../axios/api"
import styles from '../css/custom.css'

/**
 * preIndex，preRoomId
 * 用来记录鼠标点击的上一个ref
 *
 */
let preIndex = '';
let preRoomId = '';

export default class home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            homeList: [],
            coverPic: '',
            currentIndex: ''
        }
    }

    componentDidMount() {
        getHomeList().then((res) => {
            if (res.statusText === 'OK') {
                this.setState({homeList: res.data});
                this.setState({coverPic: res.data[0].pic});
                this.refs[res.data[0].roomid].style.border = '2px solid #ff6600';
                this.refs[0].style.display = 'inline';
                preIndex = 0;
                preRoomId = res.data[0].roomid;
            }
        })
    }

    clickPic = (item, index) => {
        this.setState({coverPic: item.pic});
        this.setState({currentIndex: index});
        if (index !== preIndex) {
            //如果上一个图片index不等于现在的index，移除上一个图片的样式
            this.refs[item.roomid].style.border = '2px solid #ff6600';
            this.refs[index].style.display = 'inline';
            this.refs[preRoomId].style.border = '2px solid transparent';
            this.refs[preIndex].style.display = 'none';
            preIndex = index;
            preRoomId = item.roomid;
        }
    };

    hoverEnter = (item, index) => {
        this.refs[item.roomid].style.border = '2px solid #ff6600';
        this.refs[index].style.display = 'inline';
    };

    hoverLeave = (item, index) => {
        if (preIndex !== index) {
            //如果上一个点击的图片的坐标不等于鼠标hover离开图片的坐标，则将当前hover离开的图片的样式移除
            this.refs[item.roomid].style.border = '2px solid transparent';
            this.refs[index].style.display = 'none';
        }
    };

    render() {
        return (
            <div className={styles.channel}>
                <div className={styles.videoArea}>
                    <img alt="example" style={{'width': '100%', 'height': '100%'}} src={this.state.coverPic}/>
                </div>
                <div className={styles.items}>
                    <ul style={{'listStyle': 'none'}}>
                        {this.state.homeList.map((item, index) =>
                            <li key={item.roomid}>
                                <a href="" onClick={e => {
                                    e.preventDefault();
                                    this.clickPic(item, index)
                                }}
                                   onMouseEnter={() => this.hoverEnter(item, index)}
                                   onMouseLeave={() => this.hoverLeave(item, index)}
                                >
                                    <div ref={item.roomid} className={styles.pic}>
                                        <img alt="example" src={item.pic}/>
                                    </div>
                                    <div ref={index} className={styles.txt}>
                                        <span>{item.roomname}</span>
                                    </div>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}