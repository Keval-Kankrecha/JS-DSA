class Car {
    constructor(name){
        this.company = name
        this.price = 100000
    }
}

const kia = new Car("kia")
console.log(kia['company'])