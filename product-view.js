// Global variable to store the selected size
let selectedSize = null;

document.addEventListener("DOMContentLoaded", function() {
  // Use event delegation on the size container so it works for dynamically created buttons
  const sizeContainer = document.getElementById("size-options");
  sizeContainer.addEventListener("click", function(e) {
    if (e.target && e.target.matches("button.size-btn")) {
      selectedSize = e.target.textContent;  // Save the clicked size
      
      // Remove active class from all buttons within the container
      Array.from(sizeContainer.children).forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active"); // Highlight the selected button
    }
  });
  
  // Attach event listeners for the Add to Cart and Buy Now buttons
  const addCartBtn = document.querySelector(".add-cart");
  const buyNowBtn = document.querySelector(".buy-now");

  addCartBtn.addEventListener("click", () => {
    if (addToCart()) {
      alert("Item added to cart.");
    }
  });

  buyNowBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior (especially if wrapped in a link)
    if (addToCart()) {
      window.location.href = "view-cart.html";
    }
  });
});

// Function to add item to cart
function addToCart() {
  // Retrieve product details from localStorage
  const productData = JSON.parse(localStorage.getItem("selectedProduct"));
  // Get quantity value (default to 1)
  const quantity = parseInt(document.querySelector(".quantity-btn").value) || 1;
  
  // Validate that a size is selected
  if (!selectedSize) {
    alert("Please select a size.");
    return false;
  }
  
  // Build the cart item object, overriding the productData 'size' array with the selected size
  const cartItem = {
    ...productData,
    size: selectedSize,  // now holds the clicked size only
    quantity
  };
  
  // Get current cart or empty array if none exists
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Update the cart count in header (assuming updateCartCount is defined in script.js)
  updateCartCount();
  return true;
}
