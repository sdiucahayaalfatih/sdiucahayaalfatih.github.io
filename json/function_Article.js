document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.recent-article-item');
    let currentIndex = 0;
    const maxVisibleArticles = 5;

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Fungsi untuk memperbarui visibilitas artikel
    function updateVisibility() {
        articles.forEach((article, index) => {
            // Menampilkan artikel dalam rentang currentIndex hingga currentIndex + maxVisibleArticles
            if (index >= currentIndex && index < currentIndex + maxVisibleArticles) {
                article.style.display = 'flex';
            } else {
                article.style.display = 'none';
            }
        });

        // Menonaktifkan tombol Prev jika berada di awal
        if (currentIndex === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        // Menonaktifkan tombol Next jika berada di akhir
        if (currentIndex + maxVisibleArticles >= articles.length) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    // Event listener untuk tombol Prev
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex -= maxVisibleArticles; // Pindah mundur 5 artikel
            updateVisibility();
        }
    });

    // Event listener untuk tombol Next
    nextButton.addEventListener('click', function() {
        if (currentIndex + maxVisibleArticles < articles.length) {
            currentIndex += maxVisibleArticles; // Pindah maju 5 artikel
            updateVisibility();
        }
    });

    // Menampilkan artikel pertama saat halaman dimuat
    updateVisibility();
});

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var comment = document.getElementById('comment').value;

    fetch('https://script.google.com/macros/s/AKfycbyRc9DvenK_4kSsByeayYLmIgWWd2XU9I9rl_WJ9Ociv6V9GmBZguTxlU8hAqOvDwmoZhA/exec', {
        method: 'POST',
        body: JSON.stringify({ username: username, comment: comment }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById('successModal').style.display = 'block';
            setTimeout(() => {
                document.getElementById('successModal').style.display = 'none';
                document.getElementById('commentForm').reset();
            }, 3000);
        } else {
            console.error('Response error:', data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
