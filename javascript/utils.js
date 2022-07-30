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