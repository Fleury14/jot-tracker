import React from 'react';
import Characters from '../characters/characters';
import Locations from '../locations/locations';
import KIs from '../ki/kis';
import styles from './tracker.module.scss';

const Tracker = (props) => {
    return (
        <div className={styles.trackerWrapper}>
            <div className={styles.trackerContainer}>
                <Characters />
                <KIs />
            </div>
            <div className={styles.trackerContainer}>
                <Locations />
            </div>
        </div>
    )
}

export default Tracker;