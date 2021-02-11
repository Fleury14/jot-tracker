import React from 'react';
import { useSelector } from 'react-redux';
import { availableLocations } from '../../data/logic';
import LocationInfo from '../../data/locations';

const getKIData = (key) => {
    if (!key) return '';
    const foundLoc = LocationInfo[key];
    if (foundLoc) foundLoc.key = key;
    return foundLoc;
}

const Locations = (props) => {
    const locationState = useSelector(state => state.location);
    const available = availableLocations();
    const availableWInfo = []
    for (const loc of available) {
        availableWInfo.push(getKIData(loc))
        console.log('loc', loc);
    }
    console.log(availableWInfo);

    return availableWInfo && availableWInfo.length ? (
        <>
            <h2>Locations</h2>
            <div>
                <h3>Prehistory</h3>
                <div>
                    {availableWInfo.filter(loc => loc.time === 'prehistory').map(loc => <button key={loc.key}>{loc.title}</button>)}
                </div>    
                <h3>Dark Ages</h3>
                <div>
                    {availableWInfo.filter(loc => loc.time === 'dark').map(loc => <button key={loc.key}>{loc.title}</button>)}
                </div>
                <h3>Middle Ages</h3>
                <div>
                    {availableWInfo.filter(loc => loc.time === '600').map(loc => <button key={loc.key}>{loc.title}</button>)}
                </div>
                <h3>Present</h3>
                <div>
                    {availableWInfo.filter(loc => loc.time === '1000').map(loc => <button key={loc.key}>{loc.title}</button>)}
                </div>
                <h3>Future</h3>
                <div>
                    {availableWInfo.filter(loc => loc.time === '2300').map(loc => <button key={loc.key}>{loc.title}</button>)}
                </div>
                <h3>End of Time</h3>
                <div>
                    {availableWInfo.filter(loc => loc.time === 'EoT').map(loc => <button key={loc.key}>{loc.title}</button>)}
                </div>
            </div>
        </>
    ) : null;
}

export default Locations;
