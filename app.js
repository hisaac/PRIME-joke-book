var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var index = require('./routes/index');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];

app.get('/jokes', function(req, res){
  res.send(jokes);
});

app.post('/jokes', function(req, res){
  jokes.push(req.body);
  res.sendStatus(201);
});

app.use('/', index);

app.listen(process.env.PORT || port)
console.log("Listening on port: ", port);
