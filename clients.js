// Image Slider (Scoped Version)
(function () {
    let currentIndex = 0; 
    const slides = document.querySelectorAll('.slideC');
    const totalSlides = slides.length;
    const slider = document.querySelector('.sliderC');
    const imagesToShow = 5; // Number of images to show at a time

    function showSlides(index) {
        if (index >= totalSlides - imagesToShow + 1) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - imagesToShow;
        } else {
            currentIndex = index;
        }
        const offset = -(currentIndex * 100) / imagesToShow;
        slider.style.transform = `translateX(${offset}%)`;
    }

    // Auto slide function
    function autoSlide() {
        showSlides(currentIndex + 1);
    }

    // Set interval for auto sliding every 3 seconds
    setInterval(autoSlide, 2000);

    document.getElementById('prev').addEventListener('click', () => {
        showSlides(currentIndex - 1);
    });

    document.getElementById('next').addEventListener('click', () => {
        showSlides(currentIndex + 1);
    });
})();



// Product Carousel (Scoped Version)
(function () {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let productIndex = 0; // Renamed variable
    const productSlides = document.querySelectorAll('.product-card');
    const totalProductSlides = productSlides.length;

    function updateProductCarousel() {
        track.style.transform = `translateX(-${productIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        productIndex = (productIndex === 0) ? totalProductSlides - 1 : productIndex - 1;
        updateProductCarousel();
    });

    nextBtn.addEventListener('click', () => {
        productIndex = (productIndex === totalProductSlides - 1) ? 0 : productIndex + 1;
        updateProductCarousel();
    });
})();

