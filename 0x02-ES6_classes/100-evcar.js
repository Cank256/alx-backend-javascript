#!/usr/bin/node
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    return new this.Car(); // Ensures cloning as Car instance, not EVCar
  }
}
