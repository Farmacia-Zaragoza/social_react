import React, { Component } from 'react';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';
import axios from 'axios';
import Listitem from './Listitem';

export default class List extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        // const dataList = 'http://garlcss.vbrqx.com/cache/uritype/comm/list/nohuman/nouser/nocode/notrans/nosync/es_position_20_json.json';
        
        const content_json = document.querySelector('#root').getAttribute('data-content');
        axios.get(content_json).then(res => {
            console.log(res.data.articles);
            this.setState({
                articles: res.data.articles
            })
        });
        setTimeout(() => {
            var rTexts = document.querySelectorAll('.list_txt');
            // console.log(rTexts)
            rTexts.forEach(function(textNode) {
                // console.log('cw:', textNode.clientWidth, 'sw:', textNode.scrollWidth );
                if(textNode.scrollWidth > textNode.clientWidth) {
                    textNode.parentElement.classList.add('rCollaps');
                    textNode.parentElement.parentElement.classList.add('list_off');
                }
            })
        }, 1000)
    }
    render() {
        // console.log(this.state.articles)
        const showList = this.state.articles.length > 0 && this.state.articles.map((item, i) => {
            return (
                <div className="list_container" key={i}>
                    <div className="responsiveText">
                        <p className="list_txt">
                            <a href={item.clink} className={`stfc_link ${i%2===0 ? 'even': 'odd'}`}>{item.name}</a>
                        </p>
                    </div>
                    <Listitem item={item} index={i} />
                </div>
            )
        })
        return (
            <div className="content_wrapper">
            <div className="downward_content"
                onMouseEnter={() => verticalSlideDown(this.content_inner_scroll)}
                onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
            ></div>
                <div className="content_inner_scroll region_middle_content" ref={node => this.content_inner_scroll=node}>
                    {showList}
                </div>
                <div className="upward_content"
                    onMouseEnter={() => verticalSlideUp(this.content_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
                ></div>
            </div>
        )
    }
}
