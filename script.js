const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  // add more image paths
];

let index = 0;
const imageElement = document.getElementById("image");

function nextImage() {
  index = (index + 1) % images.length;
  imageElement.src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  imageElement.src = images[index];
}

function closeViewer() {
  document.querySelector(".container").style.display = "none";
}
