import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import kiInfo from '../../data/kis';
import { useStore } from '../../redux/store';
import { TOGGLE_KI } from '../../redux/types';
import styles from './kis.module.scss';

const getKIName = (key) => {
    if (!key) return '';
    
    return kiInfo[key].title;
}

const renderKIs = (kiState) => {
    const kiList = [];
    const dispatch = useDispatch();
    console.log('ki state', kiState);
    for (const key in kiState) {
        kiList.push(
            <button
                className={kiState[key] ? styles.hasKI : styles.noKI}
                key={key}
                onClick={() => dispatch({ type: TOGGLE_KI, payload: { ki: key } })}
            >
                {getKIName(key)}
            </button>
        )
    }
    return kiList;
}

const KIs = (props) => {
    const kiState = useSelector(state => state.ki);
    return (
        <>
            <h2>Key Items</h2>
            <div>
                {renderKIs(kiState)}
            </div>
        </>
    )
}

export default KIs;
