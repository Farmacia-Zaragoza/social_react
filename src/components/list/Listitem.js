import React, { Component } from 'react';
import { stopTabScroll, horizontalSlideleft, horizontalSlideRight } from '../../config/scroll';

export default class Listitem extends Component {
    render() {
        return (
            <div className="list_marquee_text">
                <div className="list_left_item_scroll"
                onMouseEnter={() => horizontalSlideleft(this.list_item_scroll)}
                onMouseLeave={() => stopTabScroll(this.list_item_scroll)}
                >
                    <img src="http://social.vbrqx.com/index1/img/arrows/brqx_big_arrow_red_left_050_2018.png" alt="icon"/>
                </div>
                <p className="list_txt list_item_scroll" ref={node => this.list_item_scroll=node}>
                    <a href={`/${this.props.item.clink}`} className={`stfc_link ${this.props.index%2===0 ? 'even': 'odd'}`}>{this.props.item.name}</a>
                </p>
                <div className="list_right_item_scroll"
                    onMouseEnter={() => horizontalSlideRight(this.list_item_scroll)}
                    onMouseLeave={() => stopTabScroll(this.list_item_scroll)}
                >
                    <img src="http://social.vbrqx.com/index1/img/arrows/brqx_big_arrow_red_right_050_2018.png" alt="icon"/>
                </div>
            </div>
        )
    }
}
