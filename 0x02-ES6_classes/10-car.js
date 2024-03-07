#!/usr/bin/node
export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Method to clone a car
  cloneCar() {
    return new this.constructor();
  }
}
