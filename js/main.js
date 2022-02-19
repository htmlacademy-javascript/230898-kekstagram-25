// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Source https://schoolsw3.com/js/js_random.php
const min = 1000;
const max = 10000;
if (min >= 0 && max >= 0 && min <= max) {
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  }
else  {
  console.log("Mistake!");
}
let result = getRndInteger(min,max);
console.log(result);

//Функция для проверки максимальной длины строки.
const str = 'Life, the universe and everything.';
const value = str.length;
const max_value = 10;
if (value < max_value) {
console.log(true);
}
else {
console.log(false);
}
