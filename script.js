document.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().catch(() => {
      console.log("Auto-play blocked by browser.");
    });
  }
}, { once: true });

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image11.jpg",
  "images/image12.jpg",
  "images/image13.jpg",
  "images/image14.jpg",
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
