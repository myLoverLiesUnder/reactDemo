import React from 'react';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;

const liveList = (props) => {
    return (
        <Tabs defaultActiveKey="all" onTabClick={props.onChange}>
            {
                props.directory.reduce((array, item) => {
                    return item.id === '#' || item.parent === '#' ?
                        array.concat(<TabPane tab={item.text} key={item.key}/>) : array
                }, [])
            }
        </Tabs>
    )
};

export default liveList

