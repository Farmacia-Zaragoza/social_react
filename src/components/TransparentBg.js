import React from 'react';

const TransparentBg = (props) => {
    return (
        <div className="trans_bg" style={{
            display: !props.trans_bg ? 'none': 'block'
        }}>
            
        </div>
    )
}

export default TransparentBg;
