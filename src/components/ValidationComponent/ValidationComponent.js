import React from 'react';

const validationComponent = (props) => {

    let outputText = 'Text long enough';

    if (props.textLength < 5) {
        outputText = 'Text too short';
    }


    return (
        <div className='ValidationComponent'>
            <p>{outputText}</p>
        </div>
    );
};

export default validationComponent;