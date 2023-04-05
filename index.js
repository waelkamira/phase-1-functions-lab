// Code your solution in this file!
function distanceFromHqInBlocks(BlockValue) {
    const hqBlock = 42; 
    return Math.abs(BlockValue - hqBlock);
  }
  

function distanceFromHqInFeet(BlockValue) {
    return distanceFromHqInBlocks(BlockValue) * 264;
// call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
// passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

// the return value of distanceFromHqInBlocks can then be used to calculate feet


}
distanceFromHqInFeet(BlockValue)

function distanceTravelledInFeet(start, destination) {
//returns the number of feet traveled
return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (Math.abs(destination - start) * 264 <= 400) {
        return 0;
    } else if (Math.abs(destination - start) * 264 > 400 && Math.abs(destination - start) * 264 <= 2000) {
        return((Math.abs(destination - start) * 264 ) - 400 ) * 0.02; 
    } else if ((Math.abs(destination - start) * 264 )  > 2000 && (Math.abs(destination - start) * 264 )  <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
  }
  calculatesFarePrice(50, 58)