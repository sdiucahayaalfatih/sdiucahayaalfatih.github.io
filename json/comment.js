document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirimkan

    // Ambil nilai dari input komentar
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    // Validasi jika kedua field sudah diisi
    if (username && comment) {
        // Menampilkan modal sukses
        document.getElementById('successModal').style.display = 'flex';
        
        // Setelah beberapa detik, sembunyikan modal (meniru pengiriman komentar)
        setTimeout(function() {
            document.getElementById('successModal').style.display = 'none';
            // Mengosongkan form setelah komentar 'terkirim'
            document.getElementById('commentForm').reset();
        }, 2000); // Modal akan hilang setelah 2 detik
    }
});