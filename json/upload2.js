const scriptURL = 'https://script.google.com/macros/s/AKfycbzWfGYBhxd8EeQLUiBio21wprB6YFfIzKuT8gy910X6YfJVKHkJi6Utl05ueNjUniqK/exec';
const form = document.getElementById("form");
const buttonSubmit = document.getElementById("submitButton");
const buttonSubmit2 = document.getElementById("loading-container");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Menampilkan loading dan menyembunyikan tombol submit
  buttonSubmit2.style.display = "block";
  buttonSubmit.style.display = "none";

  // Mengirim form ke Google Apps Script
  fetch(scriptURL, { method: "POST", body: new FormData(form), mode: "no-cors" })
    .then(response => {
      console.log("Success!", response);
      // Menampilkan modal konfirmasi
      modal.style.display = "block";
      // Mengembalikan tampilan tombol submit awal
      buttonSubmit2.style.display = "none";
      buttonSubmit.style.display = "block";
      form.reset(); // Reset form setelah submit
    })
    .catch(error => {
      console.error("Error!", error.message);
      // Mengembalikan tampilan tombol submit awal jika gagal
      buttonSubmit2.style.display = "none";
      buttonSubmit.style.display = "block";
    });
});

// Menutup modal ketika tombol close diklik
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
