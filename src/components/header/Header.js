import React, { Component } from 'react';

//components
import SocialSearch from './SocialSearch';
// import TrapezeFlags from './TrapezeFlags';
import TrapezeDesktop from './TrapezeDesktop';

export default class Header extends Component {
    header_content_m = '';
    state = {
        trapeze_toggle: false
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.sortText(this.header_content_m);
        });
        
    }

    sortText = (node) => {
        let text = node.textContent;
        let sortedtext = text.slice(0, 65);
        if(this.props.windowWidth < 992){
            this.header_content_m.textContent = sortedtext;
        }
    }
    render() {
        // console.log(this.props.social)
        // console.log(Object.keys(this.props.site).length > 0 &&this.props.site.theme)
        let hostName = window.location.protocol+'//'+window.location.hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://social.vbrqx.com'
        }
        const stfc_title = Object.keys(this.props.site).length > 0 && this.props.site.general.pull02.sg_site_title.value;
        const stfc_subtitle = Object.keys(this.props.site).length > 0 && this.props.site.general.pull02.sg_site_subtitle.value;
        const stfc_subsubtitle = Object.keys(this.props.site).length > 0 && this.props.site.general.pull02.sg_site_sub_subtitle.value;
        const st_logo = () => {
            if(Object.keys(this.props.site).length > 0) {
                if(this.props.windowWidth > 1920) return `${hostName}/${this.props.site.theme.pull02.st_logo.pull03.stl_4k_logo.img}`;
                if(this.props.windowWidth > 991) return `${hostName}/${this.props.site.theme.pull02.st_logo.pull03.stl_desktop_logo.img}`;
                if(this.props.windowWidth > 570) return `${hostName}/${this.props.site.theme.pull02.st_logo.pull03.stl_tablet_logo.img}`;
                if(this.props.windowWidth <= 570) return `${hostName}/${this.props.site.theme.pull02.st_logo.pull03.stl_mobile_logo.img}`;
            }
        }
        // console.log(st_logo())
        return (
            <div className="header_section region_header">
                <div className="row">
                    <div className={`${this.props.windowWidth > 570 ? 'col-2 left_logo' : 'col-3 left_logo'}`}>
                        <a href="/"><img src={st_logo()} alt="logo"/></a>
                    </div>
                    <div className={`${this.props.windowWidth > 570 ? 'col-8' : 'col-6'}`}>
                        {this.props.windowWidth > 992 && <SocialSearch social={this.props.social} />}
                        <div className="middle_header_content">
                            {/* <h4 ref={v => this.header_content_m = v}>Social - Enfoque Social De Brqx Una mirada hacia nuestra siciedad - A Look To Our People!</h4> */}
                            <h3 className="stfc_title">{stfc_title}</h3>
                            <h3 className="stfc_subtitle">{this.props.windowWidth > 570 && stfc_subtitle}</h3>
                            <h3 className="stfc_subsubtitle">{this.props.windowWidth > 570 && stfc_subsubtitle}</h3>
                        </div>
                    </div>
                    <div className={`${this.props.windowWidth > 570 ? 'col-2 right_logo' : 'col-3 right_logo'}`}>
                        <img src="http://social.vbrqx.com/index1/img/logos/brqx_reverse_piramidal_flag_de_0100_2018.png" alt="logo"
                            onClick={() => this.props.trapezeMobile(true)}
                        />
                        {this.props.windowWidth > 570 && <TrapezeDesktop diamond_langs={this.props.diamond_langs} />}
                    </div>
                </div>
                {this.props.windowWidth < 992 && <SocialSearch social={this.props.social} />}
                {/* {this.props.windowWidth > 570 && <TrapezeDesktop />} */}
            </div>
        )
    }
}
