const scriptURL =
  "https://script.google.com/macros/s/AKfycbzWfGYBhxd8EeQLUiBio21wprB6YFfIzKuT8gy910X6YfJVKHkJi6Utl05ueNjUniqK/exec";
const form = document.getElementById("form");
const buttonSubmit = document.getElementById("submitButton");
const buttonSubmit2 = document.getElementById("loading-container");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Menampilkan tombol submit2
  buttonSubmit2.style.display = "block";

  // Menyembunyikan tombol submit
  buttonSubmit.style.display = "none";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);

      // Menampilkan modal
      modal.style.display = "block";

      // Mengembalikan tampilan tombol submit awal
      buttonSubmit2.style.display = "none";
      buttonSubmit.style.display = "block";

      // Reset form
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);

      // Mengembalikan tampilan tombol submit awal
      buttonSubmit2.style.display = "none";
      buttonSubmit.style.display = "block";
    });
});

// Menutup modal ketika tombol close diklik
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
