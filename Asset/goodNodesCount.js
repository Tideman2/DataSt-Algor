let edges = [[0,1],[1,2],[1,3],[1,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[9,12],[10,11]]

var countGoodNodes = function(edges) {
   let proccessed = [];
   let tree = new Map();
   for(let i = 0; i < edges.length; i++) {
    let nodes = edges[i];
    console.log(nodes)
  // mapping out the nodes to empty neighbours for now
   for(let j = 0; j < nodes.length; j++) {
    if(!proccessed.includes(nodes[j])) {
      tree.set(nodes[j], [])
      proccessed.push(nodes[j])
    }
   }
   }

  //  now we loop through the edges and fill the neighbours accordingly
   for(let i = 0; i < edges.length; i++) {
    let nodes = edges[i];
    tree.get(nodes[0]).push(nodes[1]);
    tree.get(nodes[1]).push(nodes[0]);
   }


  //now dis is were we check if a node is good according to the problem
  
  let countOfgoodNodes = 0;

  proccessed = [...tree.keys()]; // Resetting the processed nodes
 
  console.log(tree, proccessed)

  function dfs(node, parent) {
    let size = 1;
    let childrenSizes = [];

    for(let neighbour of tree.get(node)) {
      if(neighbour !== parent) {
       let childSize = dfs(neighbour, node);
       childrenSizes.push(childSize)
       size += childSize
       console.log(size, childrenSizes)
      }
    }

    let isgood = new Set(childrenSizes);
    if(isgood.size <= 1) {
      countOfgoodNodes++
    }

    return size
  }
 
   dfs(0, -1)
  return countOfgoodNodes
};

// console.log(countGoodNodes(edges))



 