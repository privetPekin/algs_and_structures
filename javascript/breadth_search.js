const { getGraph } = require("./utils");

/**
 * @description - Алгоритм поиска в ширину по графу, сложность O(V+E). V — общее количество вершин. E — общее количество граней (ребер). 
 * Граф - это абстрактная структура данных представляющая собой множество вершин и набор ребер, те соединение м/у парами вершин. Наглядный пример - карта, 
 * где есть города с соединением через маршруты (В нашем случае ребра), а города вершины. Ребра бывают однонаправленными и двунаправленными (A <-> B, A->B). 
 * Для реализации алгоритма следует использовать очередь (queue - первый зашел, первый вышел). *FIFO - First in First
 * @param {Object} graph 
 * @param {string} start 
 * @param {string} end 
 */
function breathSearch(graph, start, end) {
   let queue = []
   queue.push(start)
   while (queue.length > 0) {
      const current = queue.shift()
      if (!graph[current]) {
         graph[current] = []
      }
      if (graph[current].includes(end)) {
         return true
      } else {
         queue = [...queue, ...graph[current]]
      }
   }
   return false
}

console.log(breathSearch(getGraph(), 'a', 'e'))
