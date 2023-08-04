import React from 'react';

export default function Section({title, opt}) {
    return (
        <div id={title} className="content" ref={opt} style={{backgroundColor: 'yellow'}}>
            <h2> {title} </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}
