const problemesFaciles: { [objectifs: string]: Array<string> } = {
    "": ["bal", "bl", "a"],//true
    "abcdef": ["ab", "abc", "cd", "def", "abcd"], //true
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"], //false
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"] //true
}

const problemeDifficiles: { [objectifs: string]: Array<string> } = {
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef": ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"] //false
}

type ConstructionPossible = (objectif: string, alphabet: Array<string>) => boolean


function constructionPossible(
    objectif: string, // Mon objectif courant
    alphabet: Array<string>, // Mon alphabet
    memo: { [objectif: string]: boolean } = {} // Mon cache mémoire
): boolean /* Le résultat final */ {
    /**
     * Si j'ai déjà un résultat pour <objectif> dans mon cache, je renvoie ce résultat
     */
    if (objectif in memo) return memo[objectif]
    /**
     * Si mon objectif est une chaine de caractères vide, alors la fonction renvoie toujours vrai
     */
    if (objectif === "") return true
    /**
     * Pour les objectifs "normaux", qui ne sont pas déjà dans le cache, pour chaque element de l'alphabet ...
     */
    for (let element of alphabet) {
        /**
         * ... est ce que mon objectif commence par cet element ?
         */
        if (objectif.indexOf(element) === 0) {
            /**
             * Je reconstruit un sous-objectifs "reste" qui est l'objectif initial moins l'élément
             */
            const reste = objectif.slice(element.length)
            /**
             * Et j'appelle récursivement la fonction avec le sous-objectif
             */
            if (constructionPossible(reste, alphabet, memo)) {
                /**
                 * Si le sous-objectif est constructible, alors je mémorise VRAI
                 * dans le cache et je renvoie le résultat
                 */
                memo[objectif] = true
                return true
            }
        }
    }
    memo[objectif] = false
    return false
}

/*const constructionPossible: ConstructionPossible = (
    objectif: string,
    alphabet: Array<string>,
    memo: { [objectif: string]: boolean } = {}// mettre les valeurs en cache
): boolean => {
    if (objectif in memo) {
        return memo[objectif]
    }
    if (objectif === "") {
        return true
    }
    for (let elt of alphabet) {
        //est ce que obj commence par cet elt
        if (objectif.indexOf(elt) === 0) {
            const rest = objectif.slice(elt.length)
            if (constructionPossible(rest, alphabet,memo)) {
                memo[objectif] = true
                return true
            }
        }
    }
    memo[objectif] = false
    return false
}*/

function benche(problemes: { [p: string]: Array<string> }) {
    for (const objectif in problemes) {
        const alphabet = problemes[objectif]
        console.log(`objectif"${objectif}"-> ${constructionPossible(objectif, alphabet)}`)

    }
}

//benche(problemesFaciles)
benche(problemeDifficiles)

