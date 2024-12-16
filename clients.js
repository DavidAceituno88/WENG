let currentIndex = 0;
        const slides = document.querySelectorAll('.slideC');
        const totalSlides = slides.length;
        const slider = document.querySelector('.sliderC');

        function showSlides(index) {
            if (index >= totalSlides - 2) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 3;
            } else {
                currentIndex = index;
            }
            const offset = -(currentIndex * 100) / 3;
            slider.style.transform = `translateX(${offset}%)`;
        }

        document.getElementById('prev').addEventListener('click', () => {
            showSlides(currentIndex - 1);
        });

        document.getElementById('next').addEventListener('click', () => {
            showSlides(currentIndex + 1);
        });