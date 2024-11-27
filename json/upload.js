const scriptURL = "https://script.google.com/macros/s/AKfycby8Tl3NvGr2vIPSadX6HS-rq5nEDPFlHq3dKJ3gqA4zQc49iIN1nbhamj6fV88RzJUz/exec";
const form = document.forms["form"];
const buttonSubmit = document.querySelector(".button-submit button");
const buttonSubmit2 = document.querySelector(".button-submit2 button");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Mengatur nilai default pada sts_pembayaran
  const stsPembayaranInput = document.getElementById("sts_pemb");
  stsPembayaranInput.value = "Menunggu Pembayaran"; // Set default value

  // Menambahkan rumus '=ROW()-2' ke input nomor yang disembunyikan
  const nomorInput = document.getElementById("nomorurut");
  nomorInput.value = "=ROW()-2";  // Mengatur rumus pada kolom nomor

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
  window.open("https://wa.me/6288212428738", "_blank"); // Mengarahkan ke WhatsApp dengan nomor tertentu
}

function chatLangsungAdministrasi() {
  window.open("https://wa.me/6288212428738", "_blank"); // Mengarahkan ke WhatsApp dengan nomor tertentu
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
  const batasTanggal = new Date("2025-07-01"); // Tanggal batas yang diinginkan

  let umur;
  if (tanggalLahir.getTime() > batasTanggal.getTime()) {
    umur = "Belum lahir atau tanggal setelah batas tanggal";
  } else {
    let tahun = batasTanggal.getFullYear() - tanggalLahir.getFullYear();
    let bulan = batasTanggal.getMonth() - tanggalLahir.getMonth();
    let hari = batasTanggal.getDate() - tanggalLahir.getDate();

    if (bulan < 0 || (bulan === 0 && hari < 0)) {
      tahun--;
      bulan = 12 + bulan;
    }

    if (hari < 0) {
      const bulanKemarin = new Date(
        batasTanggal.getFullYear(),
        batasTanggal.getMonth(),
        0
      );
      hari = bulanKemarin.getDate() + hari;
      bulan--;
    }

    umur = `${tahun} tahun, ${bulan} bulan, ${hari} hari`;
  }

  inputUmur.value = umur;
});


document.addEventListener("DOMContentLoaded", function () {
  let jsonData = []; // Variabel untuk menyimpan data dari kodepos.json

  // Muat data JSON
  fetch("json/kodepos.json")
    .then(response => response.json())
    .then(data => {
      jsonData = data;

      // Urutkan berdasarkan provinsi
      const provinces = [...new Set(data.map(item => item.province))].sort((a, b) => a.localeCompare(b));
      populateDropdown("province", provinces);
    })
    .catch(error => console.error("Error loading JSON:", error));

  // Fungsi untuk mengisi dropdown
  function populateDropdown(id, options) {
    const dropdown = document.getElementById(id);
    dropdown.innerHTML = `<option value="">--Pilih--</option>`;

    // Urutkan data sebelum menambahkan ke dropdown
    options.sort((a, b) => a.localeCompare(b));

    options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      dropdown.appendChild(opt);
    });
    dropdown.disabled = false; // Aktifkan dropdown
  }

  // Event listener untuk setiap dropdown
  document.getElementById("province").addEventListener("change", function () {
    const selectedProvince = this.value;
    const regencies = [...new Set(jsonData
      .filter(item => item.province === selectedProvince)
      .map(item => item.regency))];
    populateDropdown("regency", regencies);
    resetDropdowns(["district", "village", "code"]);
  });

  document.getElementById("regency").addEventListener("change", function () {
    const selectedProvince = document.getElementById("province").value;
    const selectedRegency = this.value;
    const districts = [...new Set(jsonData
      .filter(item => item.province === selectedProvince && item.regency === selectedRegency)
      .map(item => item.district))];
    populateDropdown("district", districts);
    resetDropdowns(["village", "code"]);
  });

  document.getElementById("district").addEventListener("change", function () {
    const selectedProvince = document.getElementById("province").value;
    const selectedRegency = document.getElementById("regency").value;
    const selectedDistrict = this.value;
    const villages = [...new Set(jsonData
      .filter(item => item.province === selectedProvince && item.regency === selectedRegency && item.district === selectedDistrict)
      .map(item => item.village))];
    populateDropdown("village", villages);
    resetDropdowns(["code"]);
  });

  document.getElementById("village").addEventListener("change", function () {
    const selectedProvince = document.getElementById("province").value;
    const selectedRegency = document.getElementById("regency").value;
    const selectedDistrict = document.getElementById("district").value;
    const selectedVillage = this.value;

    // Cari data yang cocok untuk mengisi kode pos
    const selectedData = jsonData.find(
      item =>
        item.province === selectedProvince &&
        item.regency === selectedRegency &&
        item.district === selectedDistrict &&
        item.village === selectedVillage
    );

    document.getElementById("code").value = selectedData ? selectedData.code : "";
  });

  // Fungsi untuk mereset dropdown dan input
  function resetDropdowns(ids) {
    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element.tagName === "SELECT") {
        element.innerHTML = `<option value="">--Pilih--</option>`;
        element.disabled = true;
        const requiredIndicator = document.querySelector(`.required${id}`);
        if (requiredIndicator) requiredIndicator.style.visibility = "visible"; // Reset *
      } else if (element.tagName === "INPUT") {
        element.value = "";
      }
    });
  }
});

// Fungsi untuk mengelola tanda required (*)
function toggleRequiredIndicator(selectId, requiredClass) {
  const selectElement = document.getElementById(selectId);
  const requiredIndicator = document.querySelector(`.${requiredClass}`);

  if (selectElement.value.trim() === "") {
    requiredIndicator.style.visibility = "visible"; // Tampilkan *
  } else {
    requiredIndicator.style.visibility = "hidden"; // Sembunyikan *
  }
}


function formatPhoneNumber(event) {
  let input = event.target;
  let phoneNumber = input.value.replace(/[^0-9+]/g, ''); // Hapus semua karakter selain angka dan +

  // Jika input dimulai dengan +628, lanjutkan, jika tidak tambahkan +628
  if (!phoneNumber.startsWith('+628')) {
    phoneNumber = '+628' + phoneNumber.slice(3);
  }

  // Gunakan regex untuk format nomor telepon sesuai +628XX-XXXX-XXXX
  phoneNumber = phoneNumber.replace(/^(\+628\d{2})(\d{4})(\d{4})$/, '$1-$2-$3');

  // Terapkan pemformatan ke input
  input.value = phoneNumber;
}