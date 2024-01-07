import Car from './10-car';

const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[rangeSymbol] = range;
  }

  get range() {
    return this[rangeSymbol];
  }

  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}
