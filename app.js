var express = require('express')

// requiring our new body-parser
var bodyParser = require('body-parser')

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
  console.log(response)

  //In this case, we're just turning around and dispaying the user input
  response.render('status', responses )
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
