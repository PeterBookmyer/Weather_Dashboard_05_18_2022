const inputEl = $("#myinput");
const currentWeatherEl = $("#currentWeather");
const pastCity = JSON.parse(localStorage.getItem("userCity"))
  ? JSON.parse(localStorage.getItem("userCity"))
  : [];
const extForecast = $("#extForecast");

//function to get todays date and format
const today = new Date();
let todaysDate =
  today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

//function for API call
function getWeather(lat, lon) {
  let requestUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=minutely,hourly,alerts&units=imperial&appid=211f702161aca440a9963b1e1017de20";
  $.ajax({
    url: requestUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    currentWeather(response.current);
    getExtendedWeather(response.daily);
  });
}

//function to get the current weather, create elements for weather data and append to DOM
function currentWeather(weather) {
  currentWeatherEl.html("");
  let temp = document.createElement("p");
  temp.textContent = "Temperature: " + weather.temp + " degrees F";
  let wind = document.createElement("p");
  wind.textContent = "WindSpeed: " + weather.wind_speed + " mph";
  let humidity = document.createElement("p");
  humidity.textContent = "Humidity: " + weather.humidity + " %";
  currentWeatherEl.append(temp, wind, humidity);
}

//function to get future weather including 5 day forecast...create els and append
function getExtendedWeather(daily) {
  extForecast.html("");
  for (let i = 1; i < 6; i++) {
    let card = document.createElement("div");
    let header = document.createElement("div");
    let temp = document.createElement("p");
    let wind = document.createElement("p");
    let humidity = document.createElement("p");
    card.setAttribute("class", "card");
    card.setAttribute("id", "styleToPage");
    card.setAttribute("class", "container-fluid");
    header.setAttribute("class", "card-header");
    header.textContent = "Ext Forecast";
    temp.textContent = "tempurature:" + daily[i].temp.day;
    wind.textContent = "wind:" + daily[i].wind_speed + "mph";
    humidity.textContent = "humidity:" + daily[i].humidity + "%";
    card.append(header, temp, wind, humidity);
    extForecast.append(card);
  }
}
//function for geomapping lat lon to city name entered by user
function geomapping(cityname) {
  var requestUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    cityname +
    "&limit=1&appid=211f702161aca440a9963b1e1017de20";
  $.ajax({
    url: requestUrl,
    method: "GET",
  }).then(function (response) {
    var lat = response[0].lat;
    var lon = response[0].lon;
    getWeather(lat, lon);
  });
}
$("#todaysDate").text(todaysDate);
console.log(todaysDate);

//kicks everything off based on click event with search button
$("#searchButton").click(function (event) {
  event.preventDefault();
  let city = $("#myinput").val();
  pastCity.push(city);
  localStorage.setItem("userCity", JSON.stringify(pastCity));
  let pastCityEl = $("#pastCity");
  let pastCityTxt = document.createElement("button");
  pastCityTxt.innerHTML = pastCity.value;
  pastCityEl.append(city);
  geomapping(city);
});
