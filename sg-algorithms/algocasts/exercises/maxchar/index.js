// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let stringObj = {}
  let max = 0
  let result = ''

  for (let letter of str) {
    if (!stringObj[letter]) {
      stringObj[letter] = 1
    } else {
      stringObj[letter]++
    }
  }
  for (let char in stringObj) {
    if (stringObj[char] > max) {
      max = stringObj[char]
      result = char
    }
  }
  return result
}

module.exports = maxChar;
