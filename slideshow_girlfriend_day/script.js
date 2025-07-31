let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const texts = document.getElementsByClassName("text");

    // Sembunyikan semua slide dan teks
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        texts[i].classList.remove("text-show");
    }

    // Naikkan indeks slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Tampilkan slide saat ini
    slides[slideIndex - 1].style.display = "block";

    // Tunda kemunculan teks setelah foto ditampilkan
    setTimeout(() => {
        texts[slideIndex - 1].classList.add("text-show");
    }, 1000); // Teks muncul 1 detik setelah foto

    // Ganti slide setiap 5 detik (termasuk 2 detik untuk animasi teks)
    setTimeout(showSlides, 5000);
}

// Mulai slideshow saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Memastikan musik diputar secara otomatis
    const music = document.getElementById('background-music');
    music.play().catch(e => console.log("Autoplay musik diblokir."));

    showSlides();
});
