// PSEUDO CODE
// Declare a class of SoftPlay
// Include a constructor, this.adults and this.children.

// Inside the class include 3 methods: Occupancy, Enter and Leave.
// 'Occupancy' should contain two keys: total number of adults and total number of children.

// 'Enter' should allow one adult and one child to go inside the softplay.
// If it fails, then it shouldn't be allowed, return false.
// If it passes, it should return true and the num of adults and num of children should be added to the total.

// 'Leave' registers how many adults and children leave the softplay.
// A child should not leave without an adult.
// There shouln't be more children than adults in the softplay. Each adult should have one child.
// A child must be with an adult when leaving.
// The number of adults and children who want to leave should be less than the number inside the softplay.
// If the above conditions fail, return false.
// Return true if it passes.
// The num of adults and children should be deducted from the total num of adults and childre.

// TODO: Write your class in this file
class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }
  occupancy() {
    return {
      adults: this.adults,
      children: this.children,
    };
  }
  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false;
    } else {
      return true;
      this.adults += numAdults;
      this.children += numChildren;
    }
  }
  leave() {}
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
};
