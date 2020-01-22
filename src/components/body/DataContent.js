import React, { Component } from 'react';
import ContentWithRewgex from './ContentWithRewgex';

export default class DataContent extends Component {
    render() {
        return (
            <div className="body_content tScroll">
                {
                    this.props.arry_contents.map((data, i) => <ContentWithRewgex key={i} content={data} index={i} />)
                }
            </div>
        )
    }
}
