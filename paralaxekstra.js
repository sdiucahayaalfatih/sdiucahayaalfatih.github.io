// Paralax Eksul
const activities = document.querySelectorAll(".activity");

// Fungsi untuk memeriksa apakah elemen terlihat dalam viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi untuk menambahkan kelas 'active' saat elemen masuk ke dalam viewport
function showActivities() {
  activities.forEach((activity) => {
    if (isElementInViewport(activity)) {
      activity.classList.add("active");
    }
  });
}

// Panggil fungsi showActivities saat halaman dimuat dan di-scroll
window.addEventListener("DOMContentLoaded", showActivities);
window.addEventListener("scroll", showActivities);
