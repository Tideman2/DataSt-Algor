// implementing greedy algorithm

let statesNeeded = new Set([`mt`, `wa`, `or`, `id`, `nv`, `ut`, `ca`, `az`]);

let stations = {};
stations[`kone`] = new Set([`id`, `nv`, `ut`]);
stations[`ktwo`] = new Set([`wa`, `id`, `mt`]);
stations[`kthree`] = new Set([`or`, `nv`, `ca`]);
stations[`kfour`] = new Set([`nv`, `ut`]);
stations[`kfive`] = new Set([`ca`, `az`]);

function findBestStation() {
  let coveredStates = new Set;
  let selectedStations = [];

  function helper() {
    if(coveredStates.size === statesNeeded.size) {
        return selectedStations;
    }else {
        let bestStation = null;
        let bestCovrae = new Set;
       for(let station in stations) {
       let stateCovered = [...stations[station]].filter( state => !coveredStates.has(state));
       if(stateCovered.length > bestCovrae.size) {
        bestCovrae = new Set(stateCovered);
        bestStation = station;
       }
       };

       if(bestStation) {
        selectedStations.push(bestStation);
        coveredStates = new Set([...coveredStates, ...bestCovrae]);
        delete stations[bestStation];
       }
      return helper();
    }

  }

 return  helper();
}


console.log(findBestStation())