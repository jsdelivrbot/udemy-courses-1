// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;


// function steps(n) {
//   let spaces = n - 1
//   let hashes = 1

//   for (let i = 0; i < n; i++) {
//     console.log(`${printHashes(hashes)}${printSpaces(spaces)}`)

//     hashes++
//     spaces--
//   }
// }

// function printHashes(int) {
//   let hashes = ''

//   for (let i = 0; i < int; i++) {
//     hashes += '#'
//   }
//   return hashes
// }

// function printSpaces(int) {
//   let spaces = ''

//   for (let i = 0; i < int; i++) {
//     spaces += ' '
//   }
//   return spaces
// }

// console.log('spaces: ', printSpaces(5))
// console.log('hashez:', printHashes(5))

