import React, { Component } from 'react';
import axios from 'axios';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';
import PolicyEachSection from './PolicyEachSection';

export default class PolicyPage extends Component {
    state = {
        policy: ''
    }
    componentDidMount() {
        const policy_j = 'http://truck.vbrqx.com/truck/fnode/spec_any_jsons_generated/policy_en_json_file.json';
        axios.get(policy_j).then(res => this.setState({policy: res.data}))
    }
    render() {
        // console.log(this.state.policy)
        const policy_content = Object.keys(this.state.policy).length > 0 && Object.keys(this.state.policy).map((item, i) => <PolicyEachSection key={i} policy_section={this.state.policy[item]} />)
        return (
        <div className="content_wrapper">
            <div className="downward_content"
                onMouseEnter={() => verticalSlideDown(this.policy_inner_scroll)}
                onMouseLeave={() => stopTabScroll(this.policy_inner_scroll)}
            ></div>
                <div className="policy_inner_scroll" ref={node => this.policy_inner_scroll=node}>
                    {policy_content}
                </div>
            <div className="upward_content"
                onMouseEnter={() => verticalSlideUp(this.policy_inner_scroll)}
                onMouseLeave={() => stopTabScroll(this.policy_inner_scroll)}
            ></div>
        </div>
        )
    }
}