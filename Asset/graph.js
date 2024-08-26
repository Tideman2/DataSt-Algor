
//implementing graph
function createAnNodePoint(item) {
  return {
    name: item,
    mangoSeller: false,
    friends: [], 
    weight: Math.floor(Math.random() * 20)
  }
}

 function createGraph(...elemnts) {
  let elementsToCreateNodeFor = [...elemnts];
  let raf = {};
  function elper(index) {
    if(index >= elementsToCreateNodeFor.length ) {
      console.log(index)
      return raf
    }else {
    let current = createAnNodePoint(elementsToCreateNodeFor[index])
    let name = current.name
    raf[name] = current;
    return elper(index + 1) ;
    }
      
  } 

 return elper(0)
 }

 

  function addEdges(name, ...arjs) {
  let node = ra[name];
   if(!node) {
    console.log(`node does not exist`)
    return
   }
  let nodesToconnectTo = [...arjs]; 
    function elper(index) {
     if(index >= nodesToconnectTo.length) {
      return 
     }else {
      let current = nodesToconnectTo[index];
      let toConnectTo = ra[current];
      toConnectTo? node.friends.push(toConnectTo): console.log(`de node name ${toConnectTo} does not exist`);
      elper(index + 1)
     }
     
    }
    elper(0)
  }


  //BFS search for a mango seller
function findMangoSeller(startinNode) {
  let queu = [startinNode];
  let searched = new Set;
  let foundSeller = {
    found: false,
  }
  
  while(queu.length > 0) {
    let currentNode = queu.shift();
    if(searched.has(currentNode.name)) {
      return
    }else {
      searched.add(currentNode.name)
      if(currentNode.mangoSeller) {
        foundSeller.seller = currentNode.name;
        foundSeller.found = true;
        console.log(queu)
        queu = [];
      }else {
        let friends = [...currentNode.friends];
        friends.forEach((item) => {
          queu.push(item)
        })
      }
    }
  }

  return foundSeller
 
}



//implementin dijktars algorithm for shortest pat

let ra = createGraph(`mark`, `miceal`, `you`, `jon`, `anuj`, `perry`, `tom`, `jonny`);

addEdges( 'mark', 'miceal', 'anuj');
addEdges( 'you', 'jon', 'perry', `mark`);
addEdges(`anuj`, `tom`);
addEdges(`miceal`, `jonny`);




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