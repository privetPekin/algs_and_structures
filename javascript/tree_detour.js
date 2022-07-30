const { getTree } = require("./utils");

/**
 * @description - Простейший алгоритм обхода дерево в двух форматах рекурсия и итеративная. Сложность такого алгоритм O(n)
 * Работа строится таким образом, чтобы найти каждый элемент child некоторого value и найти value этого child.
 * @param {Array} tree 
 * 
 * @description iteration - Для реализации итеративного подхода используется структура данных "стек" - представляющая из себя упорядоченный набор элементов, 
 * в которой добавление новых элементов и удаление существующих производится с одного конца, называемого вершиной стека.
 * 
 * В нашем случае функция getTree вернет структуру дерева с бесконечным количеством узлов(node), в коде используется как bit (частица) структуры.
 */

const iteration = (tree) => {
   if (!tree.length) {
      return 0
   }
   let sum = 0
   let stack = []
   tree.forEach(bit => stack.push(bit));
   while (stack.length) {
      const bit = stack.pop()
      sum += bit.value
      if (bit.child) {
         bit.child.forEach(child => stack.push(child))
      }
   }
   return sum
}

const recursive = (tree) => {
   let sum = 0;
   tree.forEach(bit => {
      sum += bit.value
      if (!bit.child) {
         return bit.value
      }
      sum += recursive(bit.child)
   })
   return sum
}

console.log(recursive(getTree()))
console.log(iteration(getTree()))