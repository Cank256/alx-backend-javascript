#!/usr/bin/node
export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate from Building, it is an abstract class');
    }

    this.sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this.sqft;
  }

  // Method to ensure subclass implements evacuationWarningMessage
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
