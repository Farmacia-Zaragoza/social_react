import React, { Component } from 'react';

//compoments
import SingleAccorDion from './SingleAccorDion';

export default class Accordion extends Component {
    panel_inner_scroll = '';
    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        setTimeout(() => {
            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("mouseenter", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                  } 
                });
              }
        }, 1000)
    }
    render() {
        // console.log(this.props.bars)
        const panel_items = Object.keys(this.props.bars).length > 0 && Object.keys(this.props.bars).map((item, i) => (
                <SingleAccorDion 
                    key={i} 
                    index={i} 
                    // bg_color={this.props.bars[item].pull02.style.pull03.bgcolor.value} 
                    title={this.props.bars[item].pull02.title}
                    content={this.props.bars[item].pull02.content.pull03}
                    lastbar={Object.keys(this.props.bars).length}
                />
        ));
        return (
            <div className="accordion_wrapper">
                {panel_items}
            </div>
        )
    }
}
// this.props.bars[item].pull02.style.pull03.bgcolor.value