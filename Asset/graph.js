
let graph = [];

const start = 'Start';
const A = 'A';
const B = 'B';
const fin = 'Fin';

 function addNodes(...args) {
   let nodes = [...args];
   nodes.forEach((item) => {
    graph.push({
      node: item,
      neighbours: []
    })
   })
 };

 function addNeigboursAndCost() {
  graph.forEach((element) => {
    if(element.node === start) {
      element.neighbours = [
        {
          neighbour: A,  cost: 6,
        },
        {
          neighbour: B,  cost: 2,
        }
      ]
    }else if(element.node === A) {
      element.neighbours = [
        {
          neighbour: fin,  cost: 1,
        },
      ]
    }else if(element.node === B) {
      element.neighbours = [
        {
          neighbour: A,   cost: 3,
        },
        {
          neighbour: fin,  cost: 5
        }
      ]
    }else if(element.node === fin) {
      element.neighbours = [];
    }
  })
 }

addNodes(start, A, B, fin);
addNeigboursAndCost()

 function findTheShortestPath(graph, sourceNode) {
  let memory = {
    proccessed: [],
    costs: new Map(),
    parents: {},
    pat: undefined,
  }
  
  graph.forEach((item) => {
    memory.costs.set(item.node, Infinity);
    memory.parents[item.node] = null;
  });

  memory.costs.set(sourceNode, 0);

  function helper(currentNode) {
    
    //base case
    if(memory.proccessed.length === graph.length) {
      if(memory.pat) {
        let finalPath = Infinity
         memory.costs.forEach((node) => {
           if(node < finalPath) {
            finalPath = node;
           }
         })
        return `finalPath found`
      }else {
        return  `memory. pat is empty`
      }

    }else {
      console.log(graph)
      if(!memory.proccessed.includes(currentNode)) {
       
        let currentNodeItem = graph.find((item) => item.node === currentNode);
        let currentNodeNeighbours = currentNodeItem.neighbours;
 
        //calculate cheapest cost node gh
        let accumulatorForLowest = Infinity
        let lowestCostNeighbour = null
      function calculateLowestCost() {
       for(let node of currentNodeNeighbours) {
        let newCost = memory.costs.get(currentNode) + node.cost;
        let oldCost = memory.costs.get(node.neighbour);
        if(newCost < oldCost) {
          memory.costs.set(node.neighbour, newCost);
          memory.parents[node.neighbour] = currentNode
       }

       if(node.cost < accumulatorForLowest) {
        accumulatorForLowest = node.cost;
        lowestCostNeighbour = node.neighbour;
       }
       }
      }
      
      calculateLowestCost()

      if(lowestCostNeighbour) {
        memory.proccessed.push(currentNode)

        memory

        helper(lowestCostNeighbour);
      }
      
      }
      
    }

  }

  helper(sourceNode)
  
 console.log(memory)
 }

//  console.log(` console.log(graph)`,graph)
//  let co = findTheShortestPath(graph, start)
// console.log(co)

 
// console.log(typeof({})) 