const imgs = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
];

const selectedImg = imgs[Math.floor(Math.random() * imgs.length)];

document.body.style.backgroundImage = `url(img/${selectedImg})`;
