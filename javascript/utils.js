const randomArray = (length, max) => Array(length).fill().map(() => Math.round(Math.random() * max))

module.exports.randomArray = randomArray

module.exports.getArraySorted = (length, max) => randomArray(length, max).sort((a, b) => {
   return a - b;
})

module.exports.getGraph = () => {
   const graph = {
      a: ['b', 'e'],
      b: ['e', 'f'],
      c: ['d', 'a'],
      d: ['a'],
      e: ['e'],
      f: ['b']
   }

   return graph
}

module.exports.getGraphDijkstra = () => {
   const MAX_INTEGER = Infinity;
   const MIN_INTEGER = 0;
   return {
      const: {
         MAX_INTEGER,
         MIN_INTEGER
      },
      items: [
         [MIN_INTEGER, 9, 2, MAX_INTEGER, 6],
         [9, MIN_INTEGER, 3, MAX_INTEGER, MAX_INTEGER],
         [2, 3, MIN_INTEGER, 5, MAX_INTEGER],
         [MAX_INTEGER, MAX_INTEGER, 5, MIN_INTEGER, 1],
         [6, MAX_INTEGER, MAX_INTEGER, 1, MIN_INTEGER]
      ]
   }
}