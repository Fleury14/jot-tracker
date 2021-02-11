import React from 'react';
import { useSelector } from 'react-redux';
import { availableLocations } from '../../data/logic';

const Locations = (props) => {
    const locationState = useSelector(state => state.location);
    const available = availableLocations();
    
    return <h2>Locations</h2>
}

export default Locations;
