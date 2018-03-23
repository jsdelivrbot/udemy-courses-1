// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    let counter = 1;

    let start_column = 0;
    let end_column = n - 1;

    let start_row = 0;
    let end_row = n - 1;

    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    while (start_column <= end_column && start_row <= end_row) {

        for (let i = start_column; i <= end_column; i++) {
            results[start_row][i] = counter;
            counter++;
        }

        start_row++;

        for (let i = start_row; i <= end_row; i++) {
            results[i][end_column] = counter;
            counter++;
        }

        end_column--;

        for (let i = end_column; i >= start_column; i--) {
            results[end_row][i] = counter;
            counter++;
        }

        end_row--;

        for (let i = end_row; i >= start_row; i--) {
            results[i][start_column] = counter;
            counter++;
        }

        start_column++;
    }

    return results;
}

module.exports = matrix;
