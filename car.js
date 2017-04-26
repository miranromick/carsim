var fs = required('fs')


class Car {
  constructor() {
    this.make = carMake,
    this.year = carYear,
    this.speed = 0
  }
  save(){
    var tempCar ={
      make: this.make,
      year: this.year,
      speed: this.speed
    }
    fs.writeFileSync('data.json', JSON.stringify
    ({make: this.make, year: this.year, speed: this.speed}))
  }
    load(){
      var rawFile = fs.readFileSync('data.json')
      var tempCar = JSON.parse(rawFile)
      this.make = tempCar.make
      this.year = tempCar.year
      this.speed = tempCar.speed
    }
}

module.exports = Car
