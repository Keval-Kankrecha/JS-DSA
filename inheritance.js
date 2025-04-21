class Vehicle {
  constructor(company) {
    this.company = company;
  }
}

class Car extends Vehicle {
  constructor(company, price) {
    super(company)
    this.price = price;
  }
}

const bmw = new Car("car", 100000);
console.log(bmw)