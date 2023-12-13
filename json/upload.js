const scriptURL =
  "https://script.google.com/macros/s/AKfycby8Tl3NvGr2vIPSadX6HS-rq5nEDPFlHq3dKJ3gqA4zQc49iIN1nbhamj6fV88RzJUz/exec";
const form = document.forms["form"];
const buttonSubmit = document.querySelector(".button-submit button");
const buttonSubmit2 = document.querySelector(".button-submit2 button");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Menampilkan tombol submit2
  buttonSubmit2.parentElement.style.display = "block";

  // Menyembunyikan tombol submit
  buttonSubmit.parentElement.style.display = "none";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      // Menampilkan modal dengan mengatur display menjadi flex
      modal.style.display = "flex";

      // Mengembalikan tampilan tombol submit awal
      buttonSubmit2.parentElement.style.display = "none";
      buttonSubmit.parentElement.style.display = "block";

      // Reset form
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // Mengembalikan tampilan tombol submit awal
      buttonSubmit2.parentElement.style.display = "none";
      buttonSubmit.parentElement.style.display = "block";
    });
});

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function kirimBuktiPembayaran() {
  window.open("https://wa.me/6281293524242", "_blank"); // Mengarahkan ke WhatsApp dengan nomor tertentu
}

function chatLangsungAdministrasi() {
  window.open("https://wa.me/6281293524242", "_blank"); // Mengarahkan ke WhatsApp dengan nomor tertentu
  // Atau Anda dapat menggunakan metode lain untuk mengirim pesan atau melakukan tindakan tertentu
}
