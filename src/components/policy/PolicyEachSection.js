import React, { Component } from 'react';

export default class PolicyEachSection extends Component {
    render() {
        const p_each_item = this.props.policy_section.map((data, i) => {
            if(data['html-type'] === 'a') {
                return <a key={i} href="data.clink">{data.item}</a>
            }else {
                return <div key={i}>{React.createElement(data['html-type'], null, `${data.item}`)}</div>
            }

        })
        return (
            <div className="section">
                {p_each_item}
            </div>
        )
    }
}
