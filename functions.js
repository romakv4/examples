// function
// arrow-function

function doSomething() {
    return 'Do it yourself!';
}

const doSomethingPlease = () => {
    return 'Hmm... Do it yourself again!';
}

// Эквивалентно примеру doSomethingPlease
const doIt = () => 'Ok.';

const doItAgain = variable => variable; // для единственного параметра скобки не обязательны

console.log(doSomething());
console.log(doSomethingPlease());
console.log(doIt());
console.log(doItAgain('What for?'));
