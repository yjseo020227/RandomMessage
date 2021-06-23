// Let's make a program that generates a sentence that is composed of 
//1) personal pronoun 
//2) adverb 
//3) noun 

let lsPronoun = []; 
let lsAdverb = [];
let lsNoun = [];

function randomNum(list){
    let l = list.length; 
    const num = Math.floor(((Math.random()+1)*l))
    return num;
}