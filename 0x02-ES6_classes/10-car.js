#!/usr/bin/node
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone a car
  cloneCar() {
    return new this.constructor();
  }
}
