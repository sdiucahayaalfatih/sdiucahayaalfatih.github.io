// Fungsi untuk mengubah warna input menjadi abu-abu
function ubahWarnaInput() {
  var inputs = document.querySelectorAll("input"); // Mengambil semua elemen input
  inputs.forEach(function (input) {
    if (input.value !== "") {
      // Jika input tidak kosong
      input.classList.add("input-terisi"); // Tambahkan class "input-terisi"
    } else {
      input.classList.remove("input-terisi"); // Hapus class "input-terisi"
    }
  });
}

// Panggil fungsi ubahWarnaInput saat halaman dimuat
window.addEventListener("DOMContentLoaded", ubahWarnaInput);

// Panggil fungsi ubahWarnaInput saat nilai input berubah
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("input", ubahWarnaInput);
});
