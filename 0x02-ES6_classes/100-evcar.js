#!/usr/bin/node
// 100-evcar.js
import Car from './10-car.js'; 

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // Return a generic 'Car' instead of an 'EVCar'
    const newCar = super.cloneCar();
    return newCar;
  }
}
