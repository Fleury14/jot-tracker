import { combineReducers } from 'redux';
import TestReducer from './test-reducer';
import CharacterReducer from './character-reducer';
import KIReducer from './ki-reducer';
import LocationReducer from './location-reducer';

export default combineReducers({
    test: TestReducer,
    characters: CharacterReducer,
    ki: KIReducer,
    location: LocationReducer
});