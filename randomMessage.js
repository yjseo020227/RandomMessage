// Let's make a program that generates a sentence that is composed of 
//1) personal pronoun 
//2) adverb 
//3) noun 

let lsPronoun = ["I", "You", "We"]; 
let lsAdverb = ["really", "extremely"];
let lsVerb = ["love","like", "hate", "despise", "feel ambivalent about"]
let lsNoun = ["pizza", "pasta", "rissoto", "snails","kimchi stew", "korean barbeque", "beef", "pork" ];

function randomNum(list){
    let l = list.length; 
    const num = Math.floor((Math.random()*l))
    return num;
}

const p = lsPronoun[randomNum(lsPronoun)];
const adv = lsAdverb[randomNum(lsAdverb)];
const verb = lsVerb[randomNum(lsVerb)];
const noun = lsNoun[randomNum(lsNoun)];

console.log(`${p} ${adv} ${verb} ${noun}`);