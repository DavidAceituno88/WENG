let currentIndex = 0;

function currentSlide(index) {
    const images = document.querySelectorAll('.slider-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update the main image based on the clicked thumbnail
    currentIndex = index - 1; // Adjust for 0-based index
    updateSlider();
}

function updateSlider() {
    const images = document.querySelectorAll('.slider-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Slide the images
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Highlight the active thumbnail
    for (let i = 0; i < thumbnails.length; i++) {
        if (i === currentIndex) {
            thumbnails[i].style.opacity = 1;
        } else {
            thumbnails[i].style.opacity = 0.7;
        }
    }
}