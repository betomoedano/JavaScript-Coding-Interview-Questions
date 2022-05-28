function validStartingCity(distances, fuel, mpg) {
    let milesRemaining = 0;
    let indexOfStartingCityCandidate = 0;
    let milesRemainingAtStartingCityCandidate = 0;
    
    for(let cityIdx = 1; cityIdx < distances.length; cityIdx++) {
        const distanceFromPreviousCity = distances[cityIdx - 1];
        const fuelFromPreviousCity = fuel[cityIdx - 1];
        
        milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;
        
        if(milesRemaining < milesRemainingAtStartingCityCandidate) {
            milesRemainingAtStartingCityCandidate = milesRemaining;
            indexOfStartingCityCandidate = cityIdx;
        }
    }
    return indexOfStartingCityCandidate;
  }
  
  const distances = [5, 25, 15, 10, 15];
  const fuel = [1, 2, 1, 0, 3];
  const mpg = 10;
  
  console.log(validStartingCity(distances, fuel, mpg));    