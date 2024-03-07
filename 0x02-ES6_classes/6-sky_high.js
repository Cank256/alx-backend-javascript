#!/usr/bin/node
import Building from './5-building';

// 6-skyhigh.js file
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Getter for floors
  get floors() {
    return this.floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
