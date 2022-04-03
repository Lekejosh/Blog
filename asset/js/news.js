//Variables

const generalBtn = document.getElementById("general");
const sportsBtn = document.getElementById("sports");
const stocksBtn = document.getElementById("stocks");
const cryptoBtn = document.getElementById("crypto");
const weatherBtn = document.getElementById("weather");

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

generalBtn.addEventListener("click", function () {});

sportsBtn.addEventListener("click", function () {});

stocksBtn.addEventListener("click", function () {});

cryptoBtn.addEventListener("click", function () {});

weatherBtn.addEventListener("click", function () {});
