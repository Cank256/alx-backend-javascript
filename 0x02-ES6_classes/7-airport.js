#!/usr/bin/node
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Override default toString method
  toString() {
    return `[object ${this.code}]`;
  }
}
