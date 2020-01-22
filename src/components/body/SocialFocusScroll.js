import React, { Component } from 'react';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';

export default class SocialFocusScroll extends Component {
    render() {
        // console.log(this.props.menus)
        const article_items_second = Object.keys(this.props.menus).length > 0 && this.props.menus.second.pull02.content.pull03.map((item, i) => (
            <div className="article_menu_item" key={i}>
                <a href={`/${item.clink}`}>
                    {item.name}
                </a>
            </div>
        ));
        return (
            <div className="focus_wrapper">
                <div className="focus_inner">
                <div className="focus_inner_rel">
                <div className="downward_focus_content focus_icon"
                    onMouseEnter={() => verticalSlideDown(this.focus_content_scroll)}
                    onMouseLeave={() => stopTabScroll(this.focus_content_scroll)}
                >
                    <ul>
                        <li>
                            <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_up_green_050.png" alt="arrow"/>
                        </li>
                        <li>
                            <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_up_green_050.png" alt="arrow"/>
                        </li>
                        <li>
                            <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_up_green_050.png" alt="arrow"/>
                        </li>
                    </ul>
                </div>
                <div className="focus_content_scroll" ref={node => this.focus_content_scroll=node}>
                    <div className="focus_body_content">
                        {article_items_second}
                    </div>
                </div>
                <div className="upward_focus_content focus_icon"
                        onMouseEnter={() => verticalSlideUp(this.focus_content_scroll)}
                        onMouseLeave={() => stopTabScroll(this.focus_content_scroll)}
                >
                    <ul>
                        <li>
                            <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_down_green_050.png" alt="arrow"/>
                        </li>
                        <li>
                            <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_down_green_050.png" alt="arrow"/>
                        </li>
                        <li>
                            <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_down_green_050.png" alt="arrow"/>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
