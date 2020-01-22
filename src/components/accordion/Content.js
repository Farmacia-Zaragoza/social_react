import React from 'react';

const Content = (props) => {
    const items = props.content.map((item, i) => (
        <div className="panel_content" key={i}>
            <a href={`${props.index===0 ? `/${item.clink}` : item.clink}`}>
                {item.name}
            </a>
        </div>
    ))
    return items;
}

export default Content;
