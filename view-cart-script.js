const SHIPPING_FEE = 120;

// Elements for order summary
const itemsSubtotalEl = document.querySelector(".items-subtotal");
const shippingFeeEl = document.querySelector(".shipping-fee");
const totalAmountEl = document.querySelector(".total-amount");

// Function to recalc the total price based on the cart items in the DOM
function recalcTotal() {
  let subtotal = 0;
  // Re-select the cart items after they have been rendered
  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach(item => {
    // Get the price from data attribute and quantity from the input
    const price = parseFloat(item.dataset.price) || 0;
    const quantityInput = item.querySelector("input[type='number']");
    const quantity = parseInt(quantityInput.value) || 1;
    subtotal += price * quantity;
  });

  // Update the summary in the DOM
  itemsSubtotalEl.textContent = `₱${subtotal.toFixed(2)}`;
  shippingFeeEl.textContent = `₱${SHIPPING_FEE.toFixed(2)}`;
  totalAmountEl.textContent = `₱${(subtotal + SHIPPING_FEE).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function renderCartItems() {
  const cartContainer = document.querySelector(".cart-items-container");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = ""; // Clear previous items

  cart.forEach((item, index) => {
    // Extract numerical value from price string (remove currency symbols)
    const priceNumber = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    
    // Create the cart item element
    const cartItemEl = document.createElement("section");
    cartItemEl.className = "cart-item";
    cartItemEl.dataset.price = priceNumber;
    
    // Updated the size property from "selectedSize" to "size"
    cartItemEl.innerHTML = `
      <ul>
        <li>
          <img src="${item.image[0]}" alt="${item.name}" />
        </li>
        <li class="product-details">
          <h4>${item.name}</h4>
          <h5>${item.price}</h5>
          <p>Size: ${item.size}</p>
        </li>
        <li class="product-quantity">
          <p>Quantity</p>
          <input type="number" min="1" max="99" value="${item.quantity}" data-index="${index}" />
        </li>
        <li>
          <i class="fa-solid fa-xmark remove-icon" style="margin: auto; cursor: pointer;" data-index="${index}"></i>
        </li>
      </ul>
    `;
    cartContainer.appendChild(cartItemEl);
  });
  
  // Reattach listeners for quantity changes and item removal
  attachCartEventListeners();
  recalcTotal();
}

function attachCartEventListeners() {
  // For quantity changes
  document.querySelectorAll(".cart-item input[type='number']").forEach(input => {
    input.addEventListener("change", (e) => {
      let newQty = parseInt(e.target.value);
      if (newQty < 1) {
        e.target.value = 1;
        newQty = 1;
      }
      const index = e.target.getAttribute("data-index");
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart[index].quantity = newQty;
      localStorage.setItem("cart", JSON.stringify(cart));
      recalcTotal();
    });
  });
  
  // For remove icons
  document.querySelectorAll(".remove-icon").forEach(icon => {
    icon.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (confirm("Are you sure you want to remove this item?")) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems(); // Re-render cart items after removal
        updateCartCount();
      }
    });
  });
}

// Payment Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
  // Render the cart items and update order summary when the page loads
  renderCartItems();
  updateCartCount();
  
  // Modal elements
  const checkoutBtn = document.getElementById("checkoutBtn");
  const paymentModal = document.getElementById("paymentModal");
  const closeModalBtn = document.getElementById("closeModal");
  const paymentForm = document.getElementById("paymentForm");
  const modalTotal = document.getElementById("modalTotal");

  // When clicking "Proceed to Checkout"
  checkoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Sync modal total with the current total amount from order summary
    modalTotal.textContent = totalAmountEl.textContent;
    // Display the modal by adding the "show" class
    paymentModal.classList.add("show");
  });

  // When clicking the close button (x) on the modal
  closeModalBtn.addEventListener("click", () => {
    paymentModal.classList.remove("show");
  });

  // Handle payment form submission
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Payment Successful!");
    paymentModal.classList.remove("show");
  });
});

// Update cart count function (for header)
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelectorAll(".cart_btn").forEach(btn => {
    btn.innerHTML = `<i class="fa-solid fa-bag-shopping bag-icon"></i>Cart (${cart.length})`;
  });
}
