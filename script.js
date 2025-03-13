// Selecting DOM elements
const categoryActive = document.querySelectorAll(".categories ul li a");
const productContainer = document.querySelector(".product-list");
const newProductList = document.querySelector(".newproduct-list");

// Product data
const products = [
    // JORDAN
{
    name: "Jordan AJ 1 Mid",
    category: "jordan",
    image: ["assets/product_img/jordan/jordan_aj1_1.webp", "assets/product_img/jordan/jordan_aj1_2.webp", "assets/product_img/jordan/jordan_aj1_3.webp"],
    price: "₱ 7,182.75",
    size: [7, 8, 9, 10, 11],
    colour: "Red/White/Black",
    rating: 5.0,
    reviews: 360,
    description: "Feel the urban pulse with Jordan! Bolder and brighter than ever before, the Jordan AJ 1 Mid SE is sure to exceed your expectations. Familiar but always fresh, these updated sneakers put a contemporary spin on what you love most about the Jordan family. Backed by a cushy encapsulated Nike Air-Sole unit, these silhouettes energise your steps for an unstoppable journey ahead. The wings logo on the collar gives you all the confidence you need to fly towards your dreams and touch the infinite. What’s more? A futuristic perspective plays around with new colours, textures, subtle accents, and premium materials—giving you a staple sneaker with a modern expression. Remastered for fashion mavens like you, the Jordan AJ 1 Mid SE refreshes your ever-evolving style and lets you make bold moves."
},
{
    name: "Jordan AJ 1 Low",
    category: "jordan",
    image: ["assets/product_img/jordan/jordan_aj1_low_1.webp", "assets/product_img/jordan/jordan_aj1_low_2.webp", "assets/product_img/jordan/jordan_aj1_low_3.webp"],
    price: "₱ 6,608.13",
    colour: "Brown/White",
    size: [7, 8, 9, 10, 11],
    rating: 4.5,
    reviews: 240,
    description: "Sleek. Smooth. Unmistakable. The Jordan AJ 1 Low SE is your go-to for that classic yet fresh street look. Sporting design details inspired by the ’85 originals, these low-tops still turn heads while keeping you grounded in decades-approved style. The unlikely pairing of full-grain leather overlays with satin underlays gives these J’s an extra-smooth look and feel—rewriting the rules in sneaker-chic. Cop the Jordan AJ 1 Low SE for its classic appeal and modern feel. You still walk on ‘Air’ but with luxury all around your feet!"
},
{
    name: "Jordan Tatum 3",
    category: "jordan",
    image: ["assets/product_img/jordan/jordan_tatum_3_1.webp", "assets/product_img/jordan/jordan_tatum_3_2.webp", "assets/product_img/jordan/jordan_tatum_3_3.webp"],
    price: "₱ 7,182.75",
    colour: "Beige/White",
    size: [7, 8, 9, 10, 11],
    rating: 4.0,
    reviews: 130,
    description: "Glide through your game with the calm yet electrifying energy of Jason Tatum backing you up in the Jordan Tatum 3. Designed to keep up with your game, these lightweight sneakers feature a flexible textile upper that delivers exceptional performance and helps maximize your speed. The combination of soothing shades and vibrant color creates a striking look. The Cushlon 3.0 foam and a springy Air Zoom unit ensure a smooth, cushioned ride underfoot, while a firm frame keeps your feet secure during jumps and quick cuts. Stay cool under pressure and dominate the game just like Jayson with the Jordan Tatum 3."
},
{
    name: "Jordan AJ XXXIX",
    category: "jordan",
    image: ["assets/product_img/jordan/jordan_aj_xxxix_1.webp", "assets/product_img/jordan/jordan_aj_xxxix_2.webp", "assets/product_img/jordan/jordan_aj_xxxix_3.webp"],
    price: "₱ 11,492.40",
    colour: "Red",
    size: [7, 8, 9, 10, 11],
    rating: 5.0,
    reviews: 60,
    description: "Fly just like MJ! Always fresh and never out of style, the Jordan AJ XXXIX is one of the most iconic silhouettes ever. Featuring a ZoomX foam, these sneakers adjust to the natural shape of your foot while offering soft and springy cushioning without weighing you down. The crash pad at the instep helps keep your foot in place for superior comfort. Influenced by MJ's cross step from the sole up, the built-in sidewall cupsole provides stability during lateral movements and ensures full engagement of the underfoot cushioning. Raise the bar with every game you play in the Jordan AJ XXXIX."
},
    // NEW BALANCE
{
    name: "New Balance FuelCell SuperComp Trail",
    category: "new-balance",
    image: ["assets/product_img/new_balance/new_balance_fst_1.png", "assets/product_img/new_balance/new_balance_fst_2.png", "assets/product_img/new_balance/new_balance_fst_3.png"],
    price: "₱ 11,494.02",
    colour: "Clay Ash/Yellow",
    size: [7, 8, 9, 10, 11],
    rating: 4.5,
    reviews: 120,
    description: "The New Balance FuelCell SuperComp Trail is a high-performance trail running shoe designed for speed. It features a carbon-plated design and FuelCell midsole with bio-based content for exceptional energy return. The Energy Arc technology further enhances propulsion through a strategically designed carbon fiber plate and midsole voids. A Vibram® Megagrip outsole with Lightbase construction ensures superior traction and reduced weight, all within a lightweight 208-gram package."
},
{
    name: "New Balance Fresh Foam X Vongo v6",
    category: "new-balance",
    image: ["assets/product_img/new_balance/new_balance_ffxvv6_1.png", "assets/product_img/new_balance/new_balance_ffxvv6_2.png", "assets/product_img/new_balance/new_balance_ffxvv6_3.png"],
    price: "₱ 9,482.47",
    colour: "Black/White",
    size: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 223,
    description: "The New Balance Fresh Foam X midsole provides maximum cushioning, while a supportive medial zone and Stability Plane work to reduce overpronation without sacrificing comfort. The shoe also features a breathable engineered mesh upper and a comfortable, no-sew synthetic overlay design. Notably, it has received the Seal of Acceptance from the APMA, and weighs 303 grams (10.7 oz)."
},
{
    name: "New Balance 8Five2 x NB Numeric 480",
    category: "new-balance",
    image: ["assets/product_img/new_balance/new_balance_8xnbn480_1.png", "assets/product_img/new_balance/new_balance_8xnbn480_2.png", "assets/product_img/new_balance/new_balance_8xnbn480_3.png"],
    price: "₱ 6,321.45",
    colour: "Olive/Tan/Black",
    size: [7, 8, 9, 10, 11],
    rating: 4.0,
    reviews: 90,
    description: "The New Balance 8Five2 x NB Numeric 480 draws inspiration from the '80s and '90s skate scene, blending retro style with modern performance. A FuelCell foam midsole provides a responsive, propulsive feel, while a reinforced toe cap enhances durability for skateboarding. The design is reminiscent of classic basketball shoes, and the upper is constructed from leather."
},
{
    name: "New Balance 9060",
    category: "new-balance",
    image: ["assets/product_img/new_balance/new_balance_9060_1.png", "assets/product_img/new_balance/new_balance_9060_2.png", "assets/product_img/new_balance/new_balance_9060_3.png"],
    price: "₱ 8,620.37",
    colour: "Black/White/Gray",
    size: [7, 8, 9, 10, 11],
    rating: 4.5,
    reviews: 150,
    description: "The 9060 is a new expression of the refined style and innovation-led design of the classic 99X series. The 9060 reinterprets familiar 99X elements with a warped sensibility inspired by the proudly futuristic, visible tech aesthetic of the Y2K era. Sway bars, taken from the 990, are expanded and utilized throughout the entire upper for a sense of visible motion, while wavy lines and scaled up proportions on a sculpted pod midsole place an exaggerated emphasis on the familiar cushioning platforms of ABZORB and SBS."
},

// NIKE
{
    name: "Nike Vomero 18",
    category: "nike",
    image: ["assets/product_img/nike/nike_vomero18_1.png", "assets/product_img/nike/nike_vomero18_2.png", "assets/product_img/nike/nike_vomero18_3.png"],
    price: "₱ 8,395.00",
    colour: "White/Green",
    size: [7, 8, 9, 10, 11],
    rating: 4.5,
    reviews: 243,
    description: "Maximum cushioning in the Vomero provides a comfortable ride for everyday runs. Our softest, most cushioned ride has lightweight ZoomX foam stacked on top of responsive ReactX foam in the midsole. Plus, a redesigned traction pattern offers a smooth heel-to-toe transition."
},
{
    name: "Nike Air Max Dn8",
    category: "nike",
    image: ["assets/product_img/nike/nike_amdn8_1.png", "assets/product_img/nike/nike_amdn8_2.png", "assets/product_img/nike/nike_amdn8_3.png"],
    price: "₱ 10,895.00",
    colour: "Black/Red",
    size: [7, 8, 9, 10, 11],
    rating: 4.0,
    reviews: 150,
    description: "More Air, less bulk. The Dn8 takes our Dynamic Air system and condenses it into a sleek, low-profile package. Powered by eight pressurised Air tubes, it gives you a responsive sensation with every step. Enter an unreal experience of movement."
},
{
    name: "Nike Kobe VIII",
    category: "nike",
    image: ["assets/product_img/nike/nike_kobe8_1.png", "assets/product_img/nike/nike_kobe8_2.png", "assets/product_img/nike/nike_kobe8_3.png"],
    price: "₱ 10,795.00",
    colour: "Black/Gold/White",
    size: [7, 8, 9, 10, 11],
    rating: 5.0,
    reviews: 240,
    description: "This Kobe's made for you—a rising star ready to play. Faithfully recreated with the same unforgettable look, the Kobe 8 strips away the excess to near perfection for a shoe that looks as fast as it feels."
},
{
    name: "Nike G.T. Cut 3 EP",
    category: "nike",
    image: ["assets/product_img/nike/nike_gtcut3_1.png", "assets/product_img/nike/nike_gtcut3_2.png", "assets/product_img/nike/nike_gtcut3_3.png"],
    price: "₱ 10,295.00",
    colour: "Green/Black",
    size: [7, 8, 9, 10, 11],
    rating: 4.3,
    reviews: 165,
    description: "How can you separate your game when it's winning time? Start by lacing up in the G.T. Cut 3. Designed to help you create space for stepback jumpers and backdoor cuts, its sticky multi-court traction helps you stop in an instant and shift gears at will. And when you're making all those game-changing plays, the newly added, ultra-responsive ZoomX foam helps keep you fresh for all four quarters. With its extra-durable rubber outsole, this version gives you traction for outdoor courts."
},

// CROCS
{
    name: "Crocs Monsters Inc Mike Clog",
    category: "crocs",
    image: ["assets/product_img/crocs/crocs_mikeclog_1.webp", "assets/product_img/crocs/crocs_mikeclog_2.webp", "assets/product_img/crocs/crocs_mikeclog_3.webp"],
    price: "₱ 4,495.00",
    colour: "Green",
    size: [7, 8, 9, 10, 11],
    rating: 4.5,
    reviews: 120,
    description: "The Monsters Inc© Mike Classic Clog from Crocs, a shoe designed to resemble the character Mike Wazowski from Disney Pixar's Monsters, Inc©. It is made with Crocs' signature Croslite™ material, including 25% bio-circular content, offering lightweight comfort, water-friendliness, and easy cleaning.  Additional features include enhanced breathability, a secure heel strap, and the brand's iconic 360-degree comfort."
},
{
    name: "Crocs Baya Sandal",
    category: "crocs",
    image: ["assets/product_img/crocs/crocs_baya_1.webp", "assets/product_img/crocs/crocs_baya_2.webp", "assets/product_img/crocs/crocs_baya_3.webp"],
    price: "₱ 2,845.00",
    colour: "Black",
    size: [7, 8, 9, 10, 11],
    rating: 4.0,
    reviews: 90,
    description: "Reach a new level of comfort in the Baya Platform Sandal. A two-strap, elevated sandal version of the endlessly popular Baya Clog, this silhouette features room for personalization and Iconic Crocs Comfort™. The elevated platform sole adds a touch of style to your everyday look."
},
{
    name: "Crocs Echo Clog",
    category: "crocs",
    image: ["assets/product_img/crocs/crocs_echo_1.webp", "assets/product_img/crocs/crocs_echo_2.webp", "assets/product_img/crocs/crocs_echo_3.webp"],
    price: "₱ 4,495.00",
    colour: "Latte",
    size: [7, 8, 9, 10, 11],
    rating: 4.5,
    reviews: 150,
    description: "The Echo Collection is for those who want comfort without compromising their look. This fully molded clog is anything but conformist, with bold sculpting and sport inspiration that keeps streetwear at its core. With Croslite™ construction and a LiteRide™ drop-in footbed, you can stay comfortable while hitting the street in the Echo collection."
},
{
    name: "Crocs Bayaband Flip",
    category: "crocs",
    image: ["assets/product_img/crocs/crocs_bayaband_1.webp", "assets/product_img/crocs/crocs_bayaband_2.webp", "assets/product_img/crocs/crocs_bayaband_3.webp"],
    price: "₱ 2,370.00",
    colour: "Blue/Red/White",
    size: [7, 8, 9, 10, 11],
    rating: 4.0,
    reviews: 100,
    description: "What happens when you combine two of Crocs’ most iconic silhouettes, the Baya and the Crocband™, into one special pair? You get the Bayaband Flip, a style that takes the fashion-athletic spirit of the originals to another level. The result is a go-anywhere style staple that lets you stay cool while throwing off an extra pop of Crocs spirit. And of course, molded Croslite™ construction means you’ll stay comfortable all day long."
},
// ASICS
{
    name: "Asics Novablast 5",
    category: "asics",
    image: ["assets/product_img/asics/asics_novablast5_1.webp", "assets/product_img/asics/asics_novablast5_2.webp", "assets/product_img/asics/asics_novablast5_3.webp"],
    price: "₱ 9,090.00",
    colour: "Teal/Orange",
    size: [7, 8, 9, 10, 11],
    rating: 5.0,
    reviews: 312,
    description: "The NOVABLAST™ 5 running shoe's midsole and outsole geometry that helps produce an energized ride. FF BLAST™ MAX cushioning helps create softer landings and a more energized toe-off during your training. A tongue wing construction in the upper helps improve the fit while reducing tongue movement. It's complemented with an engineered jacquard mesh upper that offers more stretch and ventilation."
},
{
    name: "Asics Solution Speed",
    category: "asics",
    image: ["assets/product_img/asics/asics_solspeed_1.webp", "assets/product_img/asics/asics_solspeed_2.webp", "assets/product_img/asics/asics_solspeed_3.webp"],
    price: "₱ 9,490.00",
    colour: "Blue/White/Silver",
    size: [7, 8, 9, 10, 11],
    rating: 4.0,
    reviews: 90,
    description: "The SOLUTION SPEED™ FF 3 shoe is designed for the all-court tennis player who's seeking a fast and lightweight shoe that's built for speed. Featuring SPEEDTRUSS™ technology, this shoe improves your agility to move around the court. It also helps you experience better acceleration when dashing forward.​ Meanwhile, the new engineered mesh and film upper and algorithmically generated outsole are lightweight and offer excellent grip and flexibility, which allows you to increase your speed on the court."
},
{
    name: "Asics Netburner Professional",
    category: "asics",
    image: ["assets/product_img/asics/asics_netburner_1.webp", "assets/product_img/asics/asics_netburner_2.webp", "assets/product_img/asics/asics_netburner_3.webp"],
    price: "₱ 9,490.00",
    colour: "Black/Cyan",
    size: [7, 8, 9, 10, 11],
    rating: 4.5,
    reviews: 250,
    description: "The NETBURNER PROFESSIONAL™ FF 4 is designed for netball, volleyball, and handball players seeking a lightweight shoe that's fast and flexible.​ The revamped upper and FLYTEFOAM™ cushioning material help reduce the shoe's overall weight. This helps create a more comfortable fit and a comfortable feel underfoot.​ The outsole's flexion grooves feature are updated and help to improve flexibility. They're designed to help you experience faster transitions and move smoothly.​ Lastly, the upper's new panel construction in the lateral helps deliver better midfoot support and the addition of 3D SPACE CONSTRUCTION™ helps provide a smoother forward weight transfer."
},
{
    name: "Asics Gel Sonoma 7",
    category: "asics",
    image: ["assets/product_img/asics/asics_sonoma_1.webp", "assets/product_img/asics/asics_sonoma_2.webp", "assets/product_img/asics/asics_sonoma_3.webp"],
    price: "₱ 5,590.00",
    colour: "Black/Green",
    size: [7, 8, 9, 10, 11],
    rating: 4.4,
    reviews: 176,
    description: "The GEL-SONOMA™ 7 GTX shoe is designed for the great outdoors. It's formed with a GORE-TEX™ membrane that helps keep your feet warm and dry when you're running in wet conditions. Underfoot comfort stems from a full-length AMPLIFOAM™ midsole and GEL™ technology unit that's strategically placed where cushioning is needed. Lastly, the trail-specific outsole is functional for providing advanced traction. Its pattern helps you experience a confident stride on the uphill and downhill sections of challenging terrain."
}
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
                <li class="card" data-category="${product.category}" data-name="${product.name}">
                    <img src="${product.image[0]}" alt="${product.name}">
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

    // Add event listeners to each product
    document.querySelectorAll(".card").forEach(item => {
        item.addEventListener("click", function () {
            const productName = this.dataset.name;
            const productData = products.find(product => product.name === productName);
            

            if (productData) {
                localStorage.setItem("selectedProduct", JSON.stringify(productData));
                window.location.href = "product-view.html";
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));

    if (productData) {
        // Set main image
        const mainImage = document.getElementById("main-image");
        mainImage.src = productData.image[0]; 
        mainImage.alt = productData.name;

        document.getElementById("product-name").textContent = productData.name;
        document.getElementById("product-price").textContent = productData.price;
        document.getElementById("product-color").textContent = productData.colour;
        document.getElementById("product-description").textContent = productData.description;
        document.getElementById("product-rating").innerHTML = getStarRating(productData.rating) +
        ` <span>(${productData.reviews} reviews)</span>`;
        

        // Update size buttons dynamically
        const sizeContainer = document.querySelector(".size-options");
        sizeContainer.innerHTML = "";
        productData.size.forEach(size => {
            const sizeBtn = document.createElement("button");
            sizeBtn.classList.add("size-btn");
            sizeBtn.textContent = size;
            sizeContainer.appendChild(sizeBtn);
        });

        // Select thumbnail gallery
        const thumbnailGallery = document.querySelector(".thumbnail-gallery");
        thumbnailGallery.innerHTML = ""; 

        // Add the first 3 images to the thumbnail gallery
        productData.image.slice(0, 3).forEach((imgSrc, index) => {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.alt = `Thumbnail ${index + 1}`;
            imgElement.classList.add("thumbnail");

            // Clicking a thumbnail updates the main image
            imgElement.addEventListener("click", function () {
                mainImage.src = imgSrc;
            });

            thumbnailGallery.appendChild(imgElement);
        });
    }
     
});

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

    const selectedProduct = ["Asics Novablast 5", "Nike Kobe VIII", "Asics Gel Sonoma 7", "Crocs Monsters Inc Mike Clog"]; 

    // Filter products based on selected names
    const filteredProducts = products.filter(product => selectedProduct.includes(product.name));
    let newProducts = "";

    filteredProducts.forEach(product => {
        newProducts += `
             <li class="card" data-category="${product.category}" data-name="${product.name}">
                <img src="${product.image[0]}" alt="${product.name}">
                <h2>${product.name}</h2>
                <h1>${product.price}</h1>
                <button class="cartBtn">Add to Cart</button>
            </li>
        `;
    });
    newProductList.innerHTML = newProducts;
    document.querySelectorAll(".card").forEach(item => {
        item.addEventListener("click", function () {
            const productName = this.dataset.name;
            const productData = products.find(product => product.name === productName);
            

            if (productData) {
                localStorage.setItem("selectedProduct", JSON.stringify(productData));
                window.location.href = "product-view.html";
            }
        });
    });
}

const searchInput = document.getElementById("inputSearch");

// Function to filter and display products based on search input
function searchProducts() {
    const query = searchInput.value.toLowerCase(); 
    let html = "";

    products.forEach(product => {
        if (product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)) {
            html += `
                <li class="card" data-category="${product.category}" data-name="${product.name}">
                    <img src="${product.image[0]}" alt="${product.name}">
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
    // Update the product list
    productContainer.innerHTML = html;

    // Add event listeners to each product for redirection
    document.querySelectorAll(".card").forEach(item => {
        item.addEventListener("click", function () {
            const productName = this.dataset.name;
            const productData = products.find(product => product.name === productName);
            
            if (productData) {
                localStorage.setItem("selectedProduct", JSON.stringify(productData));
                window.location.href = "product-view.html";
            }
        });
    });
}
// Listen for user input in the search bar
searchInput.addEventListener("input", searchProducts);


document.addEventListener("DOMContentLoaded", function () {
    displayNewProducts();
    setupCategoryFilters();
    displayProducts(); 
});


//updating cart in the header/navbar
function updateCartCount() {
    // get the cart array from localStorage or default to empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // update all header cart buttons (adjust selector if needed)
    document.querySelectorAll(".cart_btn").forEach(btn => {
      btn.innerHTML = `<i class="fa-solid fa-bag-shopping bag-icon"></i>Cart (${cart.length})`;
    });
  }
  
  // Call on page load
  document.addEventListener("DOMContentLoaded", updateCartCount);

  
// Get modal elements
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');

// Get toggle links
const showLogin = document.getElementById('showLogin');
const showSignup = document.getElementById('showSignup');

// Get close buttons
const closeBtns = document.querySelectorAll('.close-btn');

// Get form buttons
const signupSubmit = document.getElementById('signupSubmit');
const loginSubmit = document.getElementById('loginSubmit');

// Reference to header buttons container
const buttonsContainer = document.querySelector('.buttons');

// Function to clear input fields in a given modal
function clearModalInputs(modalId) {
  const modal = document.getElementById(modalId);
  const inputs = modal.querySelectorAll('input');
  inputs.forEach(input => (input.value = ""));
}

// Function to initialize authentication buttons
function renderAuthButtons() {
  buttonsContainer.innerHTML = `
    <a id="signup" href="#">Sign Up</a>
    <a id="login" href="#">Log in</a>
  `;

  document.getElementById('signup').addEventListener('click', (e) => {
    e.preventDefault();
    clearModalInputs('signupModal');
    signupModal.style.display = 'block';
  });

  document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault();
    clearModalInputs('loginModal');
    loginModal.style.display = 'block';
  });
}

// Function to update the header with user information
function updateHeader(username) {
  buttonsContainer.innerHTML = `
    <div class="user-info">
      <span><i class="fa-solid fa-user"></i> Hello, ${username}</span>
      <button id="logoutBtn">Logout</button>
    </div>
  `;

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    renderAuthButtons();
  });
}

// Check if a user is already logged in on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    updateHeader(user.username);
  } else {
    renderAuthButtons();
  }
});

// Toggle to login modal from signup modal
showLogin.addEventListener('click', () => {
  signupModal.style.display = 'none';
  clearModalInputs('loginModal');
  loginModal.style.display = 'block';
});

// Toggle to signup modal from login modal
showSignup.addEventListener('click', () => {
  loginModal.style.display = 'none';
  clearModalInputs('signupModal');
  signupModal.style.display = 'block';
});

// Close modals when clicking the close button
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-close');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Close modals when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === signupModal) {
    signupModal.style.display = 'none';
  }
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Sign Up Functionality
signupSubmit.addEventListener('click', () => {
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();

  if (!username || !email || !password || !confirmPassword) {
    alert('Please fill in all the fields.');
    return;
  }

  if (username.length < 8 || username.length > 16) {
    alert('Username must be between 8 and 16 characters.');
    return;
  }

  if (!email.includes('@') || email.length < 5) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length <= 6) {
    alert('Password must be more than 6 characters.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  const user = { username, email, password };
  localStorage.setItem('registeredUser', JSON.stringify(user));

  alert('Sign Up successful!');
  updateHeader(username);
  localStorage.setItem('loggedInUser', JSON.stringify(user)); // Persist session
  signupModal.style.display = 'none';
});

// Login Functionality
loginSubmit.addEventListener('click', () => {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    alert('Please fill in all the fields.');
    return;
  }

  const storedUser = localStorage.getItem('registeredUser');
  if (!storedUser) {
    alert('No registered user found. Please sign up first.');
    return;
  }

  const user = JSON.parse(storedUser);

  if (email === user.email && password === user.password) {
    alert('Login successful!');

    localStorage.setItem('loggedInUser', JSON.stringify(user)); // Persist session
    updateHeader(user.username);
    loginModal.style.display = 'none';
  } else {
    alert('Invalid email or password.');
  }
});