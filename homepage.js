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
    getUserRepos(moviename);

    // clear old content
    repoContainerEl.textContent = "";
    movieInputEl.value = "";
  } else {
    alert("Please enter a Movie Name");
  }
};

var getMovie = function(user) {
  // format the github api url
  var apiUrl = "http://www.omdbapi.com/?apikey=3870df72&" + user;


  //running api response to url
  fetch(apiUrl)
    .then(function(response) {
          if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("connecting omdb");
    });
};

var displayRepos = function(repos, searchTerm) {
  // check if api returned any repos
  if (repos.length === 0) {
    repoContainerEl.textContent = "No repositories found.";
    return;
  }

  repoSearchTerm.textContent = searchTerm;

 
// add event listeners to forms
userFormEl.addEventListener("submit", formSubmitHandler);
