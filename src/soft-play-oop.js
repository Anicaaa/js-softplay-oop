// TODO: Write your class in this file

class SoftPlay {
  constructor (adults, children) {
    this.totalAdults = 0;
    this.totalChildren = 0;
  }

  occupancy() {
    return {
      adults: this.totalAdults,
      children: this.totalChildren
    }
  }
  enter (numAdults, numChildren) {
    if (numAdults < numChildren) return false

    if (numAdults > numChildren) return true
  }


leave (numAdults, numChildren) {
  const expectedAdultCount = this.adults - numAdults
  const expectedChildCount = this.children - numChildren

  if (numChildren > numAdults) return false

  if (expectedChildCount > expectedAdultCount) return false

  if (expectedAdultCount < 0 || expectedChildCount < 0) return false
} else {
  this.totalAdults -= numAdults;
  this.totalChildren -= numChildren;
  return true
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}