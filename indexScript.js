

// Attach click event to each image
       document.querySelectorAll('.offer-image').forEach(image => {
            image.addEventListener('click', function() {
                const imageSrc = image.src;
                const description = image.nextElementSibling.textContent;

                // Store both image and description in sessionStorage
                sessionStorage.setItem('selectedImage', imageSrc);
                sessionStorage.setItem('selectedDescription', description);

                // Redirect to the cart page
                window.location.href = 'product.html';
            });
        });


const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.img_slider');
const prevButton = document.querySelector('.nav-button.left');
const nextButton = document.querySelector('.nav-button.right');

let currentIndex = 0;

// Function to update the slider position
function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listener for the next button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSliderPosition();
});

// Event listener for the previous button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSliderPosition();
});
