const { getGraphDijkstra } = require("./utils");

const data = getGraphDijkstra()

/**
 * @description - Алгоритм Дейкстры: кратчайший путь из одного источника. Сложность O(n*n*n)
 * Алгоритм работает таким образом, что ищет достижение каждой вершины максимально простым по весу
 * @param {Array} graphs
 * @param {Number} start - входная точка 
 * @param {Number} end - искомая конечная точка
 */
function Dijkstra(graphs, start = 0, end = 0) {
   const rows = graphs.length,
      cols = graphs[0].length;

   if (rows !== cols || start >= rows) {
      return new Error('Ошибка матрицы смежности или ошибка исходной точки')
   }

   const cost = new Array(rows).fill(data.const.MAX_INTEGER);
   cost[start] = 0;

   for (let i = 0; i < rows; i++) {
      if (cost[i] < data.const.MAX_INTEGER) {
         for (let j = 0; j < cols; j++) {
            if (graphs[i][j] + cost[i] < cost[j]) {
               cost[j] = graphs[i][j] + cost[i];
            }
         }
      }
   }
   return end ? cost[end] : cost
}

console.log('Поиск стоимостей путей из 0 узла во все остальные:', Dijkstra(data.items, 0));
console.log('Поиск стоимостей путей из 1 узла во все остальные:', Dijkstra(data.items, 1));
console.log('Поиск стоимости из 1 узла в 3 узел:', Dijkstra(data.items, 1, 3));