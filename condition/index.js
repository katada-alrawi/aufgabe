let aleezaTeamAve = (89 + 120 + 103)/3; // 104
let laraTeamAve = (116 + 94 + 123)/3; // 111
console.log(aleezaTeamAve);
console.log(laraTeamAve);
if(aleezaTeamAve > laraTeamAve){
    console.log(`Aleeza's team is the winner with an average score of ${aleezaTeamAve}`);
} else if (laraTeamAve > aleezaTeamAve) {
    console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else {
    console.log(`it's a tie with the average score of ${laraTeamAve}`);
}

console.log("------q3------");
let aleezaTeamAve2 = (200 + 120 + 103)/3; // 141
console.log(aleezaTeamAve2);
console.log(laraTeamAve);
if(aleezaTeamAve2 > laraTeamAve){
    console.log(`Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`);
} else if (laraTeamAve > aleezaTeamAve2) {
    console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else {
    console.log(`it's a tie with the average score of ${laraTeamAve}`);
}

console.log("------q4------");
let maryTeamAve = (200+134+105)/3; // 146.333
// lara hat gewonnen !
// aleeza hat gewonnen !
// mary hat gewonnen !
// lara und aleeza haben gewonnen !
// lara und mary haben gewonnen !
// aleeza und mary haben gewonnen !
// alle 3 haben gewonnen !

if((laraTeamAve > maryTeamAve) && (laraTeamAve > aleezaTeamAve)){
    console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else if((aleezaTeamAve2 > maryTeamAve) && (aleezaTeamAve2 > laraTeamAve)){
    console.log(`Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`);
} else if((maryTeamAve > aleezaTeamAve2) && (maryTeamAve > laraTeamAve)){
    console.log(`Mary's team is the winner with an average score of ${maryTeamAve}`);
} else if ((laraTeamAve === aleezaTeamAve2) && (laraTeamAve > maryTeamAve)){
    console.log(`Lara's team and Aleeza's team are tied for first place with an average score of ${laraTeamAve}`);
} else if ((laraTeamAve === maryTeamAve) && (laraTeamAve > aleezaTeamAve2)){
    console.log(`Lara's team and Mary's team are tied for first place with an average score of ${laraTeamAve}`);
} else if ((aleezaTeamAve2 === maryTeamAve) && (aleezaTeamAve2 > laraTeamAve)){
    console.log(`Aleeza's team and Mary's team are tied for first place with an average score of ${aleezaTeamAve2}`);
} else {
    console.log(`All three tied with an average score of ${maryTeamAve}`);
}

/* Like before, change the score of mary's first game from *200* to *184* to generate different winners, assign the new average to `maryTeamAve2`, rewrite the condition, keeping in mind that there might be draws.*/

console.log("------q5------");
let maryTeamAve2 = (184 + 134 + 105)/3; // 141
console.log(maryTeamAve2)
if((laraTeamAve > maryTeamAve2) && (laraTeamAve > aleezaTeamAve)){
    console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else if((aleezaTeamAve2 > maryTeamAve2) && (aleezaTeamAve2 > laraTeamAve)){
    console.log(`Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`);
} else if((maryTeamAve2 > aleezaTeamAve2) && (maryTeamAve2 > laraTeamAve)){
    console.log(`Mary's team is the winner with an average score of ${maryTeamAve2}`);
} else if ((laraTeamAve === aleezaTeamAve2) && (laraTeamAve > maryTeamAve2)){
    console.log(`Lara's team and Aleeza's team are tied for first place with an average score of ${laraTeamAve}`);
} else if ((laraTeamAve === maryTeamAve2) && (laraTeamAve > aleezaTeamAve2)){
    console.log(`Lara's team and Mary's team are tied for first place with an average score of ${laraTeamAve}`);
} else if ((aleezaTeamAve2 === maryTeamAve2) && (aleezaTeamAve2 > laraTeamAve)){
    console.log(`Aleeza's team and Mary's team are tied for first place with an average score of ${aleezaTeamAve2}`);
} else {
    console.log(`All three tied with an average score of ${maryTeamAve2}`);
}