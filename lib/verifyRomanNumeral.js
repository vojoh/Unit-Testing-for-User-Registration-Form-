//Refactored code: the removal of many smaller helper functions to print out the roman characters from the conversion of Arabic numbers. ]=
//Instead uses an array to print out the conversion. 
//Still passes all the test 
module.exports = function convertToRoman(num) {
    if (num < 1 || num > 3999 || isNaN(num)) {
        return false; // Invalid input
    }

    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XXXX' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'VIIII' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IIII' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
            result += numeral.symbol;
            num -= numeral.value;
        }
    }

    return result;
};



//***************** Old unrefactored code: **********************//
//***************************************************************//
// module.exports = function convertToRoman(num){

//     let result = '';
//     let numOfM, numOfC, numOfL, numOfX, numOfV, numOfI;

//     function isValidInput(num) { //error handles any input that is not within ranges [1,3999], this includes any non numbers/symbols
//         return num >= 1 && num <= 3999;
//     }

//     function calculateM(num){
//         if (num >= 1000){
//             numOfM = Math.floor(num / 1000);
//             for (let i = 0; i < numOfM; i++) {
//                 result += 'M';
//             }
//             num %= 1000; // Update num for further calculations
//         }
//         return num;
//     }

//     function calculateC(num){
//         if (num >= 100){
//             numOfC = Math.floor(num / 100);
//             for (let i = 0; i < numOfC; i++) {
//                 result += 'C';
//             }
//             num %= 100; // Update num for further calculations
//         }
//         return num;
//     }

//     function calculateL(num){
//         if (num >= 50){
//             numOfL = Math.floor(num / 50);
//             for (let i = 0; i < numOfL; i++) {
//                 result += 'L';
//             }
//             num %= 50; // Update num for further calculations
//         }
//         return num;
//     }

//     function calculateX(num){
//         if (num >= 10){
//             numOfX = Math.floor(num / 10);
//             for (let i = 0; i < numOfX; i++) {
//                 result += 'X';
//             }
//             num %= 10; // Update num for further calculations
//         }
//         return num;
//     }

//     function calculateV(num){
//         if (num >= 5){
//             numOfV = Math.floor(num / 5);
//             for (let i = 0; i < numOfV; i++) {
//                 result += 'V';
//             }
//             num %= 5; // Update num for further calculations
//         }
//         return num;
//     }

//     function calculateI(num){
//         if (num >= 1){
//             numOfI = Math.floor(num / 1);
//             for (let i = 0; i < numOfI; i++) {
//                 result += 'I';
//             }
//             num %= 1; // Update num for further calculations
//         }
//         return num;
//     }

//     if (!isValidInput(num)) {
//         return false;
//     }

//     //functional calls
//     num = calculateM(num);
//     num = calculateC(num);
//     num = calculateL(num);
//     num = calculateX(num);
//     num = calculateV(num);
//     num = calculateI(num);

//     // Return the result after trimming any leading whitespace
//     return result.trim();
// }

// ** Source for implementing this assignment: ** 
// Javascript tutorial vidoes on youtube, javascript roman numeral 
//conversion walkthroughs, and CHATGPT to help give ideas for refactoring