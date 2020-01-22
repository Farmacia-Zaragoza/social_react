import React, { Component } from 'react';
import { verticalSlideDown, verticalSlideUp, stopTabScroll, fastVerticalSlideUp, fastVerticalSlideDown } from '../../config/scroll';

//components
// import Contents from './Contents';

import DataContent from './DataContent';


export default class ContentScroll extends Component {
    content_inner_scroll = '';
    state = {
        showZoomImage: false
    }
    componentDidMount() {
        setTimeout(() => {
            const zoom_image_wrapper = document.querySelector('.zoom_image_wrapper');
            zoom_image_wrapper.addEventListener('click', (e) => {
                if(e.target.className === 'zoom_image_wrapper') {
                    this.setState({
                        showZoomImage: false
                    })
                }
            });
        }, 2000);
    }

    render() {
        // console.log(this.props.articles);
        //let resolutions = Object.keys(this.props.site).length > 0 && this.props.site.images.pull02.breakpoints_information.pull03;
        // console.log(resolutions)
        //let zoom_resolutions = Object.keys(this.props.site).length > 0 && this.props.site.images.pull02;
        // console.log(zoom_resolutions)
        let hostName = window.location.protocol+'//'+window.location.hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://social.vbrqx.com'
        }

        const getImage = (img) => {
            // let link = '';
            // if(resolutions) {
                
            //     resolutions.forEach((res) => {
            //         if(parseInt(res.break) < window.innerWidth ) {
            //             link = img.replace(/RESOLUTION/g, res.resolution);
            //         }
            //     })
            // }
            // return link;
            //0160x0200 0200x0270 0250x0320 0300x0400
            let link = '';
            if(window.innerWidth < 1925 ) {
                link = img.replace(/RESOLUTION/g, '0300x0400');
            }
            if(window.innerWidth < 1200 ) {
                link = img.replace(/RESOLUTION/g, '0250x0320');
            }
            if(window.innerWidth < 992 ) {
                link = img.replace(/RESOLUTION/g, '0200x0270');
            }
            if(window.innerWidth < 768 ) {
                link = img.replace(/RESOLUTION/g, '0160x0200');
            }
            return link;
        }

        const getZoomImage = (img) => {
            let link = '';
            if(window.innerWidth < 1925 ) {
                link = img.replace(/RESOLUTION/g, '0900x1200');
            }
            if(window.innerWidth < 1200 ) {
                link = img.replace(/RESOLUTION/g, '0750x0960');
            }
            if(window.innerWidth < 992 ) {
                link = img.replace(/RESOLUTION/g, '0600x0710');
            }
            if(window.innerWidth < 768 ) {
                link = img.replace(/RESOLUTION/g, '0480x0600');
            }
            return link;
        }

        //0480x0600 0600x0710 0750x0960 0900x1200

        const articles_content = this.props.articles.length > 0 && this.props.articles.map((data, i) => (
                    <div key={i} className="single_article">
                        <div className="img_with_content">
                            {
                                data.pull02.parragraph.type === "iparragraph" && <div className="owner_img" onClick={() => this.setState({showZoomImage: true})}>
                                    <img src={`${hostName}/${getImage(data.pull02.image.img)}`} alt=""/>
                                </div>
                            }
                            {/* <Contents arry_contents={data.pull02.parragraph.pull03} /> */}
                            <DataContent arry_contents={data.pull02.parragraph.pull03} />
                        </div>
                    </div>
        ));
        const zoom_image_div = this.props.articles.length > 0 && this.props.articles.map((data, i) => (
            <div key={i} className="zoom_image_inner">
                    {
                        data.pull02.parragraph.type === "iparragraph" && <img style={{
                            transform: this.state.showZoomImage ? 'scale(1)' : 'scale(.5)',
                            transition: '.8s'
                        }}
                        src={`${hostName}/${getZoomImage(data.pull02.image.img)}`} alt=""/>
                    }
            </div>
        ));
        return (
            <div className="content_wrapper">
            <div className="downward_content"
                onMouseEnter={() => verticalSlideDown(this.content_inner_scroll)}
                onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
            ></div>
            <div className="toTop"
                onMouseEnter={() => fastVerticalSlideDown(this.content_inner_scroll)}
                onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
            >
                <i className="fa fa-angle-up stfc_arrows"></i>
                <i className="fa fa-angle-up stfc_arrows"></i>
                <i className="fa fa-angle-up stfc_arrows"></i>
                <i className="fa fa-angle-up stfc_arrows"></i>
            </div>
            <div className="zoom_image_wrapper" style={{
                opacity: this.state.showZoomImage ? 1 : 0,
                visibility: this.state.showZoomImage ? 'visible' : 'hidden',
                transition: '.5s'
            }}>
                {zoom_image_div}
            </div>
                <div className="content_inner_scroll region_middle_content" ref={node => this.content_inner_scroll=node}>
                    {articles_content}
                </div>
                <div className="upward_content"
                    onMouseEnter={() => verticalSlideUp(this.content_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
                ></div>
                <div className="toDown"
                    onMouseEnter={() => fastVerticalSlideUp(this.content_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
                >
                    <i className="fa fa-angle-down stfc_arrows"></i>
                    <i className="fa fa-angle-down stfc_arrows"></i>
                    <i className="fa fa-angle-down stfc_arrows"></i>
                    <i className="fa fa-angle-down stfc_arrows"></i>
                </div>
            </div>
        )
    }
}
