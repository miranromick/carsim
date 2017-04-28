var express = require('express')

// requiring our new body-parser
var bodyParser = require('body-parser')
var fs = require('fs')
var Car = require('./car')


var app = express()
app.set('view engine', 'ejs')

//let the app know we want to use body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (request, response) {
  response.render('welcome')
});


app.post('/status', function(request, response){

  //because we're using body-parser, incomming form data
  //is found on request.body
  let responses = request.body
  let carStats = request.body
  let newMake = request.body.make
  let newYear = request.body.year
  let newColor = request.body.color
  let newSpeed = request.body.speed
  let newLight = request.body.light
  let newParkingBrake = request.body.parkingBrake
  

  let newCar = new Car(newMake, newYear, newColor)
  newCar.carMakes()
  newCar.save()


  //In this case, we're just turning around and dispaying the user input
  response.render('status', { 'car': newCar } )
});


app.get('/accelerate', function(request,response){
  let newCar = new Car('a','a')
  newCar.load()
  newCar.accelerate()
  newCar.save()
  response.render('status', {'car': newCar} )
})
app.get('/brake', function(request,response){
  let newCar = new Car('a','a')
  newCar.load()
  newCar.brake()
  newCar.save()
  response.render('status', {'car': newCar} )
})
app.get('/light', function(request,response){
  let newCar = new Car('a','a')
  newCar.load()
  newCar.lights()
  newCar.save()
  response.render('status', {'car': newCar} )
})
app.get('/parkingBrake', function(request,response){
  let newCar = new Car('a','a')
  newCar.load()
  newCar.parkingBrakes()
  newCar.save()
  response.render('status', {'car': newCar} )
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
