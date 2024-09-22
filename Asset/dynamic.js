// Implementing dynamic programming to solve the knapsack problem

// we are trying to steal items into a 4lb knapsack

//we crate a grid to store our proccessed data and then use the computated value to solve the bigger problem

function crategrid(row, column) {
let grid = [];
for(let i = 0; i < row; i++) {
    let row = [];
    let knapsackWeight = 0;
    for(let j = 0; j < column; j++) {
    knapsackWeight++
    row.push({
     knapsackWeight: knapsackWeight,
     item: null,
    })
    }
    grid.push(row)
}

return grid

}

// gh

let items = [
    {
      item: `guiter`,
      worth: 1500,
      weight: 1,
    },

    {
        item: `laptop`,
        worth: 2000,
        weight: 3,
    },

    {
        item: `stereo`,
        worth: 3000,
        weight: 4,
    }
]


 function solveKnapsack() {
     let proccessed = [];
     let grid = crategrid(3, 4);
     let gridRow = 0;
     
     function helper(index) {
        if(proccessed.length === items.length) {
          console.log(proccessed, gridRow)
            return grid
        }else {
           let currentItem = items[index]; //current iteratingitem
           let currentRow = grid[gridRow];    
              for(let column = 0; column < currentRow.length; column++) {
                if(gridRow === 0) { // check if its the first row of the grid
                   currentRow[column].item = currentItem ;
              }else {
                let itemInPrevRow = grid[gridRow - 1][column].item
                if(currentItem.weight > currentRow[column].knapsackWeight) {
                  //get the last most expensive Item in that column from the previous row
                  console.log(`first block`) 
                  currentRow[column].item = itemInPrevRow;
                }else if(currentItem.weight === currentRow[column].knapsackWeight) {
                  console.log(`second block`)
                  let mostExpensive = currentItem.worth > itemInPrevRow.worth || currentItem.worth === itemInPrevRow.worth?
                  currentItem: itemInPrevRow;
                  currentRow[column].item = mostExpensive; 
                }else{
                   //if the weight of item is lesser than the knapsack weight
                   //add the item in the space remaining to the currentItem 
                   // with the lastest item in our processing coulumn to know which is better to put in the knapsack
                   console.log(`3rd blcok`)
                   currentRow[column].item = currentItem
                   let weightToFill =  currentRow[column].knapsackWeight - currentRow[column].item.weight;
                   let itemToFillWeight = grid[gridRow - 1].find((columnInPrevRow) => columnInPrevRow.knapsackWeight === weightToFill);
                    if(itemToFillWeight) {
                      currentRow[column].item.worth = currentItem.worth + itemToFillWeight.item.worth;
                      currentRow[column].item.item = currentItem.item.concat(` and ${itemToFillWeight.item.item}`)
                    }else {
                      currentRow[column].item = currentItem.worth > itemInPrevRow.worth || currentItem.worth === itemInPrevRow.worth?
                      currentItem: itemInPrevRow;
                    }

                }
               
             }
            }
             gridRow++
             proccessed.push(currentItem);
        }
        index++
        return helper(index); 
     };
    
   return helper(0);

 };

console.log(solveKnapsack())

// function createGrid(rows, cols) {
//   let grid = [];
//   for (let i = 0; i <= rows; i++) {
//     let row = Array(cols + 1).fill(0); // Initialize with 0s
//     grid.push(row);
//   }
//   return grid;
// }

// console.log(createGrid(3,4))

let me = `karo`;
