import React from 'react';
import Characters from '../characters/characters';
import Locations from '../locations/locations';
import KIs from '../ki/kis';
import styles from './tracker.module.scss';

const Tracker = (props) => {
    return (
        <div className={styles.trackerContainer}>
            <Characters />
            <KIs />
            <Locations />
        </div>
    )
}

export default Tracker;