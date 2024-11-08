// Fungsi untuk mengubah warna input menjadi abu-abu
function ubahWarnaInput() {
  var inputs = document.querySelectorAll("input"); // Mengambil semua elemen input
  inputs.forEach(function (input) {
    if (input.value !== "") {
      // Jika input tidak kosong
      input.classList.add("input-terisi2"); // Tambahkan class "input-terisi2"
    } else {
      input.classList.remove("input-terisi2"); // Hapus class "input-terisi2"
    }
  });

  var selects = document.querySelectorAll("select"); // Mengambil semua elemen select
  selects.forEach(function (select) {
    if (select.value !== "") {
      // Jika select tidak kosong
      select.classList.add("input-terisi"); // Tambahkan class "input-terisi"
    } else {
      select.classList.remove("input-terisi"); // Hapus class "input-terisi"
    }
  });
}

// Panggil fungsi ubahWarnaInput saat halaman dimuat
window.addEventListener("DOMContentLoaded", function () {
  ubahWarnaInput();

  // Panggil fungsi ubahWarnaInput saat nilai input berubah
  var inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("input", ubahWarnaInput);
  });

  var selects = document.querySelectorAll("select");
  selects.forEach(function (select) {
    select.addEventListener("change", ubahWarnaInput);
  });
});
