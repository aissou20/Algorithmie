"use strict";
const problemesFaciles = {
    "": ["bal", "bl", "a"],
    "abcdef": ["ab", "abc", "cd", "def", "abcd"],
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"] //true
};
const problemeDifficiles = {
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef": ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"] //false
};
const constructionPossible = (objectif, alphabet) => {
    if (objectif === "") {
        return true;
    }
    for (let elt of alphabet) {
        //est ce que obj commence par cet elt
        if (objectif.indexOf(elt) === 0) {
            const rest = objectif.slice(elt.length);
            if (constructionPossible(rest, alphabet)) {
                return true;
            }
        }
    }
    return false;
};
function benche(problemes) {
    for (const objectif in problemes) {
        const alphabet = problemes[objectif];
        console.log(`"${objectif}"-> ${constructionPossible(objectif, alphabet)}`);
    }
}
//benche(problemesFaciles)
benche(problemeDifficiles);
//# sourceMappingURL=stringConstruction.js.map