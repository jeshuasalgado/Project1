var titleFormEl = document.querySelector("#title-form");
var movieInputEl = document.querySelector("#moviename");
var repoContainerEl = document.querySelector("#title-container");
var movieSearchTerm = document.querySelector("#movie-search-term");

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
    
    var displayMovies = function(movieSearchTerm) {
      // check if api returned any repos
      if (repos.length === 0) {
        repoContainerEl.textContent = "";
        return;
      }
    
      movieSearchTerm.textContent = movieSearchTerm;
    
      // loop over repos
      for (var i = 0; i < repos.length; i++) {
        // format repo name
        var movieInputEl = repoSearchTerm[i]
        // create a link for each repo
        var repoEl = document.createElement("a");
        repoEl.classList = "list-item flex-row justify-space-between align-center";
        repoEl.setAttribute("href", moviename);

        var titleForumEl = document.createElement("span");
        titleEl.textContent = moviename;
};

// add event listeners to forms
titleFormEl.addEventListener("submit", formSubmitHandler
