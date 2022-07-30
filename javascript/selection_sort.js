const { randomArray } = require("./utils");
const array = randomArray(10000, 1000)

let count = 0
/**
 * @description - Алгоритм сортировки выбором, сложность O(n*n).
 * @description - В цикле находим минимальное число в массиве и меняем его по индексу с первым элементов, далее со вторым и так далее.
 * @param {Array} arr 
 */
function selectionSort(arr) {
   let n = arr.length;
   for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
         if (arr[j] < arr[min]) {
            min = j;
         }
         count += 1
      }
      if (min != i) {
         let tmp = arr[i];
         arr[i] = arr[min];
         arr[min] = tmp;
      }
   }
   return arr;
}

console.log(selectionSort(array))
console.log('count:', count)