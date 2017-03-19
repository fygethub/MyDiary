import React, { Component, PropTypes } from 'react';
import CardItem from './CardItem';

export  default  class CardList extends Component {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object)
    }

    constructor(props){
        super(props);
    }

    getCardItems(){
        const { list } = this.props;
    }

    render(){
        return (
            <ul>
                <CardItem
                    title="游玩"
                    subtitle="北碚缙云山"
                    overlayTitle="阳光明媚天气大好！"
                    cardTitle="和daring爬缙云山"
                    cardSubtitle="日期好像是星期天"
                    diary="下午两点才开始去爬山，缙云山风景真的不错！
                    而且太阳也很大一边爬山一边照相，卡擦卡擦～"
                />
                <CardItem/>
            </ul>
        )
    }
}

