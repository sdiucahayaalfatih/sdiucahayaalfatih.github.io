function toggleRequiredIndicator1(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required1");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}

function toggleRequiredIndicator2(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required2");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator3(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required3");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator4(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required4");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}

function toggleRequiredIndicator6(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required6");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator7(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required7");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator8(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required8");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator9(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required9");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator11(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required11");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function formatRT_RW(event) {
  var input = event.target;

  // Menghapus semua karakter selain angka dan tanda '/'
  var formattedValue = input.value.replace(/[^\d\/]/g, '');

  // Memastikan format "000 / 000" dengan batasan 3 digit per bagian
  var parts = formattedValue.split('/');
  if (parts.length > 2) {
    parts = [parts[0], parts.slice(1).join('')]; // Memastikan hanya dua bagian yang ada
  }
  
  // Format bagian pertama dan kedua agar memiliki maksimal 3 digit
  parts[0] = parts[0].substring(0, 3); // Batasi bagian pertama sampai 3 digit
  parts[1] = parts[1] ? parts[1].substring(0, 3) : ''; // Batasi bagian kedua sampai 3 digit jika ada

  // Gabungkan bagian dengan format "000 / 000"
  input.value = parts.join(' / ');

  // Cek jika input sudah terisi dan sembunyikan indikator required jika perlu
  toggleRequiredIndicator12(event);
}

function toggleRequiredIndicator12(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required12");

  if (input.value.trim() === "" || !/^(\d{1,3}) \/ (\d{1,3})$/.test(input.value)) {
    requiredIndicator.style.visibility = "visible"; // Tampilkan jika kosong atau format salah
  } else {
    requiredIndicator.style.visibility = "hidden"; // Sembunyikan jika input valid
  }
}

function validateRT_RW(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required12");

  // Validasi jika formatnya sesuai dengan "000 / 000"
  if (!/^(\d{1,3}) \/ (\d{1,3})$/.test(input.value)) {
    requiredIndicator.style.visibility = "visible"; // Tampilkan jika format salah
  }
}

function toggleRequiredIndicator13(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required13");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator14(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required14");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator15(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required15");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator16(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required16");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator17(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required17");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator18(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required18");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator19(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required19");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator21(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required21");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator22(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required22");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator23(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required23");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator24(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required24");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator25(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required25");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator26(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required26");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator30(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required30");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator31(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required31");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator32(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required32");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function toggleRequiredIndicator33(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required33");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function limitTo16Digits(event) {
  var input = event.target;
  var value = input.value;

  // Menghapus karakter selain angka
  var digitsOnly = value.replace(/\D/g, "");

  // Memotong menjadi 16 digit
  var truncatedValue = digitsOnly.slice(0, 16);

  // Mengatur nilai input
  input.value = truncatedValue;

  // Menampilkan pemberitahuan jika jumlah digit kurang dari 16
  var warningMessage = document.getElementById("nikibu-warning");
  if (truncatedValue.length < 16) {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
}


function limitTo16Digits2(event) {
  var input = event.target;
  var value = input.value;

  // Menghapus karakter selain angka
  var digitsOnly = value.replace(/\D/g, "");

  // Memotong menjadi 16 digit
  var truncatedValue = digitsOnly.slice(0, 16);

  // Mengatur nilai input
  input.value = truncatedValue;

  // Menampilkan pemberitahuan jika jumlah digit kurang dari 16
  var warningMessage = document.getElementById("noniksiswa-warning");
  if (truncatedValue.length < 16) {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
}
function limitTo16Digits3(event) {
  var input = event.target;
  var value = input.value;

  // Menghapus karakter selain angka
  var digitsOnly = value.replace(/\D/g, "");

  // Memotong menjadi 16 digit
  var truncatedValue = digitsOnly.slice(0, 16);

  // Mengatur nilai input
  input.value = truncatedValue;

  // Menampilkan pemberitahuan jika jumlah digit kurang dari 16
  var warningMessage = document.getElementById("nonikayah-warning");
  if (truncatedValue.length < 16) {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
}
function limitTo16Digits4(event) {
  var input = event.target;
  var value = input.value;

  // Menghapus karakter selain angka
  var digitsOnly = value.replace(/\D/g, "");

  // Memotong menjadi 16 digit
  var truncatedValue = digitsOnly.slice(0, 16);

  // Mengatur nilai input
  input.value = truncatedValue;

  // Menampilkan pemberitahuan jika jumlah digit kurang dari 16
  var warningMessage = document.getElementById("nikwali-warning");
  if (truncatedValue.length < 16) {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
}
var map;
var marker;

function openMap() {
  document.getElementById("map").style.display = "block";
  document.querySelector('button[onclick="openMap()"]').style.display = "none";
  document.querySelector('button[onclick="closeMap()"]').style.display =
    "block";
  document.getElementById("closealamat").style.display = "block";

  map = L.map("map").setView([0, 0], 1); // Inisialisasi peta dengan koordinat awal (0, 0) dan zoom level 1

  // Tambahkan layer peta dari OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(map);

  // Tambahkan event listener untuk menangkap klik pada peta
  map.on("click", function (e) {
    var latLng = e.latlng;
    var latitude = latLng.lat;
    var longitude = latLng.lng;

    // Isikan nilai lintang dan bujur pada input
    document.getElementById("lintang").value = latitude;
    document.getElementById("bujur").value = longitude;

    // Hapus marker sebelumnya (jika ada)
    if (marker) {
      map.removeLayer(marker);
    }

    // Tambahkan marker baru pada koordinat yang dipilih
    marker = L.marker(latLng).addTo(map);
  });
}

function closeMap() {
  document.getElementById("map").style.display = "none";
  document.querySelector('button[onclick="openMap()"]').style.display = "block";
  document.querySelector('button[onclick="closeMap()"]').style.display = "none";
  document.getElementById("closealamat").style.display = "none";

  // Hapus peta dan marker
  map.remove();
  marker = null;
}

function searchAddress() {
  var address = document.getElementById("alamat").value;

  // Panggil API Nominatim untuk mendapatkan koordinat dari alamat
  fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        var latitude = parseFloat(data[0].lat);
        var longitude = parseFloat(data[0].lon);

        // Pindahkan tampilan peta ke koordinat yang ditemukan dan zoom otomatis
        map.flyTo([latitude, longitude], 15);

        // Isikan nilai lintang dan bujur pada input
        document.getElementById("lintang").value = latitude;
        document.getElementById("bujur").value = longitude;

        // Hapus marker sebelumnya (jika ada)
        if (marker) {
          map.removeLayer(marker);
        }

        // Tambahkan marker baru pada koordinat yang ditemukan
        marker = L.marker([latitude, longitude]).addTo(map);
      } else {
        alert("Alamat tidak ditemukan.");
      }
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan saat mencari alamat.");
    });
}
// function menutup data wali
function toggleDataWali(show) {
  var dataWali = document.getElementById("data-wali");

  if (show) {
    dataWali.style.display = "block";
  } else {
    dataWali.style.display = "none";
  }
}



function toggleRequiredIndicator100(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required18");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function limitTo16Digits100(event) {
  var input = event.target;
  var value = input.value;

  // Menghapus karakter selain angka
  var digitsOnly = value.replace(/\D/g, "");

  // Memotong menjadi 16 digit
  var truncatedValue = digitsOnly.slice(0, 16);

  // Mengatur nilai input
  input.value = truncatedValue;

  // Menampilkan pemberitahuan jika jumlah digit kurang dari 16
  var warningMessage = document.getElementById("nonikayah-warning1");
  if (truncatedValue.length < 16) {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
}



function toggleRequiredIndicator101(event) {
  var input = event.target;
  var requiredIndicator = document.querySelector(".required5");

  if (input.value.trim() === "") {
    requiredIndicator.style.visibility = "visible";
  } else {
    requiredIndicator.style.visibility = "hidden";
  }
}
function limitTo16Digits101(event) {
  var input = event.target;
  var value = input.value;

  // Menghapus karakter selain angka
  var digitsOnly = value.replace(/\D/g, "");

  // Memotong menjadi 16 digit
  var truncatedValue = digitsOnly.slice(0, 16);

  // Mengatur nilai input
  input.value = truncatedValue;

  // Menampilkan pemberitahuan jika jumlah digit kurang dari 16
  var warningMessage = document.getElementById("nokksiswa-warning12");
  if (truncatedValue.length < 16) {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
}