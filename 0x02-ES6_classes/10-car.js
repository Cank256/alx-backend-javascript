#!/usr/bin/node
const uniqueIdSymbol = Symbol('unique identifier for cloning');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[uniqueIdSymbol] = Symbol();
  }

  cloneCar() {
    const cloned = new Car(this._brand, this._motor, this._color);
    // Preserve uniqueIds to avoid accidental equality 
    cloned[uniqueIdSymbol] = this[uniqueIdSymbol]; 
    return cloned;
  }
}

