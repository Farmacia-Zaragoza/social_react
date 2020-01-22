import React, { Component } from 'react';
// import $ from 'jquery';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';
// import hostName from '../../config/getDomain';

export default class Article extends Component {
    state = {
        longText: 'a01_Social_Focus - Searching A change...',
        sortText: 'a01_Social_Focus - Sear...',
        rotateAngle: false,
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
    rotateAngleHandler = (status) => {
        this.setState({
            rotateAngle: status
        });
    }
    render() {
        let hostName = window.location.protocol+'//'+window.location.hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://social.vbrqx.com'
        }
        console.log(this.state.items)
        const article_items = this.state.items.length > 0 && this.state.items.map((item, i) => (
            <div className="article_menu_item" key={i}>
                <a href={`${hostName}/${item}`}>
                    {item}
                </a>
            </div>
        ));
        return (
            <div className="article_section">
                <div className="top_article">
                    <ul className="article_items">
                        <li className="each_item_article">
                            <h4 className="first_menu">Article</h4>
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
                            
                        </li>
                        <li className="each_item_triangle">
                            <img 
                                src="http://social.vbrqx.com/index1/img/arrows/brqx_reverse_piramidal_arrow_breadcrumb_030_2018.png"
                                 alt="triangle"
                            />
                        </li>
                        <li className="each_item_article show_focus">
                            <h4>{this.props.windowWidth > 991 ? this.state.longText : this.state.sortText}</h4>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
