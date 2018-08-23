const directory = [
    {
        id: '#',
        key: 'all',
        text: '全部直播',
    },
    {
        id: 1,
        key: 'online',
        text: '网游竞技',
        parent: '#'
    },
    {
        id: 2,
        key: 'lol',
        text: '英雄联盟',
        parent: 1
    },
    {
        id: 3,
        key: 'csgo',
        text: 'CS:GO',
        parent: 1
    },
    {
        id: 4,
        key: 'dnf',
        text: 'DNF',
        parent: 1
    },
    {
        id: 5,
        key: 'pc',
        text: '单机热游',
        parent: '#'
    },
    {
        id: 6,
        key: 'pubg',
        text: '绝地求生',
        parent: 5
    },
    {
        id: 7,
        key: 'tv',
        text: '主机游戏',
        parent: 5
    },
    {
        id: 8,
        key: 'new',
        text: '新游前线',
        parent: 5
    },
    {
        id: 9,
        key: 'mobile',
        text: '手游休闲',
        parent: '#'
    },
];

export {directory}