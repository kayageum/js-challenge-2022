const clock = document.querySelector("#clock");
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
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dday = week[date.getDay()];
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  let hours = date.getHours();

  hours = changeAMPM(hours);

  hours = String(hours).padStart(2, "0");

  clock.innerText = `${fullYear}/${month}/${day} ${dday}\n${ampm} ${hours}:${minutes}:${seconds}`;
}

displayClock();
setInterval(displayClock, 1000);
