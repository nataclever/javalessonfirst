/*alert('Hello!');
//console.log('Hello!');
//document.write('Hello!');

// var year = Number(prompt('Input year'));
// var month = Number(prompt('Input month'));
// var day = Number(prompt('Input day'));
// var sum = sumArgs(year, month, day);
// var text = 'Your magic number: ';
// var result = text + sum;
// document.write(result);

// function sumArgs(a, b, c) {
//     var result = a + b + c;
//     return result;
// }

// function tellAge(age) {
//     if (age < 18) {
//         return 'You are kid';
//     }
//     else {
//         return 'You are adult';
//     }
// }

// var age = Number(prompt('Tell your age'));
// var result = tellAge(age);
// document.write(result);



//var root = Number(prompt('tell number'));
//var root = a;
//var text = 'Result';

//var result = Math.sqrt(25);
//document.write(result); */

var number = Number(prompt('Input number'));
var sqrt = fsqrt(number);
var text = 'Rote of your number: ';
var result = text + sqrt;
document.write(result);

function fsqrt(a) {
var result = Math.sqrt(a);
      return result ;
         }
         
         