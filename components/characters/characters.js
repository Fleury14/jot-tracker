import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import characterInfo from '../../data/characters';
import styles from './characters.module.css';
import { TOGGLE_CHARACTER } from '../../redux/types';

const getCharacterName = (key) => {
    if (!key) return '';
    return characterInfo[key].title;
}

const renderCharacters = (charState) => {
    const characterList = [];
    const dispatch = useDispatch();
    for (const key in charState) {
        characterList.push(<button
            className={charState[key] ? styles.hasCharacter : styles.noCharacter}
            key={key}
            onClick={() => dispatch({ type: TOGGLE_CHARACTER, payload: { character: key } })}
        >
            {getCharacterName(key)}
        </button>)
    }
    return characterList;
}

const Characters = (props) => {
    const charState = useSelector(state => state.characters);
    return (
        <>
            <h2>Characters</h2>
            <div className={styles.charRow}>
                {renderCharacters(charState)}
            </div>
        </>
    )
}

export default Characters;
