const { randomArray } = require("./utils");
const array = randomArray(10000, 1000)
let count = 0
/**
 * @description - Алгоритм линейнего поиска, сложность O(n)
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
console.log(linearSearch(array, 333))
console.log('count:', count)