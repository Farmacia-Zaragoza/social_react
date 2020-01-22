import React, { Component } from 'react';
import { horizontalSlideleft, horizontalSlideRight, stopTabScroll, fastHorizontalSlideRight, fastHorizontalSlideleft } from '../../config/scroll';

//components
import Content from './Content';

export default class SingleAccorDion extends Component {
    render() {
        // console.log(this.props.title)
        return (
            <div className={`accordionEachBar bar_0${this.props.index}`} style={{marginBottom: this.props.lastbar-1 === this.props.index && '0px'}}>
                <button className={`accordion section_${this.props.index+1} section_right_circle`} style={{
                    background: '#'+this.props.bg_color
                }}
                ><div className="acc_btn_inner"><h4 className={`bar_title_color_0${this.props.index}`}>{this.props.title.value}</h4></div></button>
                <div className="panel">
                    <div className="panel_scroll_right"
                        onMouseEnter={() => horizontalSlideleft(this.panel_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.panel_inner_scroll)}
                    >
                        <i className="fa fa-caret-left stfc_arrows"></i>
                    </div>
                    <div className="toRight"
                        onMouseEnter={() => fastHorizontalSlideleft(this.panel_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.panel_inner_scroll)}
                    >
                        <i className="fa fa-angle-left stfc_arrows"></i>
                        <i className="fa fa-angle-left stfc_arrows"></i>
                    </div>
                    <div className={`panel_inner_scroll`} ref={node => this.panel_inner_scroll = node}>
                        <Content content={this.props.content} index={this.props.index} />
                    </div>
                    <div className="panel_scroll_left"
                        onMouseEnter={() => horizontalSlideRight(this.panel_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.panel_inner_scroll)}
                    >
                        <i className="fa fa-caret-right stfc_arrows"></i>
                    </div>
                    <div className="toLeft"
                        onMouseEnter={() => fastHorizontalSlideRight(this.panel_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.panel_inner_scroll)}
                    >
                        <i className="fa fa-angle-right stfc_arrows"></i>
                        <i className="fa fa-angle-right stfc_arrows"></i>
                    </div>
                </div>
            </div>
        )
    }
}

