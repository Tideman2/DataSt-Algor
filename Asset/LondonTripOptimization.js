//In this problem we are traveling to londom for 2 days and you have set of attractions that we wish to see...
//But we have only totalTime to do a see any attractions, now we have to maximize the amount of things we can see...

function grid(cols,row) {
 let grid = [];
 for(let i = 0; i <= row; i++) {
    let row = [];
    for(let j = 0; j < cols; j++) {
     let column = [0];
     row.push(column)
    }
    grid.push(row)
 } 
 return grid
}

function maxiimizeItenerary(attractions, totalTime) {
     let attract = attractions.map((attraction) => {
        return {
           time: attraction[0],
           value: attraction[1]
        }
     })

   let proccessed = []; 
   let rid = grid(totalTime, attractions.length) 
//    console.log(rid[0])

   let indexOfAttraction = 0;
   let rowIndex = 0;
 console.log(rid)
   while(attractions.length > proccessed.length ) {
    let currentItem = attract[indexOfAttraction];
    let currentRow = rid[rowIndex];
    let prevRow = rid[rowIndex - 1];
    console.log(currentItem)
      if(rowIndex === 0) { // if its the first row in the grid
     //fill the column that passes the constraint of the check
     console.log(`ultimate`)
     for(let cols = 0; cols < currentRow.length; cols++) {
        if(currentItem.time <= cols) {
           currentRow[cols] = currentItem.value
        }else {
            currentRow[cols] = 0;
        }
     }
      }else {
         //Starting from the second row
         for(let cols = 0; cols < currentRow.length; cols++) {
            if(currentItem.time < cols) {
                console.log(`first`)
            //if the time of attraction is lesser than the column
            //get the remaining space and get the pvious item from the prev row in that same coloumn that will fill it 
             let spaceToFill = cols - currentItem.time;
             let itemToFillsSpace = null;
              for(let coloumn = 0; coloumn < prevRow.length; coloumn++) {
                if(coloumn === spaceToFill) {
                    itemToFillsSpace = prevRow[coloumn]
                }
              }
             console.log(spaceToFill, itemToFillsSpace)
        
               let valueTocalWit = currentItem.value + itemToFillsSpace
               let bestValue = valueTocalWit > prevRow[cols]? valueTocalWit: prevRow[cols];
               currentRow[cols] = bestValue;
                console.log(`yeaaaaaaaaa`, currentItem.value, itemToFillsSpace)
            }else if(currentItem.time === cols) {
                console.log(`sec`)
             let bestAttraction = currentItem.value > prevRow[cols]? currentItem.value: prevRow[cols];
             currentRow[cols] = bestAttraction;
             
            }else {
                console.log(`tird`)
                currentRow[cols] = prevRow[cols];
                console.log(prevRow[cols])
            }
         }
      }
      proccessed.push(currentItem);
      indexOfAttraction++
      rowIndex++
   }
   console.log(proccessed, indexOfAttraction, rowIndex)
   return rid
 }

 // gh
 const attractions = [
[5, 10],
[4, 9],
[7, 13],
[2, 4],
 ];
 const totalTime = 10 ;

console.log( maxiimizeItenerary(attractions, totalTime))
