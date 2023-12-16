// Ambil semua elemen yang akan diberi animasi
const elements = document.querySelectorAll(".animate-on-scroll");

// Fungsi untuk memeriksa apakah elemen masuk ke dalam viewport
function checkElements() {
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight * 0.75) {
      element.classList.add("show");
    }
  });
}

// Panggil fungsi ketika halaman di-scroll
window.addEventListener("scroll", checkElements);

// Panggil fungsi saat halaman dimuat (untuk menampilkan elemen yang mungkin sudah masuk dalam viewport)
window.addEventListener("load", checkElements);
