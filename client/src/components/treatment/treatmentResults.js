import React from 'react';

// function passing through data that is deconstructed
function TreatmentSearchResults({title, content, href}) {
    // const elementRef = React.useRef();

    return (
        <>
            <h5 id={href}>{title}</h5>
            <p>{content}</p>
        </>
    );
}

export default TreatmentSearchResults