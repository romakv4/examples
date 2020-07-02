// var - практически не используется, небезопасен, устарел. Изменяемый.
// let - изменяемая переменная.
// const - неизменяемая переменная.

// Примеры:
// var
// function varExample() {
//     var myVar = 1;
//     if (true) {
//         var myVar = 2;
//         console.log(myVar);
//     }
//     console.log(myVar);
// }

// console.log("пример с var:");
// varExample(); // вывод: 2 2

//let
// function letExample() {
//     let myVar = 1; // можно переопределить
//     if (true) {
//         myVar = 2;
//         console.log(myVar);
//     }
//     console.log(myVar);
// }

// console.log("\nпример с let:");
// letExample(); // вывод: 2 1

// const
function constExample() {
    const myVar = 1; // переопределить нельзя
    if (true) {
        myVar = 2;
        console.log(myVar);
    }
    console.log(myVar);
}

console.log("\nпример с const");
constExample(); // TypeError: Assignment to constant variable.
