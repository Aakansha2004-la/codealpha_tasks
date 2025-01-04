// script.js

// Updated list of images
const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg"
  ];
  
  // Open Lightbox
  function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightbox.style.display = "flex";
    lightboxImage.src = images[index];
  }
  
  // Close Lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  
  