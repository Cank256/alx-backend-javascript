#!/usr/bin/node
import Car from './10-car';

// 100-evcar.js file
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    return new Car(); // Ensures cloning as Car instance, not EVCar
  }
}
