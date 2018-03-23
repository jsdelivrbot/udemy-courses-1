// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  str = str.split(' ')
  let arr = []
  for (let word of str) {
    const upperCase = word[0].toUpperCase()
    word = `${upperCase}${word.slice(1)}`
    arr.push(word)
  }
  return arr.join(" ")
}

module.exports = capitalize;
