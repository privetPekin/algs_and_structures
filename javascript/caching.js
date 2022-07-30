/**
 * @description - Реализация кэширование сохранение результата функции, которая определена в замыкание
 * Функция может любой главное не void
 * @param {Function} fn 
 * @returns 
 */
function caching(fn) {
   const cach = {}
   return function (n) {
      if (!cach[n]) {
         let result = fn(n)
         console.log('Добавляю в кэш:', result)
         cach[n] = result
         return result;
      }
      console.log('Беру из кэша:', cach[n])
      return cach[n]
   };
}

const cachMyFunction = caching((n) => Math.pow(n, 3))

cachMyFunction(3)
cachMyFunction(5)
cachMyFunction(6)
cachMyFunction(3)
cachMyFunction(5)
cachMyFunction(6)
cachMyFunction(10)
cachMyFunction(12)