#!/usr/bin/node
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Method to cast object to a number
  valueOf() {
    return this.size;
  }

  // Method to cast object to a string
  toString() {
    return this.location;
  }
}
