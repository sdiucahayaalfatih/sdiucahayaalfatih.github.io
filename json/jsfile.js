const myslider = document.querySelectorAll(".mysliderr"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslider.length; i++) {
    myslider[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslider.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslider.length;
  }
  myslider[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

const slider = document.getElementById("navbar-slider");
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener("touchstart", function (event) {
  touchStartX = event.touches[0].clientX;
});

slider.addEventListener("touchmove", function (event) {
  touchEndX = event.touches[0].clientX;
});

slider.addEventListener("touchend", function () {
  if (touchStartX - touchEndX > 50) {
    plusSlides(1); // Geser slide ke kanan
  } else if (touchEndX - touchStartX > 50) {
    plusSlides(-1); // Geser slide ke kiri
  }
});
window.addEventListener("scroll", function () {
  var floatElement = document.querySelector(".float");
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollPosition = window.pageYOffset;

  if (scrollPosition + windowHeight >= documentHeight) {
    floatElement.style.display = "none";
  } else {
    floatElement.style.display = "block";
  }
});
// hamburger menu
// Ubah fungsi toggleMenu() agar sesuai dengan aturan tampilan navbar Anda
function toggleMenu() {
  const menuToggle = document.getElementById("menu-bar");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

function togglePindahKelas() {
  var statuspendaftaran = document.getElementById("statuspendaftaran");
  var pindahkelas1 = document.querySelector(".pindahkelas1");

  if (statuspendaftaran.value === "Siswa Mutasi") {
    pindahkelas1.style.display = "block";
  } else {
    pindahkelas1.style.display = "none";
  }
}
