const dayForecastEl = $("#dayForecastEl");
const day1El = $("#day1El");
const day2El = $("#day2El");
const day3El = $("#day3El");
const day4El = $("#day4El");
const day5El = $("#day5El");

$(".btnGroup").on("click", function (event) {
  console.log(event.target.innerText);
  getWeather(event.target.innerText);
});

function getWeather(cityName) {
  $.ajax({
    processData: false,
    url: `https://api.weatherapi.com/v1/current.json?key=7c9ac1de3ca642d080e50650221905&q=${cityName}&aqi=no`,
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      $("#dayForecastEl").after("Current Temp:", " ", result.current.temp_f);
      $("#dayForecastEl").after(" ", result.current.condition.text);
    },
  });
}
