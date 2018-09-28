import React from 'react';


const handle = (str, array, res) => {
    for (let i = 0; i < array.length; i++) {
        let temp = array.filter((item, index) => index !== i);
        let tempStr = str + array[i].toString();
        if (temp.length === 0) {
            let arr = res.filter(item => item === tempStr);
            if (arr.length === 0) {
                res.push(tempStr);
            }
            return
        }
        handle(tempStr, temp, res);
    }

};

export default class bar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    componentDidMount() {
        /*let n = 12345678;
        let array = [];
        let res = [];
        for (let i = 0; i < n.toString().length; i++) {
            array.push(parseInt(n.toString()[i]))
        }
        for (let j = 0; j < array.length; j++) {
            let str = array[j].toString();
            let temp = array.filter((item, index) => index !== j);
            handle(str, temp, res)
        }*/
    }


    render() {
        return (
            <div>
                123
            </div>
        )
    }
}