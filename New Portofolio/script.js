document.addEventListener('DOMContentLoaded', function() {
    
    // [BARU] Kode untuk Animasi Efek Ketik (Typed.js)
    new Typed('#typing-effect', {
        strings: ['Welcome to My Portfolio.', 'I am a Web Developer.', 'Explore my work below.'],
        typeSpeed: 70,  // Kecepatan mengetik
        backSpeed: 40,  // Kecepatan menghapus
        loop: true      // Mengulang animasi
    });

    // Kode untuk Navigasi
    const mainContent = document.querySelector('.main-content');
    const sections = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fungsi untuk meng-update link navigasi yang aktif
    function updateActiveLink() {
        let currentSectionIndex = Math.round(mainContent.scrollTop / window.innerHeight);
        if (sections[currentSectionIndex]) {
            let currentId = sections[currentSectionIndex].id;

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentId) {
                    link.classList.add('active');
                }
            });
        }
    }

    // Panggil fungsi saat scroll di kontainer utama
    mainContent.addEventListener('scroll', updateActiveLink);

    // Panggil sekali di awal
    updateActiveLink();
});