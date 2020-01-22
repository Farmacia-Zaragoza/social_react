import React, { Component } from 'react'

export default class ContentWithRewgex extends Component {

    componentDidMount() {
        // this.getType();
    }

    type = '';
    content = '';
    href = '';
    anchorId = '';

    types = {
        heading: {
          class: "stfc_regex_H",
          expression: /^\$:H\[([^]+)\]/g
        },
        subHeader: {
          class: "stfc_regex_S",
          expression: /^\$:S\[([^]+)\]/g
        },
        paragraph: {
          class: "stfc_regex_P",
          expression: /^\$:P\[([^]+)\]/g
        },
        versionTitle: {
          class: "stfc_version",
          expression: /^\$:V\[([^]+)\]/g
        }
      };
      html = "";
    
      matchResult = [];

    getType() {
        // this.genLinks();
        console.log(this.props.content.value)
        Object.keys(this.types).forEach(key => {
        //   if (this.matchResult) return;
            // console.log(this.types[key])
          this.matchResult = this.types[key].expression.exec(this.props.content.value);
          if (this.matchResult) {
            // console.log(this.matchResult);
            this.type = key;
            this.content = this.matchResult[1];
          }
        });
    
        switch (this.type) {
          case "versionTitle":
            break;
    
          default:
            this.getAnchorId();
            break;
        }
      }

      getAnchorId() {
        // Matching and replacing the Id with an empty string, extracting the id as well.
        const expression = /\#([^(?!\"\>)]+)$/g;
        const result = expression.exec(this.content);
        // console.log(this.content);
    
        if (result) {
          // console.log(result);
          this.anchorId = result[1];
          this.content = this.content.replace(`#${this.anchorId}`, "");
        //   console.log(this.anchorId);
        //   console.log(this.content)
        }
      }

    render() {
        this.getType();
        // console.log(this.anchorId)
        // console.log(this.props.content)
        const linkvalue = () => {
            let html;
            if(this.type !== null && this.type === 'heading') {
                html =  <p id={this.anchorId} className={`stfc_regex_H stfc_headings ${this.props.index % 2 === 0 ? 'even' : 'odd'}`}>{this.content}</p>
            }else if(this.type !== null && this.type === 'subHeader') {
                html =  <p id={this.anchorId} className={`stfc_regex_S stfc_headings ${this.props.index % 2 === 0 ? 'even' : 'odd'}`}>{this.content}</p>
            }else if(this.type !== null && this.type === 'paragraph') {
                html =  <p id={this.anchorId} className={`stfc_regex_P stfc_headings ${this.props.index % 2 === 0 ? 'even' : 'odd'}`}>{this.content}</p>
            }else if(this.type !== null && this.type === 'versionTitle'){
              if(window.innerWidth > 570) {
                html = <p  id={this.anchorId} className={`stfc_version ${this.props.index % 2 === 0 ? 'even' : 'odd'}`}>{this.content}</p>
              }else {
                html = '';
              }
                
            }else {
                html = <p className={`stfc_paragraph ${this.props.index % 2 === 0 ? 'even' : 'odd'}`}>{this.props.content.value}</p>
            }
            return html;
        }
        return (
            <div>
                {linkvalue()}
            </div>
        )
    }
}
