// Стандарт ECMA определяет 9 типов
/*
    Примитивы:
      - Undefined     typeof instance === "undefined"
      - Boolean       typeof instance === "boolean"
      - Number        typeof instance === "number"
      - String        typeof instance === "string"
      - BigInt        typeof instance === "bigint"
      - Symbol        typeof instance === "symbol"

    - Null            typeof instance === "object"
    - Object          typeof instance === "object"
    - Function        typeof instance === "function"
*/

let undef;
console.log(typeof undef === 'undefined');

const boolExample = true;
console.log(typeof boolExample === 'boolean');

const numberExample = 123;
console.log(typeof numberExample === 'number');

const stringExample = '123';
console.log(typeof stringExample === 'string');

const bigIntExample = BigInt(Number.MAX_SAFE_INTEGER + 1);
console.log(typeof bigIntExample === 'bigint');

const symbolExample = Symbol('id');
console.log(typeof symbolExample === 'symbol'); // https://learn.javascript.ru/symbol

const nullExample = null;
console.log(typeof nullExample === 'object');

const objectExample = {};
console.log(typeof objectExample === 'object');

const functionExample = () => 1;
console.log(typeof functionExample === 'function');

//== - нестрогое сравнение
//=== - строгое сравнение

// console.log(null === undefined);
// console.log(null == undefined);
