function togglePindahKelas() {
  var statuspendaftaran = document.getElementById("statuspendaftaran");
  var pindahkelas1 = document.querySelector(".pindahkelas1");

  if (statuspendaftaran.value === "Siswa Mutasi") {
    pindahkelas1.style.display = "block";
  } else {
    pindahkelas1.style.display = "none";
  }
}
