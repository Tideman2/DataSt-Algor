function creategrid(row, coloumn) {
 let grid = [];
 for(let i = 0; i < row; i++ ) {
    let row = []
    for(let j = 0; j < coloumn; j++) {
        let coloumn = null;
        row.push(coloumn)
    }
    grid.push(row)
 }

 return grid
}

let rid = creategrid(3, 4)
//gh

console.log(rid)

function pushTogrid(fruit) {
let coOdinates = fruit.cord
let redness = coOdinates[0];
let size = coOdinates[1];
  if(rid[redness][size] === null) {
    rid[redness][size] = fruit
    return `vacant and placed`
  }else {
    return `occupied`
  }
}



// console.log(rid)

function populate(item) {
 item.forEach((fruit) => {
    pushTogrid(fruit)
 })

 console.log(rid)
}

// array takes in a fruit and its properties, which are its size and redness.. size is de first parameter and de second its de rebness
// the redder and bigger once are oranges and otherwise are grapes.

let fruits = [
    {cord: [1, 2],
     type: `grape`
    },
    {cord: [1, 0],
      type: `grape`
     },
    {cord: [1, 1],
    type: `grape`
    },
    {cord: [2, 0],
    type: `orange`
    },
    {cord: [2, 1],
    type: `orange`
    },
    {cord: [2, 2],
    type: `orange`
    },
    {cord: [2, 3],
    type: `orange`
    },
    {cord: [0, 0],
    type: `grape`
    },
    {cord: [0, 1],
    type: `grape`
    },
    {cord: [0, 2],
    type: `grape`
    },
    {cord: [0, 3],
    type: `grape`
    },
    {cord: [1, 3],
    type: `orange`
    }
]
populate(fruits)


function calculateDistanceBetweenTheElem(...arg) {
  let pointA = arg[0].cord;
  let pointB = arg[1].cord;
  console.log(pointA, pointB);
  let dataTogetDistance = [];
  for(let i = 0; i < pointA.length; i++) {
    dataTogetDistance.push(pointB[i] - pointA[i])
  }
  
 let distance = dataTogetDistance[0] + dataTogetDistance[1]
 
 return distance
}

console.log(calculateDistanceBetweenTheElem(fruits[0], fruits[fruits.length -1]));

//using  KNN for classifyin
//the position of an element in the row will determine how big it is and the column will determine how red

function classifyFruit(fruit) {
  let orange = 0;
  let grape = 0;
  let row = fruit.cord[0];
  let column = fruit.cord[1];
  // neighbours is an array of the co-ordinates of the neighbours around our fruit
  let neighbours = [
    { row: row, column: column - 1 },
    { row: row, column: column + 1 },
    { row: row - 1, column: column },
    { row: row + 1, column: column },
    { row: row + 1, column: column - 1 },
    { row: row + 1, column: column + 1 },
    { row: row - 1, column: column + 1 },
    { row: row - 1, column: column - 1 }
  ];
  console.log(row,column)

   function helper() {
    for(let i = 0; i < neighbours.length; i++) {
      if(neighbours[i].row < 0 || neighbours[i].row >= rid.length ||
        neighbours[i].column < 0 || neighbours[i].column >= rid[0].length) {
        console.log(`out of bounds`)
        continue
      }else {
      let currentNeighbour = rid[neighbours[i].row][neighbours[i].column];
      if(currentNeighbour !== undefined) {
         if(currentNeighbour.type === `grape`) {
          grape++
         }else if(currentNeighbour.type === `orange`) {
          orange++
         }
      }
      }  
    }
     if(orange > grape) {
      console.log(fruit)
      return `this fruit is likely an orange `
     }else if(grape > orange) {
      console.log(fruit)
       return `this fruit is likely a grape `
     }
   }

  return helper()
  
}
//gh

// console.log(classifyFruit(fruits[7]))


var MyCalendarTwo = function() {
  // To store the events 
  this.events = [];
  this.overLappedEvents = [];

  //function to get overlap of intervals
  this.getOverlap = (interval1, interval2) => {
  let [start1, end1] = interval1;
  let [start2, end2] = interval2;
   if(start1 < end2 && start2 < end1) {
    let newStart = start1 > start2? start1: start2;
    let newEnd = end1 < end2? end1: end2;  
    return [newStart, newEnd];
   };
};

//function to check if there is an overlap
this.doesOverLap = (interval1, interval2) => {
  let [start1, end1] = interval1;
  let [start2, end2] = interval2;
  if(start1 < end2 && start2 < end1) {
  return true
   };
   return false
  }
};

MyCalendarTwo.prototype.book = function(start, end) {

let event = [start, end]
   //check if its the first event we are receiving
   if(this.events.length < 1) {
    this.events.push(event)
    return true
  }

  //check if start and end overlap with any overLappedEvent
  if(this.overLappedEvents.length > 0) {
    for(let events of this.overLappedEvents) {
       if(this.doesOverLap(event,events)) {
        return false
       }
    }
  }

//if there is any overLap between event and any of the bookedEvent get the overLap and put it in overLapped event
  for(let bookedEvent of this.events) {
    if(this.doesOverLap(event, bookedEvent)) {
      this.overLappedEvents.push(this.getOverlap(event, bookedEvent))
    }
  }

  this.events.push(event);
  return true
};

let calender = new MyCalendarTwo()
calender.book(5,10)
console.log(calender)
