// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const resultsArray = [];

//   for (let i = 0; i < array.length; i += size) {
//     const chunk = [];

//     for (let j = i; j < i + size; j++) {
//       if (array[j]) {
//         chunk.push(array[j]);
//       }
//     }

//     resultsArray.push(chunk)
//   }

//   return resultsArray;
// }
