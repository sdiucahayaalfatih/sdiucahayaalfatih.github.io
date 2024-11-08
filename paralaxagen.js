// Fungsi untuk mengecek apakah elemen masuk ke dalam viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi untuk menambah kelas 'animate' ke elemen saat masuk ke dalam viewport
function addAnimationToElements() {
  var agendaItems = document.querySelectorAll(".agenda-item");
  agendaItems.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.classList.add("animate");
    }
  });
}

// Event listener untuk menambah kelas 'animate' saat discroll
window.addEventListener("scroll", function () {
  addAnimationToElements();
});

// Panggil fungsi pada saat halaman dimuat
window.addEventListener("load", function () {
  addAnimationToElements();
});
