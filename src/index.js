/*
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
let longest_word = words[0].length;

for(let i=0; i<words.length; i++)
    if (words[i].length > longest_word)
            longest_word = words[i];
console.log("The longest word is "+longest_word);        

const pessoa = {
    nome: "Antonio",
    idade:46
}
//for(key in pessoa)
    //console.log(`Propriedade: ${key} ${pessoa[key]}`);
    console.log(Object.keys(pessoa));
    console.log(Object.values(pessoa));
*/
// Iteration #5: Unique arrays
const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  console.log(wordsUnique.includes('crab'));
  console.log(wordsUnique.splice(0,1));