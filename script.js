const genWeatherEl = $("#genWeatherEl");
const day1El = $("#day1El");
const day2El = $("#day2El");
const day3El = $("#day3El");
const day4El = $("#day4El");
const day5El = $("#day5El");
const btnDenver = $('#btnDenver');
const btnNewYork = $("#btnNewYork");
const btnChicago = $("#btnChicago");
const btnLa = $("#btnLa");
const btnDallas = $("#btnDallas")
const btnDetroit = $("#btnDetroi");
const btnSeattle = $("#btnSeattle");
const btnMiami = $("#btnMiami");
const requestUrl = "http://api.weatherapi.com/v1"


// btnDenver.on('click', function () {
//     console.log(denverData)
// });

function getWeatherDenver (denverData) {
    $.ajax({
    processData: false,
    url: (requestUrl),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "7c9ac1de3ca642d080e50650221905",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        lat: 39.7392,
        lon: 104.9903,

      },
    }),
  })

  .then((data) => btnDenver.on('click', denverData))
  .catch((err) => console.log(err));
};


function getWeatherNewYork (newYorkData) {
    $.ajax({
    processData: false,
    url: (requestUrl),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        lat: 40.7128,
        lon: 74.0060,

      },
    }),
  })

  .then((data) => console.log(newYorkdata))
  .catch((err) => console.log(err));
};

function getWeatherChicago (chiData) {
    $.ajax({
    processData: false,
    url: (requestUrl),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        lat: 41.8781,
        lon: 87.6298,

      },
    }),
  })

  .then((data) => console.log(chiData))
  .catch((err) => console.log(err));
};

function getWeatherLa (laData) {
    $.ajax({
    processData: false,
    url: (requestUrl),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        lat: 34.0522,
        lon: 118.2437,

      },
    }),
  })

  .then((data) => console.log(laData))
  .catch((err) => console.log(err));
};

function getWeatherDallas (dallasData) {
    $.ajax({
    processData: false,
    url: (requestUrl),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        lat: 32.7767,
        lon: 96.7970,

      },
    }),
  })

  .then((data) => console.log(dallasData))
  .catch((err) => console.log(err));
};

function getWeatherDetroit (detroitData) {
    $.ajax({
    processData: false,
    url: (requestUrl),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        lat: 42.3314,
        lon: 83.0458,

      },
    }),
  })

  .then((data) => console.log(detroitData))
  .catch((err) => console.log(err));
};

function getWeatherSeattle (seattleData) {
    $.ajax({
    processData: false,
    url: (requestUrl),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        lat: 47.6062,
        lon: 122.3321,

      },
    }),
  })

  .then((data) => console.log(seattleData))
  .catch((err) => console.log(err));
};

function getWeatherMiami (miamiData) {
    $.ajax({
    processData: false,
    url: (requestUrl),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        lat: 25.7617,
        lon: 80.1918,

      },
    }),
  })

  .then((data) => console.log(miamiData))
  .catch((err) => console.log(err));
};

