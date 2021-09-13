var titleFormEl = document.querySelector("#title-form");
var movieInputEl = document.querySelector("#moviename");
var repoContainerEl = document.querySelector("#title-container");
var repoSearchTerm = document.querySelector("#movie-search-term");

//refresh stoppage
var formSubmitHandler = function(event) {
  event.preventDefault();

  //name of user movie input
  var moviename = movieInputEl.value.trim();

  if (moviename) {
    getMovie(moviename);

    // clear old content
    repoContainerEl.textContent = "";
    movieInputEl.value = "";
  } else {
    alert("Please enter a Movie Name");
  }
};

var getMovie = function(movie) {
  // format the github api url
  var apiUrl = "http://www.omdbapi.com/?t="+movie+"&apikey=bb0900b7";


  //running api response to url
  fetch(apiUrl)
    .then(function(response) {
          if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("connecting omdb");
    });
};

// add event listeners to forms
titleFormEl.addEventListener("submit", formSubmitHandler);
