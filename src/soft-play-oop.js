// TODO: Write your class in this file


//SoftPlay should have 3 functions: Occupancy, Enter and Leave.
// SoftPlay should have the total number of adults (this.adults) and total number of children (this.children)
// You want to use the if statement and Boolean true or false for this exercise.


// Constructor with adults and children
class SoftPlay {
  constructor (adults, children) {
    this.totalAdultsInPlayground = 0;
    this.totalChildrenInPlayground = 0;
  }
  // Returns an object telling me the current number of adults and children in my softplay object.
  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }
  enter (numAdults, numChildren) {
    if (numAdults > 0) {
      return true
    }
    // numAdults must be greater than 0
    // If my check fail I return false
    // If my check passes then I increment adults and children by the new ones. 
  }
}

// SoftPlay occupancy
// Declare numAdults, numChild
const softPlay =  (numAdults, numChild);


//SoftPlay enter
// Every child entering the softplay is with one adult (true). If not (false)
enter (1, 1) {
if (numAdults >= numChild) {
  return true;
} else {
  return false;
}

// SoftPlay leave
// A child can't leave without an adult. 
// A child will leave with one adult (true)
// The number of adults and children leaving the center is <= adults and children staying in the center.

leave () {
  if (numAdults === 0 && numChild === 1) {
    return false
  } else {
    return true
  }
}

const softplay = new SoftPlay (5, 5);


// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
}
