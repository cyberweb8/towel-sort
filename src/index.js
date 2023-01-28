// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null) {
        return [];
    } else {
        const arr = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2) {
                arr.push(matrix[i].reverse());
            } else {
                for (let j = 0; j < matrix[i].length; j++) {
                    arr.push(matrix[i][j]);
                }
            }
        }

        return [].concat.apply([], arr);
    }
};
