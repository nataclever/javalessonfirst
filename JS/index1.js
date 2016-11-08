

var year = Number(prompt('Input year'));
var month = Number(prompt('Input month'));
var day = Number(prompt('Input day'));
var sum = sumArgs(year, month, day);
var text = 'Your magic number: ';
var result = text + sum;
document.write(result);

 function sumArgs(a, b, c) {
     var result = a + b + c;
     return result;
}