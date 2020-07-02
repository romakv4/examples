// "", '' - обычные строки, не поддерживают интерполяцию и не сохраняют форматирование
// `` - поддерживают интерполяцию и сохраняют форматирование

const lastWord = 'string';

// const regularString = "I'm regular " + lastWord;
// console.log(regularString);

// const interpolatedString = `I'm not regular ${lastWord}`;
// console.log(interpolatedString);

//Сохранение форматирования
// const regularStringFormatting = "I'm regular " +
//     lastWord +
//     ' and i not save formatting';

// console.log(regularStringFormatting);


// const interpolatedStringFormatting = `I'm not regular
//     ${lastWord}
//     and i save formatting`;

// console.log(interpolatedStringFormatting);

// Исполнение выражений в строках с интерполяцией
const example = `2 + 2 = ${2 + 2}`; // может быть подставлено любое вычисляемое выражение
console.log(example);
const secondExample = `2 === 2? ${2 === 2}`;
console.log(secondExample);

const someFunction = () => 2 === 2;
const thirdExample = `2 === 2? ${someFunction()}`;
console.log(thirdExample);
