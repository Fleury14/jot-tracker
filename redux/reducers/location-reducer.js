import { TOGGLE_LOCATION } from '../types';

const INITIAL_STATE = {
    cathedralOpen: false,
    cathedralFinish: false,
    guardia600Queen: false,
    zenanBridge: false,
    desert: false,
    denadoroMt: false,
    frogLoft: false,
    forgeMasamune: false,
    turnInMasamune: false,
    magusCastle: false,
    giantsClaw: false,
    carpenter: false,
    snailStop: false,
    heckranCave: false,
    tabanTurnIn: false,
    pendantTrial: false,
    prismTrial: false,
    sunKeep: false,
    protoDome: false,
    protoDomeEoT: false,
    genoDome: false,
    factory: false,
    arrisDome: false,
    mysticHouse: false,
    spekkio: false,
    sunStone: false,
    dactylNest: false,
    reptiteLair: false,
    tyranoLair: false,
    mtWoe: false,
    deathPeak: false,
    blackOmen: false,
    oceanPalace: false
};

const locationReducer = (state = INITIAL_STATE, action) => {
    console.log('toggling location', action);
    switch (action.type) {
        case TOGGLE_LOCATION:
            if (!action.payload || !action.payload.location) return state;
            const loc = action.payload.location;
            return { ...state, [loc]: !state[loc]}
        default:
            return state;
    }
}

export default locationReducer;