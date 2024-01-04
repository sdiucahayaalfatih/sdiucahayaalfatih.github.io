let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next-link");
let prev = document.getElementById("prev-link");
let dots = document.querySelectorAll(".slider .dots .dot-item"); // Menggunakan class dot-item

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function (event) {
  event.preventDefault();
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function (event) {
  event.preventDefault();
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 6000);

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(
    ".slider .dots .dot-item.active"
  );
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 6000);
}

dots.forEach((dot, key) => {
  dot.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});

window.onresize = function (event) {
  reloadSlider();
};
window.addEventListener("scroll", function () {
  var floatElement = document.querySelector(".float");
  var scrollToTopBtn = document.querySelector(".scroll-to-top");
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollPosition = window.pageYOffset;

  if (scrollPosition + windowHeight >= documentHeight) {
    floatElement.classList.add("end-of-page");
    scrollToTopBtn.style.display = "block";
  } else {
    floatElement.classList.remove("end-of-page");
    scrollToTopBtn.style.display = "none";
  }
});

// fungsi untuk sentuhan
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener("touchstart", function (event) {
  touchStartX = event.touches[0].clientX;
});

slider.addEventListener("touchmove", function (event) {
  // Menghentikan default action agar geser halaman tidak terjadi
  event.preventDefault();
});

slider.addEventListener("touchend", function (event) {
  touchEndX = event.changedTouches[0].clientX;
  handleGesture();
});

function handleGesture() {
  const difference = touchStartX - touchEndX;
  if (Math.abs(difference) > 50) {
    // Mengatur threshold untuk dianggap sebagai geser
    if (difference > 0) {
      // Geser ke kiri
      active = active + 1 <= lengthItems ? active + 1 : 0;
    } else {
      // Geser ke kanan
      active = active - 1 >= 0 ? active - 1 : lengthItems;
    }
    reloadSlider();
  }
}

// Fungsi untuk melakukan scroll ke atas ketika tombol "Scroll to Top" diklik
document
  .querySelector(".scroll-to-top")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
