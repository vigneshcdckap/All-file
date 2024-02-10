
// Round 1 -- 2  grace -1  (1 minute)
// Round 2 -- 2     grace-1 (2 minutes) + 30 sec
// Round 3 – 5   grace - 3   (6 minutes) +1 minute

















































// ----------------------Round one-----------------
// ----------------Part 1--------------------------



// 1. What is IIFE's?












































// 2.Definition of High order function?
























































// 3. difference between anonymous functions ans named 
// functions and how will they be executed(each)?














































// 4. What's the use case for anynomous functions?





































// ---------------------Part 2-------------------------
// 






// -----------------2 Round--------------
//------------------1 Part---------------
//  Time: 2 minutes
//  after 1.30 sec I will give one clue

        // Tricky   Maths logical problem//




//--------------------Team A---------------


// 1: Find the logic of the sum and get the answer







// 4,2,7,6,13,12,19,18,__,28 





















//--------------------Team B---------------


// 2: Find the logic of the sum and get the answer




// 1=3
// 2=3
// 3=5
// 4=4
// 5=4
// 6=__
























//--------------------Team C---------------

//3: Find the logic of the sum and get the answer






// 9876, 6987, 7698, 8769,___































//--------------------Team D---------------

//4: Find the logic of the sum and get the answer






// 5 + 1 = 46

// 9 + 1 = 810

// 6 + 3 = 39

// 8 + 5 = ?


















// -----------------2 Round--------------
//------------------2 Part---------------



            // Binary Round//




//--------------------Team A---------------





//   0 0 1 1 0 1 0 0
// -     0 0 1 1 0 0
// ____________
//  
// ____01010000________

































//--------------------Team B---------------




//  1 0 0 1 0 1 1
//  /         1 1
// ____________
//  011001
// ____________




























//--------------------Team C---------------




//  10111101 
// +11100111  
// ____________
//  110100100
// ____________



























//--------------------Team D---------------



//  100111
//× 1101
// ____________
//  111111011
// ____________



























// ----------------------Round 3------------------------
// Time: 6-minutes  / 2-minutes
// marks = 5  / 3


























// ----------------Team A-----------------------------


// ---------------------------------Fibonacci Series using recurssion-------------------



































// function series(n) {
//         if (n <= 1) {
//             return [0];    
//         } else if (n === 2) {
//             return [0, 1];
//         } else {
//             var fibSeries = series(n - 1);
//             fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
//             return fibSeries;
//         }
//     }
    
//     // Specify the number of terms in the series
//     const x = 10;
//     const fibonacci_Series = series(x);
//     console.log("Fibonacci series using recursion:", fibonacci_Series);




























//     -------------------------Team B-------------------------

// ------------------------Pascals triangle----------------------

//   var numRows = 5;
//     var pascalsTriangle = generatePascalsTriangle(numRows);
    
//     // Display the result
//     for (var row = 0; row < numRows; row++) {
//         console.log(pascalsTriangle[row].join(' '));
//     }






























//  function generatePascalsTriangle(numRows) {
//         var triangle = [];

//         for (var i = 0; i < numRows; i++) {
//             triangle[i] = [];
//             for (var j = 0; j <= i; j++) {
//                 if (j === 0 || j === i) {
//                     triangle[i][j] = 1;
//                 } else {
//                     triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//                 }
//             }
//         }
    
//         return triangle;
//     }
    
    
    // var numRows = 5;
    // var pascalsTriangle = generatePascalsTriangle(numRows);
    
    // // Display the result
    // for (var row = 0; row < numRows; row++) {
    //     console.log(pascalsTriangle[row].join(' '));
    // }





































// ------------------------------------Team C-------------------------------------------

// -------------matrix multiplication----------------------

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






























// function multiplyMatrices(matrixA, matrixB) {
//         var result = [];
    
//         for (var i = 0; i < matrixA.length; i++) {
//             result[i] = [];
//             for (var j = 0; j < matrixB[0].length; j++) {
//                 result[i][j] = 0;
//                 for (var k = 0; k < matrixA[0].length; k++) {
//                     result[i][j] += matrixA[i][k] * matrixB[k][j];
//                 }
//             }
//         }
    
//         return result;
//     }
    
//    
//     var matrix1 = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
    
//     var matrix2 = [
//         [9, 8, 7],
//         [6, 5, 4],
//         [3, 2, 1]
//     ];
    
//     // Multiply matrices
//     var resultMatrix = multiplyMatrices(matrix1, matrix2);
    
//     console.log(resultMatrix);































































// ---------------------------------Team D-------------------------------------------------------



// -------------Random password generator---------------------------------------------------
// function generateRandomPassword(length) {
//         const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
//         let password = '';
    
//         for (let i = 0; i < length; ++i) {
//             const randomIndex = Math.floor(Math.random() * charset.length);
//             password += charset[randomIndex];
//         }
    
//         return password;
//     }
    
//     // Define the length of the password you want
//     const passwordLength = 12;
//     const newPassword = generateRandomPassword(passwordLength);
//     console.log("Random Password:", newPassword);
    
    
    
    