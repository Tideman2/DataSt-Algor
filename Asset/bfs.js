
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
  
  
  // implementin dijktars algorithm for shortest pat
  
  let ra = createGraph(`mark`, `miceal`, `you`, `jon`, `anuj`, `perry`, `tom`, `jonny`);
  
  addEdges( 'mark', 'miceal', 'anuj');
  addEdges( 'you', 'jon', 'perry', `mark`);
  addEdges(`anuj`, `tom`);
  addEdges(`miceal`, `jonny`);
  