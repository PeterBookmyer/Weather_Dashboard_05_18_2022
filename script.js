const inputEl = $("#myinput");
const currentWeatherEl = $("#currentWeather");
const pastCity = JSON.parse(localStorage.getItem("userCity"))
  ? JSON.parse(localStorage.getItem("userCity"))
  : [];
const extForecast = $("#extForecast");
const today = new Date();
let todaysdate =
  today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();

function weatherDay(lat, lon) {
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
    weatherDay(lat, lon);
  });
}
$("#todaysDate").text(todaysdate);

function currentWeather(weather) {
  console.log(weather.temp);
  currentWeatherEl.html("");
  var temp = document.createElement("p");
  temp.textContent = "Temperature: " + weather.temp + " degrees F";
  var wind = document.createElement("p");
  wind.textContent = "WindSpeed: " + weather.wind_speed + " mph";
  var humidity = document.createElement("p");
  humidity.textContent = "Humidity: " + weather.humidity + " %";
  currentWeatherEl.append(temp, wind, humidity);
}

function getExtendedWeather(daily) {
  console.log(daily);
  extForecast.html("");
  for (let i = 1; i < 6; i++) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", "styleToPage");
    card.setAttribute("class", "container-fluid");
    var header = document.createElement("div");
    header.setAttribute("class", "card-header");
    header.textContent = "Ext Forecast";
    var temp = document.createElement("p");
    temp.textContent = "tempurature:" + daily[i].temp.day;
    var wind = document.createElement("p");
    wind.textContent = "wind:" + daily[i].wind_speed + "mph";
    var humidity = document.createElement("p");
    humidity.textContent = "humidity:" + daily[i].humidity + "%";
    card.append(header, temp, wind, humidity);
    extForecast.append(card);
  }
}

$("#mybutton").click(function (event) {
  event.preventDefault();
  var city = $("#myinput").val();
  pastCity.push(city);
  localStorage.setItem("userCity", JSON.stringify(pastCity));
  var pastCityEl = $("#pastCity");
  var pastCityTxt = document.createElement("button");
  pastCityTxt.innerHTML = pastCity.value;
  pastCityEl.append(city);
  geomapping(city);
});
