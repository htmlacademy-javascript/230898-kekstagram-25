// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Source https://schoolsw3.com/js/js_random.php
let min= 1000;
let max=1000000;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let result = getRndInteger (min, max);
if (min >= 0 && max >= 0 && min <= max) {
  console.log(result);
  }
else  {
  console.log("Mistake!");
}


//Функция для проверки максимальной длины строки.
let str = 'Life, the universe and everything.';
let strlength = str.length;
let max_value = 10;

function isStringLongerThan(strlength, max_value) {
  if (str.length < max_value) {
   return true }
    else {
   return false }
}
console.log(isStringLongerThan(str, max_value));
