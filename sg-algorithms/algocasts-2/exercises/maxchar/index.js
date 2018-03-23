// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let counter = 0;
  let most = '';

  for (let char of str) {
    charMap[char] ? charMap[char]++ : charMap[char] = 1;
  }

  for (let char in charMap) {
    if (charMap[char] > counter) {
      most = char;
      counter = charMap[char];
    }
  }

  return most;
}

module.exports = maxChar;
