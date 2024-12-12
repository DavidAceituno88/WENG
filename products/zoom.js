document.addEventListener('DOMContentLoaded', function() {
    // Load the clicked image into the modal
    var carouselImages = document.querySelectorAll('.carousel-image');
    carouselImages.forEach(function(image) {
        image.addEventListener('click', function() {
            var imgSrc = this.getAttribute('data-img-src');
            var modalImage = document.getElementById('modalImage');
            modalImage.src = imgSrc;
        });
    });

    // Double-Click Zoom & Drag Functionality
    const modalImage = document.getElementById('modalImage');
    let zoomLevel = 0;
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    // Double-click to zoom
    modalImage.addEventListener('dblclick', () => {
        zoomLevel++;
        if (zoomLevel === 1) {
            modalImage.classList.remove('zoom-level-reset');
            modalImage.classList.add('zoom-level-1');
        } else if (zoomLevel === 2) {
            modalImage.classList.remove('zoom-level-1');
            modalImage.classList.add('zoom-level-2');
        } else {
            modalImage.classList.remove('zoom-level-2');
            modalImage.classList.add('zoom-level-reset');
            zoomLevel = 0;  // Reset the zoom level counter
        }
    });

    
});
