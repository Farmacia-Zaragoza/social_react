import React, { Component } from 'react';
import axios from 'axios';
import { verticalSlideDown, verticalSlideUp, stopTabScroll, horizontalSlideleft, horizontalSlideRight } from '../../config/scroll';
import Contents from '../body/Contents';

export default class Product extends Component {
    state = {
        product_article: ''
    }
    componentDidMount() {
        // const product_j = 'http://social.vbrqx.com/cache/uritype/comm/product/nohuman/nouser/nocode/notrans/nosync/ru_page_20_3_json.json';
        const product_j = document.querySelector('#root').getAttribute('data-content');
        axios.get(product_j).then(res => this.setState({product_article: res.data}));
    }
    render() {
        const product_content = Object.keys(this.state.product_article).length > 0 && this.state.product_article.articles.map((data, i) => (
            <div className="product_content" key={i}>
                <div className="each_title">
                    <h3 className="product_title" title={data.pull02.parragraph.title}>{data.pull02.parragraph.title}</h3>
                    <div className="title_v_scroll">
                        <div className="left_title_scroll"
                            onMouseEnter={() => horizontalSlideleft(this.product_title_scroll)}
                            onMouseLeave={() => stopTabScroll(this.product_title_scroll)}
                        >
                            <img src="http://social.vbrqx.com/index1/img/arrows/brqx_big_arrow_red_left_050_2018.png" alt="icon"/>
                        </div>
                        <h3 className="product_title_scroll"
                            onMouseEnter={() => horizontalSlideRight(this.product_title_scroll)}
                            onMouseLeave={() => stopTabScroll(this.product_title_scroll)}
                            ref={node => this.product_title_scroll=node} title={data.pull02.parragraph.title}>{data.pull02.parragraph.title}</h3>
                        <div className="right_title_scroll"
                            onMouseEnter={() => horizontalSlideRight(this.product_title_scroll)}
                            onMouseLeave={() => stopTabScroll(this.product_title_scroll)}
                        >
                            <img src="http://social.vbrqx.com/index1/img/arrows/brqx_big_arrow_red_right_050_2018.png" alt="icon"/>
                        </div>
                    </div>
                </div>
                <Contents arry_contents={data.pull02.parragraph.pull03} />
            </div>
        ))
        return (
            <div className="content_wrapper">
                <div className="downward_content"
                    onMouseEnter={() => verticalSlideDown(this.policy_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.policy_inner_scroll)}
                ></div>
                    <div className="policy_inner_scroll" ref={node => this.policy_inner_scroll=node}>
                        {product_content}
                    </div>
                <div className="upward_content"
                    onMouseEnter={() => verticalSlideUp(this.policy_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.policy_inner_scroll)}
                ></div>
            </div>
        )
    }
}
