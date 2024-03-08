#!/usr/bin/node
const uniqueIdSymbol = Symbol('unique identifier for cloning');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[uniqueIdSymbol] = Symbol('unique identifier for cloning');
  }

  // Method to clone a car
  cloneCar() {
    return new this.constructor();
  }
}
