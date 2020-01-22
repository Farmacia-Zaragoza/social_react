import React, { Component } from 'react'

export default class ClickToShowSlide extends Component {
    componentDidMount() {
        const trans_bg = document.querySelector('.trans_bg');
        trans_bg.addEventListener('click', (e) => {
            
            if(e.target.className === 'trans_bg') {
                this.props.hideTransBg(false);
                this.props.rotateAngleHandler(false);
            }
        });
    }
    clickHandler = () => {
        // this.props.hideTransBg(false);
        this.props.rotateAngleHandler(false);
        this.props.focusScroll(true);
        console.log('clicked')
    }
    render() {
        return (
            <div className="page_carousel_wrapper"
                style={{
                    display: this.props.rotateAngle ? 'block': 'none'
                }}
            >
                <h2
                    onClick={() => this.clickHandler()}
                >PRESS CLICK TO OPEN PAGE CAURUSEL</h2>
            </div>
        )
    }
}

