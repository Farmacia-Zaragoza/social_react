import React, { Component } from 'react';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';

export default class TrapezeDesktop extends Component {
    render() {
        let hostName = window.location.protocol+'//'+window.location.hostname;
            if(window.location.hostname === 'localhost') {
                hostName = 'http://social.vbrqx.com'
            }
        const trapeze_flags = this.props.diamond_langs.length>0 && this.props.diamond_langs.map((item, i) => (
            <div className="trapeze_flag" key={i} data-toggle="tooltip" data-placement="top" title={item.hover}>
                <a href={`/${item.id}`}>
                    <img src={`${hostName}/${item.flag}`} alt={item.name} />
                </a>
            </div>
        ));
        return (
            <div className="trapeze_desktop">
                <div className="trapeze_scroll_down_desk"
                        onMouseEnter={() => verticalSlideDown(this.trapeze_desktop_scroll)}
                        onMouseLeave={() => stopTabScroll(this.trapeze_desktop_scroll)}
                    >
                        <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_up_green_050.png" alt="arrow"/>
                </div>

                <div className="trapeze_desktop_scroll" ref={v => this.trapeze_desktop_scroll = v}>
                    {trapeze_flags}
                </div>

                <div className="trapeze_scroll_up_desk"
                    onMouseEnter={() => verticalSlideUp(this.trapeze_desktop_scroll)}
                    onMouseLeave={() => stopTabScroll(this.trapeze_desktop_scroll)}
                >
                    <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_down_green_050.png" alt="arrow"/>
                </div>
            </div>
        )
    }
}