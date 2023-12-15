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

document.addEventListener("DOMContentLoaded", function () {
  const submenuItems = document.querySelectorAll(".has-submenu");

  submenuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const submenu = item.querySelector(".submenu");

      if (submenu) {
        const isActive = submenu.classList.contains("active");
        closeSubmenus();

        if (!isActive) {
          closeActiveMenus();
          item.classList.add("active");
          submenu.classList.add("active");
          event.preventDefault(); // Menghentikan perilaku default hanya saat membuka submenu
        } else {
          item.classList.remove("active");
          submenu.classList.remove("active");
        }
      }
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInside = document
      .getElementById("navbar")
      .contains(event.target);
    if (!isClickInside) {
      closeSubmenus();
    }
  });

  function closeSubmenus() {
    submenuItems.forEach((item) => {
      item.classList.remove("active");
      const submenu = item.querySelector(".submenu");
      if (submenu) {
        submenu.classList.remove("active");
      }
    });
  }

  function closeActiveMenus() {
    submenuItems.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        const submenu = item.querySelector(".submenu");
        if (submenu) {
          submenu.classList.remove("active");
        }
      }
    });
  }
});
