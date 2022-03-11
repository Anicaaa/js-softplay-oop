// TODO: Write your class in this file


//SoftPlay should have 3 functions: Occupancy, Enter and Leave.
// SoftPlay should have the total number of adults (this.adults) and total number of children (this.children)
// You want to use the if statement and Boolean true or false for this exercise.


// Constructor with adults and children
class SoftPlay {
  constructor (adults, children) {
    this.adults = adults;
    this.children = children;
  }
}

// SoftPlay occupancy
// Declare numAdults, numChild
const numberOf (numAdults, numChild);

SoftPlay.occupancy()
{ numAdults: 0, numChild: 0}

//SoftPlay enter
// Every child entering the softplay is with one adult (true). If not (false)
SoftPlay.enter () {
if (numAdults >= numChild) {
  return true;
} else {
  return false;
}

// SoftPlay leave
// A child can't leave without an adult. 
// A child will leave with one adult (true)
// The number of adults and children leaving the center is <= adults and children staying in the center.

SoftPlay.leave () {
  if (numAdults === 0 && numChild === 1) {
    return false
  } else {
    return true
  }
}

const softplay = new SoftPlay (1, 0);


// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
