import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { availableLocations, hasGoMode } from '../../data/logic';
import LocationInfo from '../../data/locations';
import { TOGGLE_LOCATION } from '../../redux/types';
import styles from './locations.module.scss';

const getKIData = (key) => {
    if (!key) return '';
    const foundLoc = LocationInfo[key];
    if (foundLoc) foundLoc.key = key;
    return foundLoc;
}

const Locations = (props) => {
    const dispatch = useDispatch();
    const locationState = useSelector(state => state.location);
    const available = availableLocations();
    const goMode = hasGoMode();
    const availableWInfo = []
    for (const loc of available) {
        availableWInfo.push(getKIData(loc))
        
    }
    

    return availableWInfo && availableWInfo.length ? (
        <div>
            <h2>Locations</h2>
            <div className={styles.locationContainer}>
                <div className={styles.locationEra}>
                    <h3>Middle Ages</h3>
                    <div className={styles.locationButtonRow}>
                        {availableWInfo
                        .filter(loc => loc.time === '600')
                        .map(loc => <button
                            key={loc.key}
                            className={locationState[loc.key] ? styles.locationCleared : styles.locationOpen}
                            onClick={() => dispatch({ type: TOGGLE_LOCATION, payload: { location: loc.key }})}
                        >{loc.title}</button>)}
                    </div>
                </div>
                <div className={styles.locationEra}>
                    <h3>Present</h3>
                    <div className={styles.locationButtonRow}>
                        {availableWInfo
                        .filter(loc => loc.time === '1000')
                        .map(loc => <button
                            key={loc.key}
                            className={locationState[loc.key] ? styles.locationCleared : styles.locationOpen}
                            onClick={() => dispatch({ type: TOGGLE_LOCATION, payload: { location: loc.key }})}
                        >{loc.title}</button>)}
                    </div>
                </div>
                <div className={styles.locationEra}>
                    <h3>Prehistory</h3>
                    <div className={styles.locationButtonRow}>
                        {availableWInfo
                        .filter(loc => loc.time === 'prehistory')
                        .map(loc => <button
                            key={loc.key}
                            className={locationState[loc.key] ? styles.locationCleared : styles.locationOpen}
                            onClick={() => dispatch({ type: TOGGLE_LOCATION, payload: { location: loc.key }})}
                        >{loc.title}</button>)}
                    </div>  
                </div>
                <div className={styles.locationEra}>
                    <h3>Future</h3>
                    <div className={styles.locationButtonRow}>
                        {availableWInfo
                        .filter(loc => loc.time === '2300')
                        .map(loc => <button
                            key={loc.key}
                            className={locationState[loc.key] ? styles.locationCleared : styles.locationOpen}
                            onClick={() => dispatch({ type: TOGGLE_LOCATION, payload: { location: loc.key }})}
                        >{loc.title}</button>)}
                    </div>
                </div>
                <div className={styles.locationEra}>
                    <h3>Dark Ages</h3>
                    <div className={styles.locationButtonRow}>
                        {availableWInfo
                        .filter(loc => loc.time === 'dark')
                        .map(loc => <button
                            key={loc.key}
                            className={locationState[loc.key] ? styles.locationCleared : styles.locationOpen}
                            onClick={() => dispatch({ type: TOGGLE_LOCATION, payload: { location: loc.key }})}
                        >{loc.title}</button>)}
                    </div> 
                </div>
                <div className={styles.locationEra}>
                    <h3>End of Time</h3>
                    <div className={styles.locationButtonRow}>
                        {availableWInfo
                        .filter(loc => loc.time === 'EoT')
                        .map(loc => <button
                            key={loc.key}
                            className={locationState[loc.key] ? styles.locationCleared : styles.locationOpen}
                            onClick={() => dispatch({ type: TOGGLE_LOCATION, payload: { location: loc.key }})}
                        >{loc.title}</button>)}
                    </div>
                </div>
                {goMode && <p>Go Mode: {goMode}</p>}
            </div>
        </div>
    ) : null;
}

export default Locations;
