const modalWrapper = document.querySelector(".bacground-wrapper");
const carousel = document.querySelector(".slide-image");
const images = document.querySelectorAll(".slide-image img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const closeButton = document.getElementById("close");

let imageIndex = 0;
let intervalId;

const autoSlide = () => {
  intervalId = setInterval(() => slideImage(true), 6000);
};

const slideImage = (next) => {
  if (next) {
    imageIndex = (imageIndex + 1) % images.length;
  } else {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
  }
  carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
  clearInterval(intervalId);
  if (e.target.id === "next") {
    slideImage(true);
  } else {
    slideImage(false);
  }
  autoSlide();
};

prevButton.addEventListener("click", updateClick);
nextButton.addEventListener("click", updateClick);

modalWrapper.addEventListener("mouseover", () => clearInterval(intervalId));
modalWrapper.addEventListener("mouseleave", autoSlide);

closeButton.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});

autoSlide();
