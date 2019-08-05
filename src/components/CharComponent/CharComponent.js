import React from 'react';
import styleClasses from './CharComponent.css';

const CharComponent = (props) => {

    return (
        <div className={styleClasses.CharComponent} onClick={props.click}>
            <p>{props.char}</p>
        </div>
    );


};

export default CharComponent;