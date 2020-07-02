// Замыкания
// https://ru.wikipedia.org/wiki/Замыкание_(программирование)

// Обычное
// const addRegular = x => y => {
//     const z = x + y;
//     console.log(x + '+' + y + '=' + z);
//     return z;
// };

// console.log(addRegular(3)(6)); // вернёт 9 и выведет в консоль 3+6=9
// console.log('\n');


// Рекурсивное
// const addRecursively = x => y => {
//     const z = x + y;
//     console.log(x + '+' + y + '=' + z);
//     return addRecursively(z);
// };

/*  Выведет в консоль:
    1 + 1 = 2
    2 + 1 = 3
    3 + 1 = 4
    4 + 1 = 5
    [Function] */
// console.log(addRecursively(1)(1)(1)(1)(1)(0)(9)); // вернет функцию
