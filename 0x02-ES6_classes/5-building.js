#!/usr/bin/node
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw TypeError('sqft must be a number');

    this._sqft = sqft;

    // Ensure 'evacuationWarningMessage' is implemented in subclasses 
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
