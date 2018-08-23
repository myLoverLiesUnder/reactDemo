import React from 'react';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;

const liveList = (props) => {
    return (
        <Tabs defaultActiveKey="all" onTabClick={props.onChange}>
            {
                props.directory.filter((item) => item.id === '#' || item.parent === '#')
                    .map((item) => <TabPane tab={item.text} key={item.key}/>)
            }
        </Tabs>
    )
};

export default liveList

