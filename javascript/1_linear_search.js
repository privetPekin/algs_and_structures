const { randomArray } = require("./utils");
const array = randomArray(100, 100)
let count = 0
/**
 * @description - Алгоритм линейнего поиска, сложность O(n), где
 * n - количество операций или же длина массива.
 * @param {Array} array 
 * @param {string | number} item 
 */
function linearSearch(array, item) {
   for (let i = 0; i < array.length; i++) {
      count += 1
      if (array[i] === item) {
         return i;
      }
   }
   return null
}
console.log(linearSearch(array, 11))
console.log('count = ', count)