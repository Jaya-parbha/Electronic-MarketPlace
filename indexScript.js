let currentIndex = 0;

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.img_slider');
const totalSlides = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1) % totalSlides;
    updateSliderPosition();
}

function updateSliderPosition() {
    const offset= -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

const autoSlideInterval = setInterval(nextSlide, 5000); 