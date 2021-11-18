const problemesFaciles:{ [objectifs: string]: Array<string> } = {
    "": ["bal", "bl", "a"],//true
    "abcdef": ["ab", "abc", "cd", "def", "abcd"], //true
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"], //false
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"] //true
}

const problemeDifficiles: { [objectifs: string]: Array<string> } = {
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef": ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"] //false
}

type ConstructionPossible = (objectif: string, alphabet: Array<string>) => boolean


const constructionPossible: ConstructionPossible = (
    objectif: string,
    alphabet: Array<string>
): boolean => {
    if (objectif === "") {
        return true
    }
    for (let elt of alphabet) {
        //est ce que obj commence par cet elt
        if (objectif.indexOf(elt) === 0) {
            const rest = objectif.slice(elt.length)
            if (constructionPossible(rest, alphabet)) {
                return true
            }
        }
    }
    return false
}

function benche(problemes: { [p: string]: Array<string> }) {
    for (const objectif in problemes) {
        const alphabet = problemes[objectif]
        console.log(`"${objectif}"-> ${constructionPossible(objectif, alphabet)}`)

    }
}
//benche(problemesFaciles)
//benche(problemeDifficiles)