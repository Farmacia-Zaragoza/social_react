import React, { Component } from 'react';
// import hostName from '../../config/getDomain';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';
import SocialFocusScroll from './SocialFocusScroll';

export default class Topmenu extends Component {
    render() {
        // console.log(Object.keys(this.props.menus))
        const article_items = Object.keys(this.props.menus).length > 0 && this.props.menus.first.pull02.content.pull03.map((item, i) => (
            <div className="article_menu_item" key={i}>
                <a href={`/${item.clink}`}>
                    {item.name}
                </a>
            </div>
        ));
        
        return (
            <div className="top_menu region_header">
                <ul>
                    <li className="article_1st_li"><span>Article</span>
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
                    <li className="article_2nd_li">
                            <div className="bread_angle">
                                <img 
                                    src="http://social.vbrqx.com/index1/img/arrows/brqx_reverse_piramidal_arrow_breadcrumb_030_2018.png"
                                    alt="triangle"
                                />
                            </div>
                            <div className="breadcrumb_arrow_massage_box">
                                <h1 className="breadcrumb_arrow_massage_box_title">press click to open page caurusel</h1>
                            </div>
                    </li>
                    <li className="article_3rd_li"><span>a01_Social_Focus - Searching A change...</span>
                        <SocialFocusScroll menus={this.props.menus} />
                    </li>
                </ul>
            </div>
        )
    }
}
