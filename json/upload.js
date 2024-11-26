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
// Fungsi untuk mengambil data kabupaten, provinsi, kec, kel, pos
let kodeposData = []; // Menyimpan data dari file JSON
  
    // Memuat data dari kodepos.json
    async function loadKodePosData() {
      try {
        const response = await fetch('json/kodepos.json'); // Path ke file kodepos.json
        kodeposData = await response.json();
        populateProvinces();
      } catch (error) {
        console.error('Gagal memuat data kodepos:', error);
      }
    }
  
    // Memuat daftar provinsi ke dropdown
function populateProvinces() {
  const provinsiSet = Array.from(new Set(kodeposData.map(item => item.province)));
  provinsiSet.sort(); // Mengurutkan secara alfabetis

  const provSelect = document.getElementById('provsiswa');
  provinsiSet.forEach(province => {
    const option = document.createElement('option');
    option.value = province;
    option.textContent = province;
    provSelect.appendChild(option);
  });
}

// Memuat daftar kabupaten berdasarkan provinsi
function loadKabupaten(selectedProvince) {
  const kabupatenSet = Array.from(
    new Set(
      kodeposData
        .filter(item => item.province === selectedProvince)
        .map(item => item.regency)
    )
  );
  kabupatenSet.sort(); // Mengurutkan secara alfabetis

  const kabSelect = document.getElementById('kotsiswa');
  kabSelect.innerHTML = '<option value="">--Pilih--</option>'; // Reset options
  document.getElementById('kecsiswa').disabled = true;
  document.getElementById('kelsiswa').disabled = true;

  kabupatenSet.forEach(regency => {
    const option = document.createElement('option');
    option.value = regency;
    option.textContent = regency;
    kabSelect.appendChild(option);
  });

  kabSelect.disabled = false; // Aktifkan dropdown kabupaten
}

// Memuat daftar kecamatan berdasarkan kabupaten
function loadKecamatan(selectedRegency) {
  const kecamatanSet = Array.from(
    new Set(
      kodeposData
        .filter(item => item.regency === selectedRegency)
        .map(item => item.district)
    )
  );
  kecamatanSet.sort(); // Mengurutkan secara alfabetis

  const kecSelect = document.getElementById('kecsiswa');
  kecSelect.innerHTML = '<option value="">--Pilih--</option>'; // Reset options
  document.getElementById('kelsiswa').disabled = true;

  kecamatanSet.forEach(district => {
    const option = document.createElement('option');
    option.value = district;
    option.textContent = district;
    kecSelect.appendChild(option);
  });

  kecSelect.disabled = false; // Aktifkan dropdown kecamatan
}

// Memuat daftar kelurahan berdasarkan kecamatan
function loadKelurahan(selectedDistrict) {
  const kelurahanSet = Array.from(
    new Set(
      kodeposData
        .filter(item => item.district === selectedDistrict)
        .map(item => item.village)
    )
  );
  kelurahanSet.sort(); // Mengurutkan secara alfabetis

  const kelSelect = document.getElementById('kelsiswa');
  kelSelect.innerHTML = '<option value="">--Pilih--</option>'; // Reset options

  kelurahanSet.forEach(village => {
    const option = document.createElement('option');
    option.value = village;
    option.textContent = village;
    kelSelect.appendChild(option);
  });

  kelSelect.disabled = false; // Aktifkan dropdown kelurahan
}

  
    // Menetapkan kode pos berdasarkan kelurahan
    function setKodePos(selectedVillage) {
      const kodePosInput = document.getElementById('kodepos1');
      const match = kodeposData.find(item => item.village === selectedVillage);
      kodePosInput.value = match ? match.code : ''; // Jika tidak ada, kosongkan
    }
  
    // Panggil fungsi untuk memuat data saat halaman dimuat
    document.addEventListener('DOMContentLoaded', loadKodePosData);
