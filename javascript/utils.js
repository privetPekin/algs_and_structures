module.exports.randomArray = (length, max) => Array(length).fill().map(() => Math.round(Math.random() * max))

module.exports.getArraySorted = (length, max) => randomArray(length, max).sort((a, b) => {
   return a - b;
})

module.exports.getFillArray = (length) => Array(length).fill().map((item, index) => index * 1)

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

module.exports.getTree = () => {
   return [
      {
         value: 13,
         child: [
            {
               value: 7,
               child: [
                  {
                     value: 35,
                  }
               ]
            },
            {
               value: 31,
               child: [
                  {
                     value: 8,
                     child: [
                        {
                           value: 646,
                           child: [
                              {
                                 value: 13
                              },
                              {
                                 value: 55
                              }
                           ]
                        }
                     ]
                  }
               ]
            }
         ]
      },
      {
         value: 13,
         child: [
            {
               value: 13,
               child: [
                  {
                     value: 13,
                     child: [
                        {
                           value: 13
                        },
                        {
                           value: 55,
                           child: [
                              {
                                 value: 13
                              },
                              {
                                 value: 55,
                                 child: [
                                    {
                                       value: 13
                                    },
                                    {
                                       value: 55
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     value: 55
                  }
               ]
            },
            {
               value: 55
            }
         ]
      }
   ]
}