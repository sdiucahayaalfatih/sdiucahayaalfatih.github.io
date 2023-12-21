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
// pindah kelas
function togglePindahKelas() {
  var statuspendaftaran = document.getElementById("statuspendaftaran");
  var pindahkelas1 = document.querySelector(".pindahkelas1");

  if (statuspendaftaran.value === "Siswa Mutasi") {
    pindahkelas1.style.display = "block";
  } else {
    pindahkelas1.style.display = "none";
  }
}

const inputTanggalLahir = document.getElementById("tglsiswa");
const inputUmur = document.getElementById("umurs");

inputTanggalLahir.addEventListener("change", function () {
  const tanggalLahir = new Date(this.value);
  const hariIni = new Date();

  let tahun = hariIni.getFullYear() - tanggalLahir.getFullYear();
  let bulan = hariIni.getMonth() - tanggalLahir.getMonth();
  let hari = hariIni.getDate() - tanggalLahir.getDate();

  if (bulan < 0 || (bulan === 0 && hari < 0)) {
    tahun--;
    bulan = 12 + bulan;
  }

  if (hari < 0) {
    const bulanKemarin = new Date(hariIni.getFullYear(), hariIni.getMonth(), 0);
    hari = bulanKemarin.getDate() + hari;
    bulan--;
  }

  inputUmur.value = `${tahun} tahun, ${bulan} bulan, ${hari} hari`;
});

function populateSelectElement(url, selectElement, dataKey, valueKey) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var options = `<option>--Pilih--</option>`;
      data.forEach((element) => {
        options += `<option value="${element[valueKey]}" data-id="${element[dataKey]}">${element[valueKey]}</option>`;
      });
      selectElement.innerHTML = options;
    });
}

const provinsiSelect = document.getElementById("provsiswa");
const kotaSelect = document.getElementById("kotsiswa");
const kecamatanSelect = document.getElementById("kecsiswa");
const kelurahanSelect = document.getElementById("kelsiswa");
// Menonaktifkan kolom-kolom yang tidak bisa diisi pada awalnya
kotaSelect.disabled = true;
kecamatanSelect.disabled = true;
kelurahanSelect.disabled = true;

provinsiSelect.addEventListener("change", (e) => {
  const selectedProvinsi = e.target.value;
  const provinsiId = e.target.options[e.target.selectedIndex].dataset.id;
  const kotaUrl = `https://kanglerian.github.io/api-wilayah-indonesia/api/regencies/${provinsiId}.json`;

  populateSelectElement(kotaUrl, kotaSelect, "id", "name");
  // Mengaktifkan kolom Kabupaten/Kota setelah Provinsi dipilih
  kotaSelect.disabled = false;
  // Menonaktifkan kolom Kecamatan dan Kelurahan ketika Provinsi dipilih ulang
  kecamatanSelect.disabled = true;
  kelurahanSelect.disabled = true;

  // Mengosongkan pilihan di kolom Kecamatan dan Kelurahan
  kecamatanSelect.innerHTML = '<option value="">--Pilih--</option>';
  kelurahanSelect.innerHTML = '<option value="">--Pilih--</option>';
});

kotaSelect.addEventListener("change", (e) => {
  const selectedKota = e.target.value;
  const kotaId = e.target.options[e.target.selectedIndex].dataset.id;
  const kecamatanUrl = `https://kanglerian.github.io/api-wilayah-indonesia/api/districts/${kotaId}.json`;

  populateSelectElement(kecamatanUrl, kecamatanSelect, "id", "name");

  // Mengaktifkan kolom Kecamatan setelah Kabupaten/Kota dipilih
  kecamatanSelect.disabled = false;
  // Menonaktifkan kolom Kelurahan ketika Kabupaten dipilih ulang
  kelurahanSelect.disabled = true;

  // Mengosongkan pilihan di kolom Kelurahan
  kelurahanSelect.innerHTML = '<option value="">--Pilih--</option>';
});

kecamatanSelect.addEventListener("change", (e) => {
  const selectedKecamatan = e.target.value;
  const kecamatanId = e.target.options[e.target.selectedIndex].dataset.id;
  const kelurahanUrl = `https://kanglerian.github.io/api-wilayah-indonesia/api/villages/${kecamatanId}.json`;

  populateSelectElement(kelurahanUrl, kelurahanSelect, "id", "name");

  // Mengaktifkan kolom Kelurahan setelah Kecamatan dipilih
  kelurahanSelect.disabled = false;
});

// Populate Provinsi
populateSelectElement(
  "https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json",
  provinsiSelect,
  "id",
  "name"
);
