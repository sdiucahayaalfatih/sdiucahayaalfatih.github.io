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
      // Menampilkan modal
      modal.style.display = "block";

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

// Function to open WhatsApp chat
function openWhatsApp() {
  var phoneNumber = "6281293524242"; // Nomor telepon tujuan dengan kode negara (tanpa tanda plus)

  var message = "Assalamualaikum Miss/Mrs. Saya telah melakukan pendaftaran online, dan ini bukti transaksi yang telah saya lakukan."; // Isi pesan yang ingin dikirim

  // Buat URL untuk membuka WhatsApp dengan nomor yang ditentukan dan pesan
  var url =
    "https://api.whatsapp.com/send?phone=" +
    phoneNumber +
    "&text=" +
    encodeURIComponent(message);

  // Buka link pada tab/window baru
  window.open(url);
}

// Event listener untuk saat tombol ditekan
document.getElementById("closeBtn").addEventListener("click", function() {
  openWhatsApp();
});
// Function to open WhatsApp chat
function openWhatsApp() {
  var phoneNumber = "6281293524242"; // Nomor telepon tujuan dengan kode negara (tanpa tanda plus)

  var message = "Assalamualaikum Miss/Mrs. Saya ingin bertanya Seputar Pembayaran?"; // Isi pesan yang ingin dikirim

  // Buat URL untuk membuka WhatsApp dengan nomor yang ditentukan dan pesan
  var url =
    "https://api.whatsapp.com/send?phone=" +
    phoneNumber +
    "&text=" +
    encodeURIComponent(message);

  // Buka link pada tab/window baru
  window.open(url);
}

// Event listener untuk saat tombol ditekan
document.getElementById("admKam").addEventListener("click", function() {
  openWhatsApp();
});

