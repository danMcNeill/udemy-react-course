import React, { useEffect } from 'react';
import styleClasses from './Cockpit.css';


const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
    }, []);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styleClasses.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push( styleClasses.red );
    }
    if (props.personsLength <= 1) {
      assignedClasses.push( styleClasses.bold );
    }

    return (
        <div className={styleClasses.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
}

export default React.memo(cockpit);