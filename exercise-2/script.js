//  cách 1 

// const string = "hello world"
// console.log(string);
// const array = string.split('')
// const reverse = array.reverse();
// console.log(reverse.join(''));


// cách 2

function reverseString (string) {
    const array = string.split('')
    const reverse = array.reverse();
    return console.log(reverse.join(''));
}

console.log('hello world');
reverseString('hello world');