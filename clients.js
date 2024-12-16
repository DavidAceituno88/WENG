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
