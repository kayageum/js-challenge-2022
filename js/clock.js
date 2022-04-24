const clock = document.querySelector("#clock");
const date = document.querySelector("#date");
const week = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
let ampm = "";

function changeAMPM(hours) {
  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  }

  return hours;
}

function displayClock() {
  const today = new Date();

  const fullYear = today.getFullYear();
  const month = String(today.getMonth()).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dday = week[today.getDay()];

  let hours = today.getHours();
  hours = changeAMPM(hours);
  hours = String(hours).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");

  clock.innerText = `${ampm} ${hours}:${minutes}:${seconds}`;
  date.innerText = `${fullYear}/${month}/${day} ${dday}`;
}

displayClock();
setInterval(displayClock, 1000);
