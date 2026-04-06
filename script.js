document.addEventListener('DOMContentLoaded', () => {
    // Main Banner Slider Logic
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto Slide
    let timer = setInterval(nextSlide, slideInterval);

    // Pause on Hover
    const banner = document.querySelector('.main-banner');
    if (banner) {
        banner.addEventListener('mouseenter', () => clearInterval(timer));
        banner.addEventListener('mouseleave', () => timer = setInterval(nextSlide, slideInterval));
    }

    // Category Button Interaction (Simple Alert for Demo)
    const categoryBtn = document.querySelector('.category-btn');
    if (categoryBtn) {
        categoryBtn.addEventListener('click', () => {
            alert('카테고리 메뉴가 준비 중입니다. 쿠팡의 RDS 시스템을 반영한 드롭다운이 이곳에 구현됩니다.');
        });
    }

    // Search Input Interaction
    const searchInput = document.querySelector('.search-input');
    const searchWrapper = document.querySelector('.search-input-wrapper');
    if (searchInput && searchWrapper) {
        searchInput.addEventListener('focus', () => {
            searchWrapper.style.boxShadow = '0 0 8px rgba(61, 172, 220, 0.5)';
        });
        searchInput.addEventListener('blur', () => {
            searchWrapper.style.boxShadow = 'none';
        });
    }

    // Product Card Interaction
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('.product-name').textContent;
            console.log(`Navigating to product: ${productName}`);
            // In a real app, this would use window.location.href
        });
    });
});
