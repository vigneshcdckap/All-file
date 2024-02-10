function multiplyMatrices(matrixA, matrixB) {
        var result = [];
    
        for (var i = 0; i < matrixA.length; i++) {
            result[i] = [];
            for (var j = 0; j < matrixB[0].length; j++) {
                result[i][j] = 0;
                for (var k = 0; k < matrixA[0].length; k++) {
                    result[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
    
        return result;
    }
    
   
    var matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    var matrix2 = [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ];
    
    // Multiply matrices
    var resultMatrix = multiplyMatrices(matrix1, matrix2);
    
    console.log(resultMatrix);
