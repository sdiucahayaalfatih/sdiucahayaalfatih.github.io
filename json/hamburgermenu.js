// Fungsi untuk menampilkan atau menyembunyikan menu
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

// Fungsi untuk menutup menu
function closeNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.remove("active");
  const menuToggle = document.getElementById("menu-bar");
  menuToggle.checked = false;
}

// Tambahkan event listener untuk .menutoogle
const menuToogleButton = document.querySelector(".menutoogle");

menuToogleButton.addEventListener("click", function () {
  toggleMenu();
});

// Tambahkan event listener untuk .close-navbtn
const closeNavButton = document.querySelector(".close-navbtn");

closeNavButton.addEventListener("click", function () {
  closeNavbar();
});
