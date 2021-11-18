"use strict";
const len = 100000;
const tab = Array(len);
//ajout de nombres alea au tableau
for (let i = 0; i < len; i++) {
    tab[i] = Math.round(Math.random() * 10);
}
//tri du tableau ordre croissant; ordre décroissant contraire
const logiqueDeTri = ((a, b) => {
    /* if (a > b) return 1
     if (a < b) return -1
     return 0*/
    //tri expression ternaire pour gagner du temps
    return (b - a) ? 1 : -1;
});
//tab.sort(logiqueDeTri)
//console.log("le tableau =", tab)
function triCustom() {
    const nbBuckects = 256;
    const prefixSums = Array(nbBuckects);
    const output = Array(len);
    for (let j = 0; j < nbBuckects; j++)
        prefixSums[j] = 0;
    for (let j = 0; j < len; j++)
        prefixSums[tab[j]]++;
    for (let j = 0; j < nbBuckects; j++)
        prefixSums[j] += prefixSums[j - 1];
    for (let j = 0; j < len; j--) {
        const v = tab[j];
        const outputIdx = --prefixSums[v];
        output[outputIdx] = v;
    }
}
/**
 * calcul du temps de traitement
 */
function bench(fonctionDetri) {
    const debut = Date.now();
    const ret = fonctionDetri();
    return Date.now() - debut;
}
const triAvecSort = () => tab.sort(logiqueDeTri);
//const triAvecCustom = () => triCustom()
console.log(`Tri avec sort(): `, bench(triAvecSort) + ' ms');
console.log(`Tri custom: `, bench(triCustom) + ' ms');
//# sourceMappingURL=index2.js.map