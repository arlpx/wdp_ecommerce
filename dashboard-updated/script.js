// Selecting DOM elements
const categoryActive = document.querySelectorAll(".categories ul li a");
const productContainer = document.querySelector(".product-list");
const newProductList = document.querySelector(".newproduct-list");

// Product data
const products = [
    { name: "Asics Sonoma", category: "asics", image: "assets/product_img/asics/asics_netburner_1.webp", price: "₱ 6,990.00", rating: 4.5, reviews: 143 },
    { name: "Nike Kobe 8", category: "nike", image: "assets/product_img/nike/nike_kobe8_1.png", price: "₱ 6,990.00", rating: 4.5, reviews: 143 },
    { name: "Crocs Baya", category: "crocs", image: "assets/product_img/crocs/crocs_baya_1.webp", price: "₱ 6,990.00", rating: 4.5, reviews: 143 },
    { name: "Jordan AJ1", category: "jordan", image: "assets/product_img/jordan/jordan_aj1_1.webp", price: "₱ 6,990.00", rating: 4, reviews: 143 },
    { name: "New Balance 9060", category: "new-balance", image: "assets/product_img/new_balance/new_balance_9060_1.webp", price: "₱ 6,990.00", rating: 4.5, reviews: 143 },
    { name: "ASICS NOVABLAST 5", category: "asics", class:"Running Shoes", image: "assets/product_img/asics/asics_novablast5_1.webp", price: "₱ 10,000.00", rating: 4.5, reviews: 143  },
    { name: "NIKE PRECISION 7", category: "nike", class: "Basketball Shoes", image: "assets/product_img/nike/nike_gtcut3_1.png", price: "₱ 10,000.00", rating: 4.5, reviews: 143  },
    { name: "JORDAN RETRO 1 HIGH",category: "jordan", class: "Basketball Shoes",image: "assets/product_img/jordan/jordan_aj1_1.webp", price: "₱ 10,000.00", rating: 4.5, reviews: 143  },
    { name: "NEW BALANCE", category: "new-balance", class:"Running Shoes", image: "assets/product_img/new_balance/new_balance_8xnbn480_1.webp", price: "₱ 10,000.00", rating: 2, reviews: 143  }
];

// Function to generate star ratings
function getStarRating(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
        } else if (i - rating < 1) {
            stars += `<i class="fa-regular fa-star-half-stroke" style="color: #FFD43B;"></i>`;
        } else {
            stars += `<i class="fa-regular fa-star" style="color: #FFD43B;"></i>`;
        }
    }
    return stars;
}

// Function to display products
function displayProducts(category = "all") {
    let html = "";
    products.forEach(product => {
        if (category === "all" || product.category === category) {
            html += `
                <li class="card" data-category="${product.category}">
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>
                        ${getStarRating(product.rating)}
                        <span>(${product.reviews})</span>
                    </p>
                    <h5>${product.price}</h5>
                </li>
            `;
        }
    });
    productContainer.innerHTML = html;
}

// Function to handle category filtering
function setupCategoryFilters() {
    categoryActive.forEach(link => {
        if (link.dataset.category === "all") {
            link.classList.add("active");
        }

        link.addEventListener("click", function (event) {
            event.preventDefault();

            categoryActive.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            displayProducts(this.dataset.category);
        });
    });
}

function displayNewProducts() {
    const newProductList = document.querySelector(".newproduct-list"); 
    if (!newProductList) return; // Ensure the element exists

    const selectedProduct = ["ASICS NOVABLAST 5", "NIKE PRECISION 7", "JORDAN RETRO 1 HIGH", "NEW BALANCE"]; 

    // Filter products based on selected names
    const filteredProducts = products.filter(product => selectedProduct.includes(product.name));

    let newProducts = "";

    filteredProducts.forEach(product => {
        newProducts += `
            <li>
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.class}</p>
                <h1>${product.price}</h1>
                <button class="cartBtn">Add to Cart</button>
            </li>
        `;
    });

    newProductList.innerHTML = newProducts;
}


document.addEventListener("DOMContentLoaded", function () {
    displayNewProducts();
    setupCategoryFilters();
    displayProducts(); 
});
