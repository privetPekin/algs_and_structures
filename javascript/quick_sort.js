const { randomArray } = require("./utils");
const array = randomArray(10000, 1000)
let count = 0

/**
 * @description - Алгоритм быстрой сортировки, сложность в худшем случае: O(n^2), лучшем: O(n*2log2n) , среднее: O(n*log2n).
 * @description - Алгоритм работает по принципу разделяй и властвуй. Суть состоит в том, чтобы разделить массив на подмассивы и выбрать опорный элемент (случайно или центральный)
 * @description - Подмассивы разделить на два массива, первый - которые больше опорного элемента, второй - меньше. Для каждого из массивов выполняется такая-же процедура
 * @param {Array} arr 
 */
function quickSort(arr) {
   if (arr.length < 2) return arr;
   let min = 1;
   let max = arr.length - 1;
   let pivotIndex = Math.floor(min + Math.random() * (max + 1 - min))
   let pivot = arr[pivotIndex];
   const less = [];
   const greater = [];
   arr.splice(arr.indexOf(pivot), 1);
   arr = [pivot].concat(arr);
   for (let i = 1; i < arr.length; i++) {
      count += 1
      if (i === pivot) {
         continue
      }
      if (pivot > arr[i]) {
         less.push(arr[i]);
      } else {
         greater.push(arr[i]);
      }
   }
   return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort(array))
console.log('count:', count)