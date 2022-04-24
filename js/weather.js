const API_KEY = "aa32a1d1971044e1d4a33013428bd883";

function onGoeOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#today-weather");
      const city = document.querySelector("#city");
      const weatherIcon = document.querySelector("#icon");
      weather.innerText = `Weateher: ${data.weather[0].main}\n Temperature: ${data.main.temp}℃ (${data.main.temp_min}℃~${data.main.temp_max}℃)`;
      city.innerText = `City: ${data.name}`;
      const iconAddr = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherIcon.src = iconAddr;
    });
}

function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGoeOk, onGeoError);
