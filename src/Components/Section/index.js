import React from 'react';

export default function Section({title, opt}) {
    console.log(title)
    return (
        <div id={title} className="content" ref={opt}>
            <h2> {title} </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}
