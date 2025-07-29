document.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().catch(() => {
      console.log("Auto-play blocked by browser.");
    });
  }
}, { once: true });

function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}


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
  "images/image15.jpg",
  "images/image16.jpg",
  "images/image17.jpg",
  "images/image18.jpg",
  "images/image19.jpg",
  "images/image20.jpg",
  "images/image21.jpg",
  "images/image22.jpg",
  "images/image23.jpg",
  "images/image24.jpg",
  "images/image25.jpg",
  "images/image26.jpg",
  "images/image27.jpg",
  "images/image28.jpg",
  "images/image29.jpg",
  "images/image30.jpg",
  "images/image31.jpg",
  "images/image32.jpg",
  "images/image33.jpg",
  "images/image34.jpg",
  "images/image35.jpg",
  "images/image36.jpg",
  "images/image37.jpg",
  "images/image38.jpg",
  "images/image39.jpg",
  "images/image40.jpg",
  "images/image41.jpg",
  "images/image42.jpg",
  "images/image43.jpg",
  "images/image44.jpg",
  "images/image45.jpg",
  "images/image46.jpg",
  "images/image47.jpg",
  "images/image48.jpg",
  "images/image49.jpg",
  "images/image50.jpg",
  "images/image51.jpg",
  "images/image52.jpg",
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
