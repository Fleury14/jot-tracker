// try reading redux state from a helper function, this avoids having to pass it throguh
import { useSelector } from 'react-redux';

// TODO: While any additional locations will need to be added here in addition to redux and the data folder (which is a psin),
// is it worth it to pull in object.key on redux, push them all and then remove all the ones that are unavailable?

export const availableLocations = () => {

    console.log('logic check');
    const kiState = useSelector(state => state.ki);
    const charState = useSelector(state => state.characters);
    const locationState = useSelector(state => state.location);
    const available = [];

    const { hasRobo, hasFrog, hasMarle } = charState;
    const { hasHeroMedal, hasBentHilt, hasBentSword, hasMasamune, hasPendant, hasGateKey, hasDreamstone, hasRubyKnife, hasClone, hasChronoTrigger, hasTomasPop, hasPrismShard, hasMoonStone, hasJerky } = kiState;
    const { cathedralFinish, forgeMasamune, heckranCave, pendantTrial, factory, protoDomeEoT, tyranoLair, magusCastle, deathPeak } = locationState;

    // always open
    available.push('cathedralOpen', 'cathedralFinish', 'zenanBridge', 'denadoroMt', 'carpenter', 'snailStop', 'heckranCave');

    // cathedral reward
    if (cathedralFinish) available.push('guardia600Queen');

    // desert/retenite
    if (hasRobo) available.push('desert');

    // hero medal turn in
    if (hasHeroMedal) available.push('frogLoft');

    // forge masamune @ melchior
    if (hasBentHilt && hasBentSword) available.push('forgeMasamune');

    // turn in masa for character
    if (forgeMasamune) available.push('turnInMasamune');

    // access to magus castle
    if (hasMasamune &&  hasFrog) available.push('magusCastle');

    // heckran reward
    if (heckranCave) available.push('tabanTurnIn');

    // toma/rust tyrano
    if (hasTomasPop) available.push('giantsClaw');

    // prism trial
    if (hasMasamune && hasPrismShard) available.push('prismTrial');

    // pendant trial
    if (hasPendant) available.push('pendantTrial');

    // all future unlocks require pendant
    if (pendantTrial) {
        available.push('sunKeep', 'factory', 'arrisDome', 'protoDome', 'genoDome')

        // if factory is done, notify of EoT access lacking gatekey
        if (factory && !hasGateKey) available.push('protoDomeEoT');

        // go mode deathpeak
        if (hasClone && hasChronoTrigger) available.push('deathPeak');
        if (deathPeak) available.push('blackOmen');
    }

    // is mystic residence both available and has EoT not been reach by other means (factory)
    if (hasGateKey && !factory) available.push('mysticHouse');

    // ipso presto magico
    if (hasGateKey || protoDomeEoT) available.push('spekkio');

    // all prehistory unlocks require gatekey
    if (hasGateKey) {
        available.push('reptiteLair, dactylNest');

        if(hasDreamstone) available.push('tyranoLair');
    }

    // dark ages has one check (mt woe) and one endgame dungeon with two ways to unlock
    if (magusCastle || tyranoLair) {
        available.push('mtWoe');

        if (hasRubyKnife) available.push('oceanPalace');
    }

    // sun stone required both future and prehistory access and two KI
    if (hasGateKey && hasPendant && pendantTrial && hasMoonStone && hasJerky) available.push('sunStone');

    return available

}

export const hasGoMode = () => {
    const kiState = useSelector(state => state.ki);

    const { hasGateKey, hasBentHilt, hasBentSword, hasMasamune, hasDreamstone, hasRubyKnife, hasPendant, hasClone, hasChronoTrigger } = kiState;

    if (hasPendant && hasClone && hasChronoTrigger) return 'Pendant Trial -> Death Peak -> Black Omen'
    else if(hasGateKey && hasDreamstone && hasRubyKnife) return 'Prehistory -> Tyrano Lair -> Ocean Palace'
    else if((hasMasamune || (hasBentHilt && hasBentSword)) && hasRubyKnife) return 'Magus Castle -> Ocean Palace';

    return false;
}

