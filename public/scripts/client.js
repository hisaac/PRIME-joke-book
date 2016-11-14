$(document).ready(function () {
  // gets initial joke database
  getJokes();

  // event listener for the submit button
  $('button').on('click', function(){
    event.preventDefault();

    // gets information from the form, and sends it to the server
    addToDb(getUserJoke());
  });
});

// gets initial jokes database
function getJokes(){
  var jokes = {};
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(data){
      appendJokes(data);
    },
    error: function(error){
      console.log('get request failed with error: ', error);
    }
  });
}

// appends joke database to the DOM
function appendJokes(jokes){
  $('#jokesContainer').empty();
  jokes.forEach(function(joke){
    $('#jokesContainer').append(
      '<p>Question: ' + joke.jokeQuestion + '</p>' +
      '<p>Punchline: ' + joke.punchLine + '</p>' +
      '<p>Author: ' + joke.whoseJoke + '</p>' +
      '<hr>'
    );
  });
}

// gets info entered into form
function getUserJoke(operation){
  var jokeToAdd = {};

  $.each($('form').serializeArray(), function(i, field){
    jokeToAdd[field.name] = field.value;
  });

  return jokeToAdd;
}

// sends joke data to the server
function addToDb(userJokeInfo){
  $.ajax({
    type: 'POST',
    url: '/jokes',
    data: userJokeInfo,
    success: getJokes,
    error: function(error){
      console.log('post request failed with error: ', error);
    }
  });
}
