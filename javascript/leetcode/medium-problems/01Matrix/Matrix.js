/* 542. https://leetcode.com/problems/01-matrix/ */

// Time: O(N * M), Space: O(N * M)
var updateMatrix = function(mat) {

    let row = mat.length;
    let column = mat[0].length;

    let queue = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (mat[i][j] === 0) {
                queue.push([i,j,0]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    let directions = [[-1,0], [1,0], [0,-1], [0,1]];


    while (queue.length) {
        const [row, col, distance] = queue.shift();

        if (mat[row][col] > distance) {
            mat[row][col] = distance;
        }

        directions.forEach(([dx,dy]) => {
            // coordinates are valid
            if(row+dx >= 0 && row+dx < mat.length && col + dy >= 0 && col + dy < mat[0].length) {

                if(mat[row+dx][col+dy] === Infinity) {
                    queue.push([row + dx ,col + dy ,distance+1])
                }
            }
        })
    }
    return mat;
};