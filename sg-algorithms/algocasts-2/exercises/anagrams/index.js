// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, "");
//   stringB = stringB.replace(/[^\w]/g, "");

//   if (stringA.length !== stringB.length) {
//     // Strings of unequal length can not be anagrams
//     return false;
//   }

//   const charMapA = {};
//   const charMapB = {};
//   let counterA = 0;
//   let counterB = 0;
//   let mostA = '';
//   let mostB = '';

//   for (let char of stringA) {
//     charMapA[char] ? charMapA[char]++ : charMapA[char] = 1;
//   }

//   for (let char of stringB) {
//     charMapB[char] ? charMapB[char]++ : charMapB[char] = 1;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }
