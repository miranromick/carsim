var fs = require('fs')




class Car {
  constructor(carMake, carYear, carColor) {
    this.make = carMake,
    this.year = carYear,
    this.color = carColor,
    this.speed = 0,
    this.light = "off",
    this.parkingBrake ="off"
    this.img = undefined
  }
  carMakes(){
    if(this.make == "jeep"){
      this.img = "http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Strut-Jeep-Wrangler-SUV-PNG-Image.png"
    }
    else if(this.make == "bentley"){
      this.img = "http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Black-Bentley-Continental-GT-V8-Car-PNG-Image.png"
    }
  else if(this.make == "tesla"){
    this.img = "http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Tesla-Model-S-Red-Car-PNG-Image.png"
  }
  else if(this.make == "porsche"){
    this.img = "http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Red-Porsche-911-GT3-RS-4-Car-PNG-Image.png"
  }
  else if(this.make == "aston martin"){
    this.img = "http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-Vanquish-Car-PNG-Image.png"
  }
  else if(this.make == "honda"){
    this.img = "http://pngimg.com/uploads/honda/honda_PNG10341.png"
  }
  else{
    this.img =""
  }
}
  accelerate(){
      if(this.parkingBrake == "off"){
        this.speed += 10
      }else{
        this.speed = 0
      }
  }
  brake(){
    if (this.speed <= 7){
      this.speed = 0
    }
    else {
      this.speed -= 7
    }
  }
  lights(){
    if (this.light == "off"){
      this.light = "on"
    }
    else{
      this.light = "off"
    }
  }
  parkingBrakes(){
      if(this.parkingBrake=="on"){
        this.parkingBrake="off"
      }else if (this.speed >=1) {
        this.parkingBrake = "off"
      }
      else{
        this.parkingBrake="on"
      }
  }
  // colors(){
  //   if(this.color == "blue"){
  //     this.color = "blue"
  //   }
  //   else if(this.color == "red"){
  //     this.color = "red"
  //   }else {
  //     this.color = "white"
  //   }
  // }


  save(){
    var tempCar ={
      make: this.make,
      year: this.year,
      speed: this.speed,
      light: this.light,
      parkingBrake: this.parkingBrake,
      color: this.color
    }
    fs.writeFileSync('data.json', JSON.stringify
    (tempCar))
  }
    load(){
      var rawFile = fs.readFileSync('data.json')
      var tempCar = JSON.parse(rawFile)
      this.make = tempCar.make
      this.year = tempCar.year
      this.speed = tempCar.speed
      this.light = tempCar.light
      this.parkingBrake = tempCar.parkingBrake
      this.color = tempCar.color
    }
}

module.exports = Car
