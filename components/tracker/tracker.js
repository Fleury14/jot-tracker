import React from 'react';
import Characters from '../characters/characters';
import Locations from '../locations/locations';
import KIs from '../ki/kis';

const Tracker = (props) => {
    return (
        <>
            <Characters />
            <KIs />
            <Locations />
        </>
    )
}

export default Tracker;