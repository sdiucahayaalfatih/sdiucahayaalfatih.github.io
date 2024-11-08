// Mendapatkan elemen input tahun ajaran
var tahunAjaranInput = document.getElementById("tahunajaran");

// Mendapatkan tahun saat ini
var tahunSekarang = new Date().getFullYear() + 1;

// Mendapatkan tahun yang akan datang
var tahunYangAkanDatang = tahunSekarang + 1;

// Format tahun ajaran dengan format "tahun sekarang-tahun yang akan datang"
var tahunAjaran = `${tahunSekarang}-${tahunYangAkanDatang}`;

// Mengatur nilai input tahun ajaran dengan tahun ajaran yang diformat
tahunAjaranInput.value = tahunAjaran;
