import React, { Component } from 'react';

export default class Contents extends Component {
    // componentDidMount() {
    //     const body_content = document.querySelector('.body_content');
    //     const arry_of_p = body_content.querySelectorAll('p');
    //     arry_of_p.forEach( (p, index) => {
    //         if (index % 2 === 0) {
    //             p.style.color = '#903E84';
    //         }else {
    //             p.style.color = '#568A4B';
    //         }
    //     })
    // }
    render() {
        // console.log(this.props.arry_contents)
        const single_contents = this.props.arry_contents.map((data, i) => {
            // console.log(data.value)
            let result_S = data.value.match(/\$:S/);
            let result_H = data.value.match(/\$:H/);
            let result_P = data.value.match(/\$:P/);
            // Matching and replacing the Id with an empty string, extracting the id as well.
            const expression = /\#([^(?!\"\>)]+)$/g;
            const result = expression.exec(data.value);
            // if(result) {
            //     // console.log(result[1])
            // }

            



            if(result_S !== null) {
                return <p key={i} id={`${result ? result[1] : '#'}`} className={`stfc_paragraph stfc_regex_S stfc_headings ${i % 2 === 0 ? 'even' : 'odd'}`}>{data.value}</p>
            }else if(result_H !== null) {
                return <p key={i} id={`${result ? result[1] : '#'}`} className={`stfc_paragraph stfc_regex_H stfc_headings ${i % 2 === 0 ? 'even' : 'odd'}`}>{data.value}</p>
            }else if(result_P !== null) {
                return <p key={i} id={`${result ? result[1] : '#'}`} className={`stfc_paragraph stfc_regex_P stfc_headings ${i % 2 === 0 ? 'even' : 'odd'}`}>{data.value}</p>
            }else {
                return <p key={i} className={`stfc_paragraph ${i % 2 === 0 ? 'even' : 'odd'}`}>{data.value}</p>
            }
        });
        return (
            <div className="body_content tScroll">
                {single_contents}
            </div>
        )
    }
}