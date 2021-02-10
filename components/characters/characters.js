import React from 'react';
import { useSelector } from 'react-redux';
import characterInfo from '../../data/characters';
import styles from './characters.module.css';

const getCharacterName = (key) => {
    if (!key) return '';
    return characterInfo[key].title;
}

const renderCharacters = (charState) => {
    const characterList = [];
    for (const key in charState) {
        characterList.push(<button className={charState[key] ? styles.hasCharacter : styles.noCharacter} key={key}>{getCharacterName(key)}</button>)
    }
    return characterList;
}

const Characters = (props) => {
    const charState = useSelector(state => state.characters);
    return (
        <>
            <h2>Characters</h2>
            <div>
                {renderCharacters(charState)}
            </div>
        </>
    )
}

export default Characters;
