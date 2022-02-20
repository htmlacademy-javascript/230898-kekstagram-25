// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Source https://schoolsw3.com/js/js_random.php
let min= 10;
let max=100;
if (min >= 0 && max >= 0 && min <= max) {
function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
  }
else  {
  console.log("Mistake!");
}
let result = getRndInteger (min, max);
console.log(result);

//Функция для проверки максимальной длины строки.
const str = 'Life, the universe and everything.';
function getLength(str) {
     return str.getLength;
   }
let strlength = getLength(str);
let max_value = 10;
if (strlength < max_value) {
console.log(true);
}
else {
console.log(false);}
