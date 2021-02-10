import { TOGGLE_CHARACTER } from '../types';

const INITIAL_STATE = {
    hasCrono: false,
    hasLucca: false,
    hasMarle: false,
    hasFrog: false,
    hasRobo: false,
    hasAyla: false,
    hasMagus: false
};

const characterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CHARACTER:
            if (!action.payload || action.payload.character) return state;
            const char = action.payload.character;
            return { ...state, [char]: !state[char]}
        default:
            return state;
    }
}

export default characterReducer;