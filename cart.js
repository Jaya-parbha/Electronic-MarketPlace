// JavaScript for Cart Page

// Mock cart data (replace with backend API or localStorage for real implementation)
let cart = [
  { id: 1, name: "Product 1", price: 50.0, quantity: 1 },
  { id: 2, name: "Product 2", price: 30.0, quantity: 2 },
];

// Render cart items
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartSubtotal = document.getElementById("cart-subtotal");

  cartItems.innerHTML = ""; // Clear existing items
  let subtotal = 0;

  cart.forEach(item => {
    const total = item.price * item.quantity;
    subtotal += total;

    cartItems.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <input type="number" min="1" value="${item.quantity}" class="quantity" data-id="${item.id}">
        </td>
        <td>$${total.toFixed(2)}</td>
        <td><button class="remove-item" data-id="${item.id}">Remove</button></td>
      </tr>
    `;
  });

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
}

// Update cart item quantity
function updateQuantity(event) {
  const id = parseInt(event.target.dataset.id);
  const newQuantity = parseInt(event.target.value);

  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity = newQuantity > 0 ? newQuantity : 1;
    renderCart();
  }
}

// Remove item from cart
function removeItem(event) {
  const id = parseInt(event.target.dataset.id);

  cart = cart.filter(item => item.id !== id);
  renderCart();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  document.getElementById("cart-items").addEventListener("change", event => {
    if (event.target.classList.contains("quantity")) {
      updateQuantity(event);
    }
  });

  document.getElementById("cart-items").addEventListener("click", event => {
    if (event.target.classList.contains("remove-item")) {
      removeItem(event);
    }
  });

  document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Proceeding to checkout...");
  });
});
