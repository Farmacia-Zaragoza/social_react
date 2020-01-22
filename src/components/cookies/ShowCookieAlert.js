import React, { Component } from 'react';

export default class ShowCookieAlert extends Component {
    componentDidMount() {
        // cookies fadeout
        window.addEventListener('mousemove', function() {
            setTimeout(function(){
                document.querySelector('.cookies_alert').classList.add('fadeout');
            }, 1000);
        });
    }
    render() {
        const cookies_warning_show = Object.keys(this.props.cookies_warning).length > 0 && (
            <div className="container text-center">
                    {this.props.cookies_warning.information.pull02.main_cookies_msg.value}
                <a href={`/${this.props.cookies_warning.information.pull02.cookies_lang.value}`}> {this.props.cookies_warning.information.pull02.cookies_information.value}</a>
                <div className="accept_cookie_btn">
                    <ul>
                        <li className="cookie_yes">
                            <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2018_accept_symbol_blue_0050.svg" alt="icon" />
                        </li>
                        <li className="cookie_no">
                            <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2018_close_symbol_blue_0050.svg" alt="icon" />
                        </li>
                    </ul>
                </div>
            </div>
        )
        return (
            <div className="cookies_alert">
                {cookies_warning_show}
            </div>
        )
    }
}
