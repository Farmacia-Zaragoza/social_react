import React, { Component } from 'react';
import hostName from '../../config/getDomain';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';

export default class ArticleItemMenu extends Component {
    article_item_menu_scroll = '';
    state = {
        items: [
            'item_1',
            'item_2',
            'item_3',
            'item_4',
            'item_5',
            'item_6',
            'item_7',
            'item_8',
            'item_9',
            'item_10',
            'item_11',
            'item_12',
            'item_13',
        ]
    }
    componentDidMount() {
        // const article_item_menu_wrapper = document.querySelector('.article_item_menu_wrapper');
        // article_item_menu_wrapper.addEventListener('mouseout', (e) => {
            
        //     // if(e.target.className === 'trans_bg') {
        //     //     // this.props.hideTransBg(false);
        //     //     this.props.articlelItemHandle(false);
        //     // }
        //     console.log('done')
        // });
    }
    render() {
        const article_items = this.state.items.length > 0 && this.state.items.map((item, i) => (
            <div className="article_menu_item" key={i}>
                <a href={`${hostName}/${item}`}>
                    {item}
                </a>
            </div>
        ));
        return (
            <div className="article_item_menu_wrapper">
                <div className="article_item_inner">
                    <div className="article_item_up"
                        onMouseEnter={() => verticalSlideDown(this.article_item_menu_scroll)}
                        onMouseLeave={() => stopTabScroll(this.article_item_menu_scroll)}
                    >
                        <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_up_red_050.png" alt="arrow"/>
                    </div>
                        <div className="article_item_menu_scroll" ref={node => this.article_item_menu_scroll = node}>
                            {article_items}
                        </div>
                    <div className="article_item_down"
                        onMouseEnter={() => verticalSlideUp(this.article_item_menu_scroll)}
                        onMouseLeave={() => stopTabScroll(this.article_item_menu_scroll)}
                    >
                        <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_down_red_050.png" alt="arrow"/>
                    </div>
                </div>
            </div>
        )
    }
}
