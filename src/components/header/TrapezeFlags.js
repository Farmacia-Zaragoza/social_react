import React, { Component } from 'react';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';
// import hostName from '../../config/getDomain';

export default class TrapezeFlags extends Component {
    trapeze_inner_scroll = '';
    componentDidMount() {
        const trapeze_wrapper = document.querySelector('.trapeze_wrapper');
        trapeze_wrapper.addEventListener('click', (e) => {
            console.log(e.target)
            if(e.target.className === 'trapeze_wrapper') {
                this.props.trapezeMobile(false)
            }
        });
    }
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
            <div className="trapeze_wrapper">
                <div className="trapeze_inner">
                    <div className="trapeze_scroll_down"
                        onMouseEnter={() => verticalSlideDown(this.trapeze_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.trapeze_inner_scroll)}
                    >
                        <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_up_green_050.png" alt="arrow"/>
                    </div>

                    <div className="trapeze_inner_scroll" ref={v => this.trapeze_inner_scroll = v}>
                        {trapeze_flags}
                    </div>

                    <div className="trapeze_scroll_up"
                        onMouseEnter={() => verticalSlideUp(this.trapeze_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.trapeze_inner_scroll)}
                    >
                        <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_down_green_050.png" alt="arrow"/>
                    </div>
                </div>
            </div>
        )
    }
}
