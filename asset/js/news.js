//Variables

const generalBtn = document.getElementById("general");
const sportsBtn = document.getElementById("sports");
const businessBtn = document.getElementById("business");
// const cryptoBtn = document.getElementById("crypto");
const technologyBtn = document.getElementById("technology");

const searchBtn = document.getElementById("search-icon");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");

//Array
var newsDataArr = [];

//Apis
const API_KEY = "b6a81689d89a4cd2bb745925b71f71f5";
const HEADLINE_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const SPORT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=";
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

generalBtn.addEventListener("click", function () {
  fetchGeneralNews();
});

sportsBtn.addEventListener("click", function () {
  fetchSportsNews();
});

businessBtn.addEventListener("click", function () {
  fetchBusinessNews();
});

technologyBtn.addEventListener("click", function () {
  fetchTechnologyNews();
});

searchBtn.addEventListener("click", function () {
  fetchQueryNews();
});

const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson;
  } else {
    //Handle Errors
  }

  displayNews();
};

const fetchsportsNews = async () => {
  const response = await fetch(SPORTS_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson;
  } else {
    //Handle Errors
  }

  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson;
  } else {
    //Handle Errors
  }

  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson;
  } else {
    //Handle Errors
  }

  displayNews();
};

const fetchQueryNews = async () => {
  if (newsQuery.value == null) return;

  const response = await fetch(
    SEARCH_NEWS + newsQuery.value + "&apiKey=" + API_KEY
  );
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //error Errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

function displayNews() {
  newsdetails.innerHTML = "";

  if (newsDataArr.lenght == 0) {
    newsdetails.innerHTML = "<h5> No Data Found.</h5>";
    return;
  }

  newsDataArr.forEach((news) => {
    var col = document.createElement("div");
    col.className = "col";

    var image = document.createElement("article-image");
    image.setAttribute("height", "matchparnt");
  });
}
