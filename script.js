const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image4.png",
  "images/image5.png",
  "images/image6.png",
  "images/image7.png",
  "images/image8.png",
  "images/image9.png",
  "images/image10.png",
  "images/image11.png",
  "images/image12.png",
  "images/image13.png",
  "images/image14.png",
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
