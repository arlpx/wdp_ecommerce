document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        // Insert the navbar HTML into the placeholder
        document.getElementById('navbar').innerHTML = data;
        // Dynamically load the nav-script.js so the hamburger works
        const script = document.createElement('script');
        script.src = 'nav-script.js';
        document.body.appendChild(script);
      })
      .catch(error => console.error('Error loading navbar:', error));
  });
  
  

/************************************************************
    * DYNAMIC CART TOTAL CALCULATIONS
    ************************************************************/
const SHIPPING_FEE = 120;

// Grab references
const cartItems = document.querySelectorAll(".cart-item");
const itemsSubtotalEl = document.querySelector(".items-subtotal");
const shippingFeeEl = document.querySelector(".shipping-fee");
const totalAmountEl = document.querySelector(".total-amount");

function recalcTotal() {
    let subtotal = 0;

    // Loop through each cart item
    cartItems.forEach((item) => {
        // If item is removed from DOM, skip it
        if (!document.body.contains(item)) return;

        const price = parseFloat(item.dataset.price) || 0;
        const quantityInput = item.querySelector("input[type='number']");
        const quantity = parseInt(quantityInput.value) || 1;

        // Accumulate total
        subtotal += price * quantity;
    });

    // Update the DOM
    itemsSubtotalEl.textContent = `₱${subtotal.toFixed(2)}`;
    shippingFeeEl.textContent = `₱${SHIPPING_FEE.toFixed(2)}`;
    totalAmountEl.textContent = `₱${(subtotal + SHIPPING_FEE).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

// Attach event listeners to each cart item
cartItems.forEach((item) => {
    // 1) Listen for quantity changes
    const quantityInput = item.querySelector("input[type='number']");
    quantityInput.addEventListener("change", () => {
        // Ensure valid quantity
        if (quantityInput.value < 1) {
            quantityInput.value = 1;
        }
        recalcTotal();
    });

    // 2) Listen for remove icon click
    const removeIcon = item.querySelector(".remove-icon");
    removeIcon.addEventListener("click", () => {
        const confirmRemove = confirm("Are you sure you want to remove this item?");
        if (confirmRemove) {
            // Remove from DOM
            item.remove();
            alert("Item removed from the cart");
            recalcTotal();
        }
    });
});

// Initial calculation on page load
recalcTotal();

/************************************************************
 * PAYMENT MODAL FUNCTIONALITY
 ************************************************************/
const checkoutBtn = document.getElementById("checkoutBtn");
const paymentModal = document.getElementById("paymentModal");
const closeModalBtn = document.getElementById("closeModal");
const paymentForm = document.getElementById("paymentForm");
const modalTotal = document.getElementById("modalTotal");

// Show modal on "Proceed to Checkout"
// Prevent default form submission so we don't refresh the page
checkoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Sync modal total with cart's total
    modalTotal.textContent = totalAmountEl.textContent;

    // Show the modal
    paymentModal.classList.add("show");
});

// Close modal (x button)
closeModalBtn.addEventListener("click", () => {
    paymentModal.classList.remove("show");
});

// Handle payment form submission
paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // You can integrate real payment logic here.
    alert("Payment Successful!");
    paymentModal.classList.remove("show");
});