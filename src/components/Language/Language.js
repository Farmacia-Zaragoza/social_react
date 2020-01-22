import React, { Component } from 'react';
import { horizontalSlideRight, horizontalSlideleft, stopTabScroll } from '../../config/scroll';
// import hostName from '../../config/getDomain';

export default class Language extends Component {
    language_inner_scroll = '';
    render() {
        let hostName = window.location.protocol+'//'+window.location.hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://social.vbrqx.com';
        }
        const flag_items = this.props.langs.length > 0 && this.props.langs.map((item, i) => (
            <div className="flag" key={i} data-toggle="tooltip" data-placement="top" title={item.hover}>
                <a href={`${hostName}/${item.id}`}>
                    <img src={`${hostName}/${item.flag}`} alt={item.name} />
                </a>
            </div>
        ));
        // console.log(this.props.articles)
        const left_play_link = () => {
            let link;
            this.props.articles.length > 0 && this.props.articles.forEach((data, i) => {
                link = data.pull02 !== undefined ? data.pull02.prev_item.clink : '';
            });
            return link;
        }
        const right_play_link = () => {
            let link;
            this.props.articles.length > 0 && this.props.articles.forEach((data, i) => {
                link = data.pull02 !== undefined ? data.pull02.next_item.clink : '';
            });
            return link;
        }
        // console.log(left_paly_link())
        return (
            <div className="language_wrapper">
                <div className="pre_play_btn">
                    <a href={`/${left_play_link()}`}>
                        <img src="http://social.vbrqx.com/r_img/selectors/brqx_play_left_button_green_0050_2019.svg" alt="play"/>
                    </a>
                </div>
                <div className="flag_scroll_right"
                    onMouseEnter={() => horizontalSlideleft(this.language_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.language_inner_scroll)}
                >
                    <img src="http://social.vbrqx.com/index1/img/arrows/brqx_reverse_piramidal_arrow_breadcrumb_right_030_2018.png" alt="arrow"/>
                </div>
                <div className="language_inner_scroll" ref={node => this.language_inner_scroll = node}>
                    {flag_items}
                </div>
                <div className="flag_scroll_left"
                    onMouseEnter={() => horizontalSlideRight(this.language_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.language_inner_scroll)}
                >
                    <img src="http://social.vbrqx.com/index1/img/arrows/brqx_reverse_piramidal_arrow_breadcrumb_030_2018.png" alt="arrow"/>
                </div>
                <div className="next_play_btn">
                   <a href={`/${right_play_link()}`}>
                        <img src="http://social.vbrqx.com/r_img/selectors/brqx_play_right_button_green_0050_2019.svg" alt="play"/>
                   </a>
                </div>
            </div>
        )
    }
}
