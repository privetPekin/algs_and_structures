const { getArraySorted } = require("./utils");
const array = getArraySorted(10000, 1000)
let count = 0

/**
 * @description - Алгоритм рекурсивного бинарного поиска, сложность O(log2n)
 * @param {Array} array 
 * @param {string | number} item 
 * @param {Number} start 
 * @param {Number} end 
 * @returns 
 */
function recursiveBinarySearch(array, item, start, end) {
   try {
      let middle = Math.floor((start + end) / 2);
      count += 1
      if (item === array[middle]) {
         return middle
      }
      if (item < array[middle]) {
         return recursiveBinarySearch(array, item, start, middle - 1)
      } else {
         return recursiveBinarySearch(array, item, middle + 1, end)
      }
   } catch (e) {
      return null
   }
}

console.log(recursiveBinarySearch(array, 333, 0, array.length))
console.log('count =', count)