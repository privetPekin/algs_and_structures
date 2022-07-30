const { randomArray } = require("./utils");
const array = randomArray(10000, 1000)
let count = 0

/**
 * @description - Алгоритм сортировки пузырьком, сложность O(n*n).
 * @description - В двух циклах проходимся по массиву и сравниваем попарно лежащие элементы, если следующий элемент > предудыщего, то мы меняем их местами
 * @param {Array} arr 
 */
function bubbleSort(arr) {
   let len = arr.length;
   for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
         }
         count += 1
      }
   }
   return arr;
}

console.log(bubbleSort(array))
console.log('count:', count)