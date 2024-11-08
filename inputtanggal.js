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
