document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const texts = [
        document.getElementById('text-line-1'),
        document.getElementById('text-line-2'),
        document.getElementById('text-line-3')
    ];
    let index = 0;

    // Memutar musik secara otomatis setelah halaman dimuat
    music.play().catch(error => {
        // Autoplay mungkin diblokir, tambahkan interaksi pengguna jika perlu
        console.log("Autoplay diblokir. Pengguna perlu berinteraksi.");
        // Contoh: menampilkan tombol "Mulai"
        const startButton = document.createElement('button');
        startButton.innerText = 'Klik untuk memulai';
        startButton.style.position = 'absolute';
        startButton.style.top = '50%';
        startButton.style.left = '50%';
        startButton.style.transform = 'translate(-50%, -50%)';
        startButton.style.padding = '10px 20px';
        startButton.style.fontSize = '1.2em';
        startButton.style.cursor = 'pointer';
        startButton.onclick = () => {
            music.play();
            startButton.remove();
            showTextSequentially();
        };
        document.body.appendChild(startButton);
    });

    // Menampilkan teks satu per satu dengan jeda
    function showTextSequentially() {
        if (index < texts.length) {
            setTimeout(() => {
                texts[index].classList.remove('hidden');
                texts[index].classList.add('visible');
                index++;
                showTextSequentially(); // Panggil fungsi ini lagi untuk teks berikutnya
            }, 2000); // Jeda 2 detik
        }
    }

    // Jika musik berhasil diputar, mulai tampilkan teks
    music.onplay = () => {
        showTextSequentially();
    };

});
