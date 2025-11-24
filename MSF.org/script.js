// MSF Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // ========== PAGE NAVIGATION ==========
    const navLinks = document.querySelectorAll('[data-page]');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');

            // Remove active from all nav links
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));

            // Show target page
            const pageToShow = document.getElementById(`${targetPage}-page`);
            if (pageToShow) {
                pageToShow.classList.add('active');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // ========== TAB FUNCTIONALITY ==========
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Hide all panels
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Show target panel
            const panelToShow = document.getElementById(targetTab);
            if (panelToShow) {
                panelToShow.classList.add('active');
            }
        });
    });

    // ========== WORK CAROUSEL FUNCTIONALITY ==========
    const carouselCards = document.querySelectorAll('.work-type-card-new');
    const prevBtn = document.querySelector('.work-carousel .carousel-btn.prev');
    const nextBtn = document.querySelector('.work-carousel .carousel-btn.next');
    let currentCardIndex = 0;

    function showCard(index) {
        carouselCards.forEach(card => card.classList.remove('active'));
        carouselCards[index].classList.add('active');
    }

    if (prevBtn && nextBtn && carouselCards.length > 0) {
        prevBtn.addEventListener('click', function() {
            currentCardIndex = (currentCardIndex - 1 + carouselCards.length) % carouselCards.length;
            showCard(currentCardIndex);
        });

        nextBtn.addEventListener('click', function() {
            currentCardIndex = (currentCardIndex + 1) % carouselCards.length;
            showCard(currentCardIndex);
        });
    }

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    console.log('MSF Website initialized');
});
