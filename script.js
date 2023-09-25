// ------------------1-------------------------

// const logItems = function (array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i} - ${array[i]}`);
//     }
// }

// array = ['Mango', 'Poly', 'Ajax'];
// let list = logItems(array);

// ------------------2-------------------------

// const calculateEngravingPrice = function (message, pricePerWord) {

//     let words = message.split(' ');
//     let wordCount = words.length;
//     let totalCost = wordCount * pricePerWord;

//     return totalCost;
// }

// message = "Запиши вдалу ідею";
// pricePerWord = 25;
// console.log(calculateEngravingPrice(message, pricePerWord));

// ------------------3-------------------------

// const findLongestWord = function (string) {
//     let words = string.split(' ');
//     let longestWord = "";

//     for (let i = 0; i < words.length; i++){
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// let string = "Запиши вдалу ідею";
// console.log(findLongestWord(string));

// ------------------4-------------------------

// const formatString = function (string) {
//     let answer = "";
//     if (string.length > 40) {
//         answer = string.substr(0, 40) + "...";
//         return answer;
//     } else {
//         return string;
//     }
// }

// let string = "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.";
// // let string = "Запиши вдалу ідею";

// console.log(formatString(string));

// ------------------5-------------------------

// const checkForSpam = function (message) {
//     for (let i = 0; i < message.length; i++){
//         if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// let message = "Запиши вдалу ідею";
// console.log(checkForSpam(message));

// ------------------6-------------------------

let numbers = [];
let input;

while (true) {
    input = prompt("");

    if (input === null) {
        break; 
    }

    input = Number(input);

    if (!isNaN(input)) {
        numbers.push(input);
    } else {
        alert("Ви ввели не число. Будь ласка, спробуйте ще раз.");
    }
}

if (numbers.length > 0) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив порожній, немає чисел для підрахунку.");
}
