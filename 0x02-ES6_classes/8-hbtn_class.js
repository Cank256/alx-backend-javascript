#!/usr/bin/node
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to cast object to a number
  valueOf() {
    return this._size;
  }

  // Method to cast object to a string
  toString() {
    return this._location;
  }
}
