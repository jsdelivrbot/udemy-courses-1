// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};

    for (let char of str.toLowerCase().split('')) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    let counter = 0;
    let maxChar = '';
    for (let char in charMap) {
        if (charMap[char] > counter) {
            counter = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
