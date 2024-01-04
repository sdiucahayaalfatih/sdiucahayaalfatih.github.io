const modalWrapper = document.querySelector(".bacground-wrapper");
const carousel = document.querySelector(".slide-image");
const images = document.querySelectorAll(".slide-image img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const closeButton = document.getElementById("close");

let imageIndex = 0;
let intervalId;
let isDragging = false;
let startPosX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

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

const startDrag = (e) => {
  if (!isDragging) {
    isDragging = true;
    startPosX = e.clientX || e.touches[0].clientX;
    prevTranslate = currentTranslate;
  }
};

const drag = (e) => {
  if (isDragging) {
    const currentPosX = e.clientX || e.touches[0].clientX;
    const diffX = currentPosX - startPosX;
    currentTranslate = prevTranslate + diffX;
    carousel.style.transform = `translateX(${currentTranslate}px)`;
  }
};

const endDrag = () => {
  isDragging = false;
  const threshold = carousel.offsetWidth / 4; // Adjust this value to change drag sensitivity

  if (Math.abs(currentTranslate - prevTranslate) > threshold) {
    if (currentTranslate < prevTranslate) {
      slideImage(true);
    } else {
      slideImage(false);
    }
  }

  carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
};

prevButton.addEventListener("click", () => slideImage(false));
nextButton.addEventListener("click", () => slideImage(true));

modalWrapper.addEventListener("mouseover", () => clearInterval(intervalId));
modalWrapper.addEventListener("mouseleave", autoSlide);

closeButton.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});

carousel.addEventListener("mousedown", startDrag);
carousel.addEventListener("touchstart", startDrag);

carousel.addEventListener("mousemove", drag);
carousel.addEventListener("touchmove", drag);

carousel.addEventListener("mouseup", endDrag);
carousel.addEventListener("touchend", endDrag);

autoSlide();
