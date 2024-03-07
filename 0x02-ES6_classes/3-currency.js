#!/usr/bin/node
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and setter for code
  get code() {
    return this.code;
  }

  set code(newCode) {
    this.code = newCode;
  }

  // Getter and setter for name
  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }

  // Method to display full currency name
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
