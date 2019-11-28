import { Component } from 'react';

export default class Car/* extends Component*/ {
    constructor(name, model) {
      // super(); 
      this.brand = name;
      this.model = model;
    }
    present() { return 'I have a ' + this.brand; }
  }
  
  // class SportCar extends Car {
  //   constructor(name, mod) {
  //     super(name);
  //     this.model = mod;
  //   }
  //   show() {
  //     return this.present() + ', it is a ' + this.model
  //   }
  // }

