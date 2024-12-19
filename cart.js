// cart.js

document.addEventListener("DOMContentLoaded", () => {
    // Set up event listeners for quantity changes and item removal
    const removeButtons = document.querySelectorAll('.remove-btn');
    const quantityInputs = document.querySelectorAll('.quantity input');
    
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cartItem = e.target.closest('.cart-item');
            cartItem.remove();
            updateCartSummary();
        });
    });
    
    quantityInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            updateCartSummary();
        });
    });
    
    // Function to update cart summary
    function updateCartSummary() {
        let subtotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('p').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('input').value);
            subtotal += price * quantity;
        });
        
        const shipping = 10.00; // You can modify this logic based on user location or other factors
        const total = subtotal + shipping;
        
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }
});
