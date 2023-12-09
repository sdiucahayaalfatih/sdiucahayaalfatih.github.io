document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen select tahun ajaran
  const selectTahun = document.getElementById("pilihtahun");

  // Mengatur tahun ajaran default menjadi 2023
  selectTahun.value = "2023";

  // Menampilkan data siswa untuk tahun ajaran default
  isiTabelSiswa("2023");

  // Menambahkan event listener untuk perubahan pilihan tahun ajaran
  selectTahun.addEventListener("change", function () {
    const tahunAjaran = selectTahun.value;
    isiTabelSiswa(tahunAjaran);
    const tahunAjaranText = selectTahun.options[selectTahun.selectedIndex].text;
    document.getElementById(
      "tahunAjaran"
    ).textContent = `Tahun Ajaran ${tahunAjaranText}`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tahunAjaranElement = document.getElementById("tahunAjaran");
  const tahunSelector = document.getElementById("pilihtahun");
  const searchInput = document.getElementById("search");
  const siswaList = document.getElementById("siswa-list");

  // Data siswa
  const dataSiswa = {
    2020: [
      { nama: "AIRLANGGA PUTRA PRATAMA", jenisKelamin: "L" },
      { nama: "ALFIAN RIZQI PRIADI", jenisKelamin: "L" },
      { nama: "ALYA DEVINA SAEFUL", jenisKelamin: "P" },
      { nama: "ANDREA GIESELA NADIVA", jenisKelamin: "P" },
      { nama: "ARSAKHA RABANI", jenisKelamin: "L" },
      { nama: "FATIH SADAD HASAN", jenisKelamin: "L" },
      { nama: "INAYAH MAHYA", jenisKelamin: "P" },
      { nama: "KANZIA MAHIRA WIJAYA", jenisKelamin: "P" },
      { nama: "M. ADAM SOFIALLAH", jenisKelamin: "L" },
      { nama: "M. FARIZ FIRDAUS SYAM", jenisKelamin: "L" },
      { nama: "MUHAMMAD DAFFA FATHIAN AKBAR", jenisKelamin: "L" },
      { nama: "MUHAMMAD EVAN MAULANA", jenisKelamin: "L" },
      { nama: "NAZWA NAURA APRILIA", jenisKelamin: "P" },
      { nama: "ROSYID", jenisKelamin: "L" },
      { nama: "SITI ENI MARDIYAH", jenisKelamin: "P" },
      { nama: "SITI LUTFI AZZAHRA", jenisKelamin: "P" },
      { nama: "VANNYA QUEENA", jenisKelamin: "P" },
    ],
    2021: [
      { nama: "Abdurrahman El-Hafizh", jenisKelamin: "L" },
      { nama: "Ahmad Zein Al Fatih", jenisKelamin: "L" },
      { nama: "AISYAH SULTHANAH ZHILAL", jenisKelamin: "P" },
      { nama: "ALIFA FAKHIRA HIBATILLAH", jenisKelamin: "P" },
      { nama: "ALIFA TAZKIYA ZHAFIR", jenisKelamin: "P" },
      { nama: "AQILA QAISARA HERMAWAN", jenisKelamin: "P" },
      { nama: "ASSYIFA SYAUQIYAH", jenisKelamin: "P" },
      { nama: "BUTSAINA IFTITAH NAILA", jenisKelamin: "P" },
      { nama: "FAKAR ALTAF MUZAKKI", jenisKelamin: "L" },
      { nama: "FATIMATUZAHRA", jenisKelamin: "P" },
      { nama: "INTAN KARUNIA CAHAYA PUTRI", jenisKelamin: "P" },
      { nama: "M. ZIAN MAHESA", jenisKelamin: "L" },
      { nama: "MOH. AZKA FAUZI", jenisKelamin: "L" },
      { nama: "MOHAMMAD ABIYYU ZHAFAR", jenisKelamin: "L" },
      { nama: "MUHAMMAD SULTAN ARIEF AHMAD", jenisKelamin: "L" },
      { nama: "Muhammad Aqil Musyafaa", jenisKelamin: "L" },
      { nama: "MUHAMMAD ARYADANA DWI PUTRA", jenisKelamin: "L" },
      { nama: "MUHAMMAD JAHID ALFATIH", jenisKelamin: "L" },
      { nama: "MUHAMMAD ZIYAN ELVIAN MIFTAH", jenisKelamin: "L" },
      { nama: "REVAN DIMITRI GAOS", jenisKelamin: "L" },
      { nama: "SOFIE ZAHRA FAUZAN", jenisKelamin: "P" },
      { nama: "SORAYA AURORA WILIS", jenisKelamin: "P" },
      { nama: "SULTAN FATIH MUHAMMAD LUBIS", jenisKelamin: "L" },
      { nama: "THALITA HASNA VIERYN", jenisKelamin: "P" },
      { nama: "WIRDA SIDQIA HAQIQI", jenisKelamin: "P" },
      { nama: "ALTHAF KEANU HIDAYAT", jenisKelamin: "L" },
      { nama: "DELIYA QUROTUN NISA", jenisKelamin: "P" },
      { nama: "FADYA LAILATUNNIDA", jenisKelamin: "P" },
      { nama: "FAHIRA SYAKIRA AZ-ZAHRA", jenisKelamin: "P" },
      { nama: "JASMINE NUR ANNISA", jenisKelamin: "P" },
      { nama: "LUBNA TAQWIMA KHALIFAH", jenisKelamin: "P" },
      { nama: "M. ABYAN ATHALLAH PRATAMA", jenisKelamin: "L" },
      { nama: "M. RAIZAN AL KAUTSAR AKBAR", jenisKelamin: "L" },
      { nama: "MUHAMMAD AL-FATIH", jenisKelamin: "L" },
      { nama: "MUHAMMAD ZAKI RAHADIAN", jenisKelamin: "L" },
      { nama: "MUNHAMAD HAIKAL KAML", jenisKelamin: "L" },
      { nama: "NAFIL KHAIRULLAH", jenisKelamin: "L" },
      { nama: "RATU SHAKILA FARRIN", jenisKelamin: "P" },
      { nama: "WILMAR ARKAN", jenisKelamin: "L" },
      { nama: "ZEELVA TANISA RIZQINA", jenisKelamin: "P" },
    ],
    2022: [
      { nama: "A. FARIS ASFA ABQARI", jenisKelamin: "L" },
      { nama: "ABDILAH PRATAMA", jenisKelamin: "L" },
      { nama: "ABDURRAHMAN RANU BINTANG", jenisKelamin: "L" },
      { nama: "AHDA MUHAMMAD MS. KHOLILURROHMAN", jenisKelamin: "L" },
      { nama: "AHMAD SAHAL HAQ FAQIH", jenisKelamin: "L" },
      { nama: "AHZA DANISH SEPTIAN", jenisKelamin: "L" },
      { nama: "AISYAH SYAKILA MUMTAZ", jenisKelamin: "P" },
      { nama: "ALAMIAH ANTIK BRILLIANT", jenisKelamin: "P" },
      { nama: "ALDA NATASYA JALIL YUSRIYYAH", jenisKelamin: "P" },
      { nama: "ALIA RAHMAN MAHADEWI", jenisKelamin: "P" },
      { nama: "ALMEERA ST AINAYYA MUMTAZAH", jenisKelamin: "P" },
      { nama: "ARKA ALARIC FAUZI", jenisKelamin: "L" },
      { nama: "ARSYILA NUR KHANSA AL MUSYAFFA", jenisKelamin: "P" },
      { nama: "ATIK NUR BANI", jenisKelamin: "P" },
      { nama: "DJENAR MYESHA WINANTO", jenisKelamin: "L" },
      { nama: "DZAKIYY ZAHIR BAYU SAPUTRA", jenisKelamin: "L" },
      { nama: "FAUZAN ZAINUL RASYID ABQARI", jenisKelamin: "L" },
      { nama: "FIRSA NURAZIZ", jenisKelamin: "P" },
      { nama: "IKMAL AHZA JINAN", jenisKelamin: "L" },
      { nama: "IQBAL WICAKSONO", jenisKelamin: "L" },
      { nama: "JULMI IKHWAN KHOIRI", jenisKelamin: "L" },
      { nama: "KAYSA SYAKIYA MUHTAR", jenisKelamin: "L" },
      { nama: "KAYSHA UFAIRAH AL KARIMI", jenisKelamin: "P" },
      { nama: "KHAUFA SIDQIN ALIA", jenisKelamin: "L" },
      { nama: "KIRANA AZZALIA GUNADI", jenisKelamin: "P" },
      { nama: "M. NASHOR ALMARWAZY", jenisKelamin: "L" },
      { nama: "MOCHAMAD NOUFAL AZKA NURDAFIF", jenisKelamin: "L" },
      { nama: "MOHAMMAD AZAMY FATHUL ISLAM", jenisKelamin: "L" },
      { nama: "MUHAMAD IBNU MUBAROK", jenisKelamin: "L" },
      { nama: "MUHAMAD LUTFIANSYAH", jenisKelamin: "L" },
      { nama: "MUHAMMAD FATTIH AL MUHASIBI", jenisKelamin: "L" },
      { nama: "MUHAMMAD GAZZA JIDANI ASSAQIE", jenisKelamin: "L" },
      { nama: "MUHAMMAD HAFIDZ ABYAN ALFARIZI", jenisKelamin: "L" },
      { nama: "MUHAMMAD RIZQI ALGHIFARI", jenisKelamin: "L" },
      { nama: "MUHAMMAD SYAFIQ ELHAM", jenisKelamin: "L" },
      { nama: "MUHAMMAD SYAHRIZA ABQORY", jenisKelamin: "L" },
      { nama: "NADA MAULIDA RIADI", jenisKelamin: "P" },
      { nama: "PUTRI ZASKYA MAULANA", jenisKelamin: "P" },
      { nama: "RADINKA MAIZA ASHADYAN", jenisKelamin: "P" },
      { nama: "RAFA ELZYAN FITRA", jenisKelamin: "L" },
      { nama: "RAFID ABDEEL FATTAH", jenisKelamin: "L" },
      { nama: "RAISHA DEMIANTI RAMADHANI", jenisKelamin: "P" },
      { nama: "RATU ANINDYA ZHAHIRAH KHUSNI", jenisKelamin: "P" },
      { nama: "RAZKA ADHA MULYA NUGRAHA", jenisKelamin: "L" },
      { nama: "RHANDRA ABINAYA", jenisKelamin: "L" },
      { nama: "ROHIMAH AZZAHRA", jenisKelamin: "P" },
      { nama: "SHAFWAN DANISH AL KHALIFI", jenisKelamin: "L" },
      { nama: "SHAHEERA ALESHA MEGANTARA", jenisKelamin: "P" },
      { nama: "SHANUM KHOIRINA MULYA", jenisKelamin: "P" },
      { nama: "SITI AZQYA BINAR RAHMATULLAH", jenisKelamin: "P" },
      { nama: "SITI SALMA QISTINA MAS'UD", jenisKelamin: "P" },
      { nama: "SITI ZARINA MAZIYA", jenisKelamin: "P" },
      { nama: "SYAFA ADHA AULIA", jenisKelamin: "P" },
      { nama: "TB. DZAKY KAMIL MAHRUS", jenisKelamin: "L" },
      { nama: "WISNU HADI KUSUMA", jenisKelamin: "L" },
      { nama: "YASMIN HUMAIRA HIDAYAT", jenisKelamin: "P" },
    ],
    2023: [
      { nama: "ABIYAZID FAUZAN KAMIL", jenisKelamin: "L" },
      { nama: "ABIZARD ALTAN MUTTAQI", jenisKelamin: "L" },
      { nama: "ABIZARD KHALIF PUTRA AHMAD", jenisKelamin: "L" },
      { nama: "Abraham Zaydan Noverry", jenisKelamin: "L" },
      { nama: "Adhwa Fidela Abigail", jenisKelamin: "P" },
      { nama: "Ahmad Rayyan", jenisKelamin: "L" },
      { nama: "Aileen Arsyila Rachman", jenisKelamin: "P" },
      { nama: "Aisha Syifa Bachri", jenisKelamin: "P" },
      { nama: "Alesha Fradella Ar Rayyan", jenisKelamin: "P" },
      { nama: "Alesha Khairunnisa", jenisKelamin: "P" },
      { nama: "ALESHA NURMAULIDA SUBAGJA", jenisKelamin: "P" },
      { nama: "ALFIAN SHADIQ NASRULLAH TUHUTERU", jenisKelamin: "L" },
      { nama: "Alisa Humaeroh", jenisKelamin: "P" },
      { nama: "Alisha Khaira", jenisKelamin: "P" },
      { nama: "Alissa Dwi Sujana Lubis", jenisKelamin: "P" },
      { nama: "Almaira Sayyida Anwar", jenisKelamin: "P" },
      { nama: "Alya Dewina Maryam", jenisKelamin: "P" },
      { nama: "ANINDITA MUMTAZA ARIEF", jenisKelamin: "P" },
      { nama: "Anindya Thalita Arifin", jenisKelamin: "P" },
      { nama: "ARINI RIZKYA", jenisKelamin: "P" },
      { nama: "Arini Rizkyna Sihotang", jenisKelamin: "P" },
      { nama: "Arrum Aisya Arafa", jenisKelamin: "P" },
      { nama: "ARSYA MUHAMMAD AFNAN", jenisKelamin: "L" },
      { nama: "ARSYILA ADREENA SAILA", jenisKelamin: "P" },
      { nama: "ARSYILA LATISHA RAHMAN", jenisKelamin: "P" },
      { nama: "Arsyilla Khanzania Nugraha", jenisKelamin: "P" },
      { nama: "Atthaya Samudera Setiawan", jenisKelamin: "L" },
      { nama: "AULIA SHAKEERA FITRI", jenisKelamin: "P" },
      { nama: "AYSHA RIZKYA FATIMAH", jenisKelamin: "P" },
      { nama: "AZKA ABYAN IBRAHIM", jenisKelamin: "L" },
      { nama: "Azzahra Maulidina Mutaqin", jenisKelamin: "P" },
      { nama: "Azzamy Syauqi Uno Maulana", jenisKelamin: "L" },
      { nama: "DAIFA GAZALA HERMAWAN", jenisKelamin: "P" },
      { nama: "Danella Videlia Permana", jenisKelamin: "P" },
      { nama: "Doffy Atha Quiros", jenisKelamin: "L" },
      { nama: "Farah Ramadhania Afrizal", jenisKelamin: "P" },
      { nama: "Halim Faiz Rahmatullah", jenisKelamin: "L" },
      { nama: "HANAN ALKHALIFI SOFANDININGRAT", jenisKelamin: "L" },
      { nama: "HAZAZ AGUNG RAMADHAN", jenisKelamin: "L" },
      { nama: "Irdhina Syakira Idris", jenisKelamin: "P" },
      { nama: "Isqina kamila", jenisKelamin: "P" },
      { nama: "Jasmine Alleria Azzahra", jenisKelamin: "P" },
      { nama: "Kahla Rachma Zakiya", jenisKelamin: "P" },
      { nama: "Khalil Zayan", jenisKelamin: "L" },
      { nama: "Khumaira Azzahra Nurazizah", jenisKelamin: "P" },
      { nama: "LUV ARSYILA SHASI KIRANA", jenisKelamin: "P" },
      { nama: "M. ARVINO DEORASYAD", jenisKelamin: "L" },
      { nama: "Maiza Rimsha Saffana", jenisKelamin: "P" },
      { nama: "MAJIDA ANINDITA", jenisKelamin: "P" },
      { nama: "Mazaya Dzakiya Rahman", jenisKelamin: "P" },
      { nama: "MEIDINA ALMIRA ZAHRA", jenisKelamin: "P" },
      { nama: "Mohammad Zavier Fidel Ibni Fatwa", jenisKelamin: "L" },
      { nama: "Muhamad Abidzar Abqori", jenisKelamin: "L" },
      { nama: "Muhamad Bani Hafiz Virendra", jenisKelamin: "L" },
      { nama: "Muhamad Zayyan Malik", jenisKelamin: "L" },
      { nama: "Muhammad Absyar Tsabat", jenisKelamin: "L" },
      { nama: "Muhammad Alfarizqi", jenisKelamin: "L" },
      { nama: "Muhammad Alfatih Gumelar", jenisKelamin: "L" },
      { nama: "MUHAMMAD ARFAN HASHIF", jenisKelamin: "L" },
      { nama: "Muhammad Fathan Al Ghifary", jenisKelamin: "L" },
      { nama: "Muhammad Hisyam Hifdzilhaq Basyir", jenisKelamin: "L" },
      { nama: "Muhammad Ibrahim Al-Fikri", jenisKelamin: "L" },
      { nama: "MUHAMMAD IHSANUL FALAH", jenisKelamin: "L" },
      { nama: "MUHAMMAD NADHIF", jenisKelamin: "L" },
      { nama: "Muhammad Naufal Alfathan", jenisKelamin: "L" },
      { nama: "MUHAMMAD RAFKA ABQARY", jenisKelamin: "L" },
      { nama: "MUHAMMAD RASYA HIBRATUL KAHSYAFANI", jenisKelamin: "L" },
      { nama: "Muhammad Rayyan Mubarak", jenisKelamin: "L" },
      { nama: "MUHAMMAD TABRIZ HUSEN", jenisKelamin: "L" },
      { nama: "Nafisa Erida", jenisKelamin: "P" },
      { nama: "NAJWA HIZATUL MAULIDA", jenisKelamin: "P" },
      { nama: "Pradipta Amzari Ahmad", jenisKelamin: "L" },
      { nama: "QURRATU'AIN NURJANNAH", jenisKelamin: "P" },
      { nama: "RAFIF AHMAD RIADHI", jenisKelamin: "L" },
      { nama: "Ratu Kamila Azkadina Ramadani", jenisKelamin: "P" },
      { nama: "RATU KEINARA MALAEKA FATIHAH", jenisKelamin: "P" },
      { nama: "Reisya Haifa Mecca", jenisKelamin: "P" },
      { nama: "Reza Ahmed Mujahid", jenisKelamin: "L" },
      { nama: "SALMAN ABDILLAH SAEFUL", jenisKelamin: "L" },
      { nama: "Satrio Catur Wicaksono", jenisKelamin: "L" },
      { nama: "SHIFWA TANISHA QOTRUNNADA", jenisKelamin: "P" },
      { nama: "Siti Aghniyatussholihah", jenisKelamin: "P" },
      { nama: "VIONA PURI LENGGANA", jenisKelamin: "P" },
      { nama: "WIRA PRASETYA", jenisKelamin: "L" },
      { nama: "Zahira Syarifatun Nisa", jenisKelamin: "P" },
      { nama: "Zikri Akbar Mubarok", jenisKelamin: "L" },
    ],
  };
  function isiTabelSiswa(tahun) {
    siswaList.innerHTML = ""; // Hapus isi sebelumnya

    if (dataSiswa[tahun]) {
      dataSiswa[tahun].forEach(function (siswa, index) {
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${index + 1}</td>
                <td>${tahun}/${parseInt(tahun) + 1}</td>
                <td>${siswa.nama}</td>
                <td>${siswa.jenisKelamin}</td>
                <td>17/07/${tahun}</td>
                <td>DITERIMA</td>
            `;
        siswaList.appendChild(row);
      });
    } else {
      siswaList.innerHTML =
        "<tr><td colspan='6'>Tidak ada siswa pada tahun ini.</td></tr>";
    }

    tahunAjaranElement.textContent = `Tahun Ajaran ${tahun}/${
      parseInt(tahun) + 1
    }`;
  }

  // Event listener untuk perubahan tahun pada dropdown
  tahunSelector.addEventListener("change", function () {
    const selectedTahun = tahunSelector.value;
    isiTabelSiswa(selectedTahun);
  });

  // Event listener untuk pencarian
  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();

    Array.from(siswaList.children).forEach(function (row) {
      const namaSiswa = row
        .querySelector("td:nth-child(3)")
        .textContent.toLowerCase();
      if (namaSiswa.includes(keyword)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });

  // Inisialisasi tabel dengan tahun ajaran default
  const defaultTahun = tahunSelector.value;
  isiTabelSiswa(defaultTahun);
});
