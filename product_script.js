// JavaScript for Enhanced Product Section

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add active class to the clicked button and corresponding panel
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// Wishlist button functionality
const wishlistButton = document.querySelector('.wishlist');
wishlistButton.addEventListener('click', () => {
  alert('Product added to your wishlist!');
});

// Share button functionality
const shareButton = document.querySelector('.share');
shareButton.addEventListener('click', () => {
  const shareURL = window.location.href;
  navigator.clipboard.writeText(shareURL).then(() => {
    alert('Product link copied to clipboard!');
  }).catch(() => {
    alert('Failed to copy link.');
  });
});

// Quantity selector
const quantityInput = document.querySelector('#quantity');
quantityInput.addEventListener('input', () => {
  const value = parseInt(quantityInput.value);
  if (value < 1 || value > 10 || isNaN(value)) {
    quantityInput.value = 1;
    alert('Please select a quantity between 1 and 10.');
  }
});

// Add to Cart button functionality
const addToCartButton = document.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', () => {
  const quantity = document.querySelector('#quantity').value;
  alert(`Added ${quantity} item(s) to your cart!`);
});


 // Get the selected image from sessionStorage
        const selectedImage = sessionStorage.getItem('selectedImage');
        const selectedDescription = sessionStorage.getItem('selectedDescription');
        

        if (selectedImage  && selectedDescription) {
            // Display the selected image on the cart page
            document.getElementById('cart-image').src = selectedImage;
            document.getElementById('description').textContent = selectedDescription;
        } else {
            document.getElementById('description').alt = "No product selected.";
        }