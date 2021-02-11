import { TOGGLE_KI } from '../types';

const INITIAL_STATE = {
    hasHeroMedal: false,
    hasBentHilt: false,
    hasBentSword: false,
    hasMasamune: false,
    hasGateKey: false,
    hasDreamstone: false,
    hasTomasPop: false,
    hasPendant: false,
    hasPrismShard: false,
    hasMoonStone: false,
    hasJerky: false,
    hasRoboRibbon: false,
    hasMagic: false,
    hasTools: false,
    hasClone: false,
    hasChronoTrigger: false,
    hasRubyKnife: false,
};

const kiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_KI:
            if (!action.payload || !action.payload.ki) return state;
            const { ki } = action.payload;
            return { ...state, [ki]: !state[ki]}
        default:
            return state;
    }
}

export default kiReducer;